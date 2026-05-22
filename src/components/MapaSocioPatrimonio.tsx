import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { TownIcon } from './SVGIllustrations';

// Usamos el TopoJSON global confiable desde un CDN
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

interface PuebloMapInfo {
  id: string;
  name: string;
  dept: string;
  region: string;
  coordinates: [number, number]; // [longitud, latitud] reales
  voc: string;
  desc: string;
}

const pueblosMapInfo: PuebloMapInfo[] = [
  { id: 'aguadas', name: 'Aguadas', dept: 'Caldas', region: 'Andina / Eje', coordinates: [-75.45, 5.61], voc: 'Tejido del Sombrero Aguadeño y Piononos', desc: 'Conocida como la "ciudad de las brumas", Aguadas hace parte del Paisaje Cultural Cafetero declarado por la UNESCO. Este encantador municipio es famoso mundialmente por la tradición artesanal del sombrero aguadeño tejido a mano en iraca y su exquisito pionono.' },
  { id: 'barichara', name: 'Barichara', dept: 'Santander', region: 'Andina / Eje', coordinates: [-73.16, 6.63], voc: 'Talla en Piedra y Saberes de Tapia Pisada', desc: 'Reconocido como "el pueblito más lindo de Colombia", es un remanso de paz detenido en el tiempo. Destaca por su impecable arquitectura de tapia pisada, calles empedradas y la maestría de sus talladores de piedra, en un entorno de silenciosa belleza colonial.' },
  { id: 'cienaga', name: 'Ciénaga', dept: 'Magdalena', region: 'Caribe', coordinates: [-74.24, 11.00], voc: 'Turismo Cacaotero, Bananero y Memoria Histórica', desc: 'Capital del Realismo Mágico, goza del privilegio único de estar enmarcada entre el Mar Caribe y la imponente Sierra Nevada. Su deslumbrante arquitectura republicana y ecléctica es el testimonio vivo de la gran bonanza bananera de principios del siglo XX.' },
  { id: 'jardin', name: 'Jardín', dept: 'Antioquia', region: 'Andina / Eje', coordinates: [-75.82, 5.59], voc: 'Café de Origen y Balcones de Madera Coloridos', desc: 'Enclavado en un valle verde rodeado por los Farallones del Citará, Jardín respira cultura cafetera. Su vibrante plaza principal, engalanada con guayacanes, coloridos taburetes tradicionales y su imponente Basílica, lo consolidan como una joya patrimonial.' },
  { id: 'socorro', name: 'Socorro', dept: 'Santander', region: 'Andina / Eje', coordinates: [-73.26, 6.46], voc: 'Historia Comunera y Aventura de Naturaleza', desc: 'Epicentro de la historia nacional, El Socorro es la cuna de la Insurrección Comunera y cimiento de la Independencia de Colombia. Sus estrechas calles de piedra y tapia pisada albergan un profundo legado patriótico y libertario en cada rincón.' },
  { id: 'buga', name: 'Buga', dept: 'Valle del Cauca', region: 'Pacífico / Llanos', coordinates: [-76.30, 3.90], voc: 'Turismo Religioso y Dulces Tradicionales', desc: 'Conocida como la "Ciudad Señora", es la meca del turismo religioso en Colombia y hogar de la majestuosa Basílica del Señor de los Milagros. Su casco histórico preserva una invaluable mezcla de arquitectura colonial y republicana de los siglos XVII y XVIII.' },
  { id: 'honda', name: 'Honda', dept: 'Tolima', region: 'Andina / Eje', coordinates: [-74.73, 5.20], voc: 'Cultura del Río Magdalena y Puentes Coloniales', desc: 'La "Ciudad de los Puentes" reposa a orillas del río Magdalena. Su imponente centro histórico colonial y republicano relata la época dorada de la navegación fluvial, habiendo sido el principal puerto comercial de la historia patria.' },
  { id: 'jerico', name: 'Jericó', dept: 'Antioquia', region: 'Andina / Eje', coordinates: [-75.78, 5.79], voc: 'Talabartería (Carriel Antioqueño) y Religión', desc: 'Cuna de la Santa Madre Laura, Jericó es un remanso de espiritualidad y tradición antioqueña. Es famoso por la guarnielería y la elaboración artesanal del auténtico carriel de cuero, símbolo por excelencia de la región.' },
  { id: 'la-playa', name: 'La Playa de Belén', dept: 'Norte de Santander', region: 'Andina / Eje', coordinates: [-73.16, 8.23], voc: 'Paisaje Natural Estoraques y Fachadas Uniformes', desc: 'Conocido como un "pueblo de pesebre", enamora con la uniformidad de sus impecables fachadas blancas, puertas color terracota y su cercanía al Monumento Natural Los Estoraques, un majestuoso paisaje de formaciones rocosas únicas.' },
  { id: 'guaduas', name: 'Guaduas', dept: 'Cundinamarca', region: 'Andina / Eje', coordinates: [-74.59, 5.06], voc: 'Historia de la Pola y Dulces Coloniales (Bizcocho)', desc: 'Villa histórica del Camino Real y lugar de nacimiento de la heroína Policarpa Salavarrieta. Sus pintorescas calles coloniales invitan a saborear su famoso bizcocho y recorrer los pasos históricos de la Expedición Botánica.' },
  { id: 'mongui', name: 'Monguí', dept: 'Boyacá', region: 'Andina / Eje', coordinates: [-72.80, 5.72], voc: 'Industria del Balón y Páramo de Ocetá', desc: 'Custodiado por el majestuoso Páramo de Ocetá, Monguí deslumbra con su puente de Calicanto. Es el hogar de hábiles tejedores de ruanas y maestros en la ancestral y reconocida fabricación de balones de cuero cosidos a mano.' },
  { id: 'pore', name: 'Pore', dept: 'Casanare', region: 'Pacífico / Llanos', coordinates: [-71.99, 5.71], voc: 'Ruta Libertadora y Ruinas Históricas de Piedra', desc: 'Pueblo histórico de los llanos orientales, cuyas calles empedradas y cárceles en ruinas de piedra sirvieron de cuartel a la campaña libertadora. Hoy es un testimonio vivo de la tenacidad llanera y la ruta de la independencia.' },
  { id: 'salamina', name: 'Salamina', dept: 'Caldas', region: 'Andina / Eje', coordinates: [-75.40, 5.40], voc: 'Arquitectura de Madera Tallada (Ebanistería)', desc: 'La "Ciudad Luz" de Caldas es un tesoro del Paisaje Cultural Cafetero. Sorprende al visitante con su exquisita arquitectura de madera tallada, impresionantes balcones calados y majestuosos aleros que adornan sus empinadas calles.' },
  { id: 'giron', name: 'San Juan Girón', dept: 'Santander', region: 'Andina / Eje', coordinates: [-73.16, 7.06], voc: 'Arquitectura del Tabaco y Calles de Canto Rodado', desc: 'Monumento Nacional que transporta a sus visitantes a la época colonial con su encantadora arquitectura de casas blancas, faroles clásicos, calles de canto rodado y su profunda historia enmarcada en la ribera del río de Oro.' },
  { id: 'lorica', name: 'Santa Cruz de Lorica', dept: 'Córdoba', region: 'Caribe', coordinates: [-75.81, 9.23], voc: 'Arquitectura Republicana-Árabe y Cocina del Sinú', desc: 'Antiguo y floreciente puerto fluvial sobre el río Sinú. Su particular arquitectura republicana con influencias árabes, sumada a su monumental Mercado Público, la convierten en un crisol de culturas y exquisita gastronomía caribeña.' },
  { id: 'mompox', name: 'Santa Cruz de Mompox', dept: 'Bolívar', region: 'Caribe', coordinates: [-74.42, 9.24], voc: 'Filigrana de Plata y Mecedoras tradicionales', desc: 'Una verdadera joya colonial detenida en el tiempo a orillas del río Magdalena. Reconocida por su inigualable arquitectura sevillana, sus tradiciones religiosas intactas y el magistral y detallado arte de la filigrana en orfebrería.' },
  { id: 'santa-fe', name: 'Santa Fe de Antioquia', dept: 'Antioquia', region: 'Andina / Eje', coordinates: [-75.82, 6.55], voc: 'Orfebrería en Oro e Historia de la Colonización', desc: 'La antigua capital del departamento y "ciudad madre" es la cuna de la raza antioqueña. Es famosa por sus grandes portones de madera, su excelsa orfebrería y el monumental Puente de Occidente que se alza sobre el río Cauca.' },
  { id: 'villa-de-leyva', name: 'Villa de Leyva', dept: 'Boyacá', region: 'Andina / Eje', coordinates: [-73.52, 5.63], voc: 'Fósiles, Astronomía y Gran Plaza de Piedra', desc: 'Un inmenso tesoro colonial enclavado en un paisaje prehistórico. Ostenta una de las plazas empedradas más grandes de América, rodeada de impecable arquitectura blanca, enorme riqueza paleontológica y cielos perfectos para la astronomía.' }
];

