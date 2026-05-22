import React, { useState, useMemo } from 'react';
import pueblosData from '../data/pueblos.json';
import { TownIcon } from './SVGIllustrations';
import { CloudIcon, MountainIcon } from './SVGIcons';

interface Pueblo {
  id: string;
  name: string;
  department: string;
  region: string;
  climate?: string;
  altitude: string;
  highlights?: string[];
  heritageHighlights?: string[]; // del JSON real
  temperature?: string; // del JSON real
  description?: string;
  keyVisuals?: string; // del JSON real
  vocab?: string; // Vocación del pueblo para asignar el icono
  colorAccent?: string; // Color personalizado de fondo de la estampilla
}

export const ExploradorPueblos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Todas');
  const [selectedPueblo, setSelectedPueblo] = useState<Pueblo | null>(null);

  // Mapear vocaciones e identidades de colores para hacerlo muy vivo
  const pueblosEnriquecidos: Pueblo[] = useMemo(() => {
    return (pueblosData as any[]).map((p) => {
      // Asignar vocación e icono según el nombre o región
      let vocab = 'colonial';
      let colorAccent = '#FEF3C7'; // Por defecto arena

      if (['aguadas', 'mompox', 'jericó'].includes(p.id)) {
        vocab = 'artesania';
        colorAccent = '#FAE8FF'; // Fucsia/Morado claro
      } else if (['salento', 'salamina', 'jardin', 'jerico', 'jardín', 'jericó'].includes(p.id)) {
        vocab = 'cafetera';
        colorAccent = '#DCFCE7'; // Verde claro
      } else if (['honda', 'mompox'].includes(p.id)) {
        vocab = 'rio';
        colorAccent = '#E0F2FE'; // Azul claro
      } else if (['villa-de-leyva', 'barichara', 'giron', 'santa-fe', 'guaduas', 'mongui', 'la-playa', 'villa de leyva', 'monguí', 'playa de belén'].includes(p.id)) {
        vocab = 'arquitectura';
        colorAccent = '#FFEDD5'; // Naranja/Terracota claro
      } else if (['socorro', 'cienaga', 'buga', 'lorica', 'ciénaga', 'guadalajara de buga'].includes(p.id)) {
        vocab = 'naturaleza';
        colorAccent = '#FEE2E2'; // Rojo claro
      }

      return {
        ...p,
        vocab,
        colorAccent
      };
    });
  }, []);

  // Regiones únicas
  const regiones = useMemo(() => {
    const set = new Set<string>();
    pueblosEnriquecidos.forEach((p) => set.add(p.region));
    return ['Todas', ...Array.from(set)];
  }, [pueblosEnriquecidos]);

  // Filtrado de pueblos
  const filteredPueblos = useMemo(() => {
    return pueblosEnriquecidos.filter((p) => {
      const highlightsList = p.heritageHighlights || [];
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        highlightsList.some((h) => h.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchRegion = selectedRegion === 'Todas' || p.region === selectedRegion;
      return matchSearch && matchRegion;
    });
  }, [pueblosEnriquecidos, searchTerm, selectedRegion]);

  return (
    <div className="section-container">
      {/* Cabecera */}
      <div className="section-header">
        <div>
          <h2>Explorador de Pueblos Patrimonio</h2>
          <div className="section-header-desc">
            Busca y explora los 18 municipios colombianos que conforman la Red Oficial de Pueblos Patrimonio de Colombia.
          </div>
        </div>
      </div>

      {/* Barra de Filtros y Búsqueda */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Buscar por nombre, departamento o atractivos..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flexGrow: 1,
              fontFamily: "'Outfit', sans-serif",
              fontSize: '16px',
              padding: '14px 20px',
              border: '1px solid var(--color-border)',
              borderRadius: '10px',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-sm)',
              outline: 'none'
            }}
          />
        </div>

        {/* Filtros de Región */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {regiones.map((reg) => (
            <button
              key={reg}
              className={`tab-btn ${selectedRegion === reg ? 'active' : ''}`}
              onClick={() => setSelectedRegion(reg)}
              style={{ padding: '8px 18px', fontSize: '13px' }}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Estampillas de Pueblos */}
      <div className="pueblos-grid">
        {filteredPueblos.map((pueblo) => (
          <div
            key={pueblo.id}
            className="stamp-card"
            style={{ '--stamp-bg': pueblo.colorAccent } as React.CSSProperties}
            onClick={() => setSelectedPueblo(pueblo)}
          >
            <div className="stamp-inner">
              <div>
                <div className="stamp-header">
                  <span className="stamp-meta">{pueblo.region}</span>
                  <TownIcon vocab={pueblo.vocab} color="#FFFFFF" />
                </div>
                
                <h3 className="stamp-town-name">{pueblo.name}</h3>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-ink-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {pueblo.department}
                </div>
              </div>

              <div className="stamp-details">
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CloudIcon size={14} /> {pueblo.temperature || '18°C'}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MountainIcon size={14} /> {pueblo.altitude}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Si no hay resultados */}
      {filteredPueblos.length === 0 && (
        <div style={{ textAlign: 'center', padding: '50px 20px', border: '1px dashed var(--color-border)', borderRadius: '16px', marginTop: '20px', backgroundColor: '#FFFFFF' }}>
          <h3 style={{ fontSize: '20px', color: 'var(--color-ink-light)' }}>No se encontraron Pueblos Patrimonio</h3>
          <p style={{ fontSize: '14px', marginTop: '8px', color: 'var(--color-ink-light)' }}>Intenta cambiando los filtros o el término de búsqueda.</p>
        </div>
      )}

      {/* Modal de Detalle */}
      {selectedPueblo && (
        <div className="modal-overlay" onClick={() => setSelectedPueblo(null)}>
          <div className="modal-content-neobrutal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedPueblo(null)}>✕</button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <TownIcon vocab={selectedPueblo.vocab} color={selectedPueblo.colorAccent} />
              <div>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-ink-light)', letterSpacing: '0.05em' }}>
                  {selectedPueblo.region} • {selectedPueblo.department}
                </span>
                <h2 style={{ fontSize: '32px', lineHeight: 1.1, margin: 0, color: 'var(--color-forest)' }}>{selectedPueblo.name}</h2>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'var(--color-ink)', lineHeight: '1.6', marginBottom: '24px' }}>
              {selectedPueblo.keyVisuals}
            </p>

            <h4 style={{ fontSize: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px', marginBottom: '14px', color: 'var(--color-forest)', fontWeight: 700 }}>
              📍 Atractivos y Riqueza Patrimonial
            </h4>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--color-ink-light)' }}>
              {(selectedPueblo.heritageHighlights || []).map((h, index) => (
                <li key={index}>
                  <strong>{h}</strong>
                </li>
              ))}
            </ul>

            <div
              style={{
                display: 'flex',
                gap: '24px',
                marginTop: '30px',
                paddingTop: '20px',
                borderTop: '1px dashed var(--color-border)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-ink-light)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CloudIcon size={16} /> Temperatura Promedio: {selectedPueblo.temperature || '18°C'}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MountainIcon size={16} /> Altitud: {selectedPueblo.altitude}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