export const MapaSocioPatrimonio: React.FC = () => {
  const [selectedTown, setSelectedTown] = useState<PuebloMapInfo | null>(pueblosMapInfo[0]);
  const [hoveredTown, setHoveredTown] = useState<PuebloMapInfo | null>(null);

  // Vocaciones asociadas a iconos para la ficha
  const getVocab = (id: string): string => {
    if (['aguadas', 'mompox', 'jerico'].includes(id)) return 'artesania';
    if (['salamina', 'jardin'].includes(id)) return 'cafetera';
    if (['honda'].includes(id)) return 'rio';
    if (['villa-de-leyva', 'barichara', 'giron', 'santa-fe', 'guaduas', 'mongui', 'la-playa'].includes(id)) return 'arquitectura';
    return 'naturaleza';
  };

  return (
    <div className="section-container" style={{ marginBottom: '50px' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '32px', fontFamily: "'Playfair Display', serif", color: 'var(--color-forest)', fontWeight: 900 }}>
          Mapa Geográfico Real
        </h2>
        <div className="section-header-desc" style={{ maxWidth: '700px', margin: '6px auto 0 auto', fontSize: '18px', color: 'var(--color-ink)' }}>
          Explora la ubicación exacta de los 18 municipios en el contexto cartográfico de Colombia. Haz clic en los pines para ver su información detallada.
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        alignItems: 'start',
        backgroundColor: 'var(--color-surface)',
        padding: '24px',
        borderRadius: '16px',
        border: '1.5px solid var(--color-border)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
        position: 'relative'
      }}>
        {/* Lado Izquierdo: Mapa SVG Real de Colombia usando react-simple-maps */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E8F4F8', // Color agua muy sutil de fondo
          borderRadius: '12px',
          padding: '0px',
          border: '1px solid var(--color-border)',
          overflow: 'hidden',
          position: 'relative',
          minHeight: '480px',
          height: '100%'
        }}>
          {/* Label de Regiones */}
          <div style={{ position: 'absolute', top: '15px', left: '15px', display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 5, backgroundColor: 'rgba(255,255,255,0.85)', padding: '10px', borderRadius: '8px', backdropFilter: 'blur(5px)' }}>
            <span style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-ink)' }}>
              Convenciones del Mapa
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#0EA5E9' }}></span> Caribe
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D97706' }}></span> Andina / Eje
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#9E2A2B' }}></span> Pacífico / Llanos
            </div>
          </div>

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 1800,
              center: [-74, 4.5] // Centro aproximado de Colombia
            }}
            width={400}
            height={500}
            style={{ width: "100%", height: "100%", maxHeight: "550px" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies
                  .map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#F1F5F9"
                      stroke="#CBD5E1"
                      strokeWidth={0.8}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#E2E8F0", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
              }
            </Geographies>

            {/* Dibujar los pines con coordenadas reales */}
            {pueblosMapInfo.map((p) => {
              const isSelected = selectedTown?.id === p.id;
              const isHovered = hoveredTown?.id === p.id;
              const active = isSelected || isHovered;
              
              let pinColor = '#D97706'; // Mustard/Orange for Andina
              if (p.region === 'Caribe') pinColor = '#0EA5E9'; // Blue
              if (p.region === 'Pacífico / Llanos') pinColor = '#9E2A2B'; // Red/Terracotta

              return (
                <Marker 
                  key={p.id} 
                  coordinates={p.coordinates}
                  onClick={() => setSelectedTown(p)}
                  onMouseEnter={() => setHoveredTown(p)}
                  onMouseLeave={() => setHoveredTown(null)}
                  style={{ }}
                >
                  <circle 
                    r={active ? 7 : 5} 
                    fill={pinColor} 
                    stroke="#FFF" 
                    strokeWidth={1.5}
                    style={{ transition: "all 0.3s ease" }}
                  />
                  {active && (
                    <circle r="14" fill={pinColor} opacity="0.3">
                      <animate attributeName="r" values="8;18;8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                  {active && (
                    <text
                      textAnchor="middle"
                      y={-14}
                      style={{ 
                        fontFamily: "'Outfit', sans-serif", 
                        fill: "#1E293B", 
                        fontSize: "12px", 
                        fontWeight: 800,
                        textShadow: "0px 0px 4px #FFFFFF, 0px 0px 4px #FFFFFF, 0px 0px 4px #FFFFFF" 
                      }}
                    >
                      {p.name}
                    </text>
                  )}
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        {/* Lado Derecho: Ficha del Pueblo (Sin cambios fuertes, solo estilos vibrantes) */}
        <div style={{
          padding: '28px',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          backgroundColor: '#FFFFFF',
          minHeight: '480px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.02)'
        }}>
          {selectedTown ? (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: '#F8FAFC',
                  border: '2px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <TownIcon vocab={getVocab(selectedTown.id)} color="var(--color-forest)" />
                </div>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.05em' }}>
                    {selectedTown.region} • {selectedTown.dept}
                  </span>
                  <h3 style={{ fontSize: '28px', fontFamily: "'Playfair Display', serif", color: 'var(--color-forest)', margin: 0, fontWeight: 900 }}>
                    {selectedTown.name}
                  </h3>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#D92525', display: 'block', marginBottom: '6px' }}>
                  Identidad y Vocación Cultural:
                </span>
                <div style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#0F172A',
                  lineHeight: '1.5',
                  backgroundColor: '#FFF1F2', // Soft red background
                  padding: '14px 18px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #D92525',
                }}>
                  {selectedTown.voc}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '6px' }}>
                  Descripción Patrimonial:
                </span>
                <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.7', margin: 0, fontWeight: 500 }}>
                  {selectedTown.desc}
                </p>
              </div>

              {/* Nota oficial */}
              <div style={{ 
                marginTop: '30px', 
                backgroundColor: '#F0FDF4', 
                border: '1px solid #BBF7D0', 
                borderRadius: '8px', 
                padding: '16px',
                fontSize: '13px',
                color: '#166534',
                lineHeight: '1.5'
              }}>
                <strong>📌 Proceso de Selección:</strong> Hasta 10 experiencias turísticas de <strong>{selectedTown.name}</strong> serán preseleccionadas en la fase inicial. Posteriormente, el equipo de COTELCO se comunicará.
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: '#94A3B8' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📍</div>
              <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#334155' }}>Explora la Red</h4>
              <p style={{ fontSize: '14px', marginTop: '8px', lineHeight: 1.6 }}>Haz clic sobre cualquier marcador en el mapa de Colombia para descubrir la magia de sus Pueblos Patrimonio.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
