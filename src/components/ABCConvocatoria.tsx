import React from 'react';
import {
  ArtisanWelcome,
  JeepWillysIcon,
  ColonialHouseIcon,
  WeavingLoomIcon,
  ArtisanHandsIcon
} from './SVGIllustrations';
import { InfoIcon } from './SVGIcons';

export const ABCConvocatoria: React.FC = () => {
  const fasesInfo = [
    {
      id: 'fase1',
      title: 'Fase 1: Habilitación Documental',
      subtitle: 'Filtro inicial "Cumple / No Cumple"',
      icon: <ColonialHouseIcon size={60} />,
      color: 'var(--color-ocean)',
      desc: 'El equipo técnico revisa que todos los documentos cargados en la postulación cumplan estrictamente los requisitos legales. Si existen errores menores, se notificará al correo oficial del postulante.',
      details: [
        'Se reciben todas las postulaciones a las que haya lugar (sin límite inicial).',
        'Plazo de subsanación único de tres (3) días hábiles.',
        'Las propuestas que cumplan los requisitos avanzarán a la etapa de priorización técnica.'
      ],
      isCurrent: false,
      date: 'Cerrada (12 de Julio de 2026)'
    },
    {
      id: 'fase2',
      title: 'Fase 2: Priorización Técnica (Preselección)',
      subtitle: 'Evaluación de propuesta sobre 100 puntos',
      icon: <WeavingLoomIcon size={60} />,
      color: 'var(--color-mustard)',
      desc: 'Las propuestas habilitadas por municipio se califican según la Matriz Técnica Oficial que evalúa pertinencia, impacto y salvaguarda cultural. Las cinco (5) propuestas con mejor puntaje quedarán preclasificadas.',
      details: [
        'Puntaje máximo de 100 puntos.',
        'Quedan preclasificadas las cinco (5) mejores experiencias por cada municipio.',
        'Es una etapa de filtro técnico, no la asignación final.'
      ],
      notice: 'Nos comunicaremos directamente con aquellas experiencias de turismo cultural que hayan sido preclasificadas, y se les irá informando oportunamente los plazos y tiempos exactos de los siguientes procesos.',
      isCurrent: true,
      date: 'En Proceso'
    },
    {
      id: 'fase3',
      title: 'Fase 3: Validación en Territorio',
      subtitle: 'Visitas de campo operadas por Cotelco Valle',
      icon: <JeepWillysIcon size={60} />,
      color: 'var(--color-terracotta)',
      desc: 'El equipo de COTELCO se comunicará de forma directa con las cinco (5) propuestas preclasificadas por municipio para programar las visitas técnicas en campo.',
      details: [
        'Verificación física de la existencia de la experiencia.',
        'Identificación y diagnóstico de los activos productivos.',
        'Asistencia obligatoria del postulante a la jornada de co-creación.'
      ],
      date: 'Sujeto a coordinación'
    },
    {
      id: 'fase4',
      title: 'Resultado Final: Dotación y Portafolio',
      subtitle: 'Asignación oficial de activos productivos',
      icon: <ArtisanHandsIcon size={60} />,
      color: 'var(--color-forest)',
      desc: 'El Comité Técnico formaliza la lista de hasta tres (3) experiencias turísticas seleccionadas por cada uno de los 18 municipios (máximo 54 a nivel nacional).',
      details: [
        'Entrega física de activos para fortalecer la experiencia.',
        'Inclusión en el Portafolio Digital de la Red.',
        'Invitación a rueda comercial nacional.'
      ],
      notice: 'La presentación de la postulación no genera obligación de asignación de recursos. La dotación está sujeta al proceso de evaluación, validación y selección final definido en la convocatoria.',
      date: 'Cierre del proyecto'
    }
  ];

  return (
    <div className="section-container" style={{ maxWidth: '1000px', margin: '0 auto 60px auto', padding: '0 20px' }}>
      
      {/* Cabecera Intro */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))', 
        alignItems: 'center', 
        gap: '30px', 
        marginBottom: '40px', 
        backgroundColor: 'var(--color-surface)', 
        padding: '30px', 
        borderRadius: '20px', 
        boxShadow: 'var(--shadow-md)', 
        border: '1.5px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--color-terracotta), var(--color-mustard), var(--color-ocean), var(--color-forest))' }}></div>
        <div style={{ textAlign: 'left' }}>
          <span className="hero-badge" style={{ marginBottom: '12px', backgroundColor: 'var(--color-forest-light)', color: 'var(--color-forest)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <InfoIcon size={14} /> Guía Paso a Paso
          </span>
          <h2 style={{ fontSize: '36px', fontFamily: "'Playfair Display', serif", color: 'var(--color-forest)', fontWeight: 900, marginBottom: '12px', lineHeight: '1.1' }}>
            Ruta de la Convocatoria
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-ink-light)', lineHeight: '1.6', margin: 0 }}>
            Conoce de principio a fin las etapas por las que pasará tu propuesta. Sigue este sendero para entender los requisitos, evaluaciones y la esperada dotación final.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <a href={`${import.meta.env.BASE_URL}infografias/FASES-730-COTELCO.pdf`} download="FASES-730-COTELCO.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--color-ocean)', color: '#FFFFFF', padding: '10px 20px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 6px rgba(14, 165, 233, 0.2)' }}>
              ↓ Descargar Fases
            </a>
            <a href={`${import.meta.env.BASE_URL}infografias/ABC-730-COTELCO.pdf`} download="ABC-730-COTELCO.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--color-terracotta)', color: '#FFFFFF', padding: '10px 20px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 6px rgba(234, 88, 12, 0.2)' }}>
              ↓ Descargar ABC
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <ArtisanWelcome expression="happy" size={135} />
          <div style={{ marginTop: '8px', fontStyle: 'italic', fontSize: '12px', color: 'var(--color-ink-light)', fontWeight: 600 }}>¡Bienvenidos al Sendero!</div>
        </div>
      </div>

      {/* CRONOGRAMA VISUAL HORIZONTAL (ESTADO ACTUAL) */}
      <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', padding: '40px 30px', marginBottom: '60px', boxShadow: 'var(--shadow-sm)', position: 'relative' }}>
        <h3 style={{ fontSize: '24px', fontFamily: "'Playfair Display', serif", color: 'var(--color-ink)', textAlign: 'center', marginBottom: '10px', fontWeight: 900 }}>
          Cronograma de Fechas
        </h3>
        <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--color-ink-light)', marginBottom: '40px' }}>
          Conoce el estado de avance. Las etapas marcadas a color representan el progreso actual.
        </p>

        {/* Contenedor con scroll en móviles si es necesario */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '10px', maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Línea conectora gris de fondo */}
          <div style={{ position: 'absolute', top: '22px', left: '10%', right: '10%', height: '4px', backgroundColor: '#E2E8F0', zIndex: 1, borderRadius: '4px' }}></div>
          
          {/* Línea conectora de progreso (ilumina hasta la fase actual) */}
          <div style={{ position: 'absolute', top: '22px', left: '10%', width: '33%', height: '4px', background: 'linear-gradient(90deg, var(--color-ocean), var(--color-mustard))', zIndex: 2, borderRadius: '4px' }}></div>

          {/* Hito 1: Apertura (Fase Cerrada) */}
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-ocean)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px', border: '4px solid #FFFFFF', boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)', marginBottom: '12px' }}>1</div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 800, color: 'var(--color-ink)' }}>Postulaciones</span>
            <span style={{ fontSize: '12px', color: 'var(--color-ocean)', fontWeight: 700, marginTop: '4px' }}>Cerrada</span>
          </div>

          {/* Hito 2: Evaluación (Activa) */}
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-mustard)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px', border: '4px solid #FFFFFF', boxShadow: '0 0 15px rgba(217, 119, 6, 0.4)', marginBottom: '12px' }}>2</div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 800, color: 'var(--color-ink)' }}>Evaluación</span>
            <span style={{ fontSize: '12px', color: 'var(--color-mustard)', fontWeight: 700, marginTop: '4px' }}>En Proceso</span>
          </div>

          {/* Hito 3: Visitas (Inactiva/Gris) */}
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#CBD5E1', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px', border: '4px solid #FFFFFF', marginBottom: '12px' }}>3</div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, color: 'var(--color-ink-light)' }}>Visitas Campo</span>
            <span style={{ fontSize: '12px', color: 'var(--color-ink-light)', marginTop: '4px' }}>Por definir</span>
          </div>

          {/* Hito 4: Resultados (Inactiva/Gris) */}
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#CBD5E1', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px', border: '4px solid #FFFFFF', marginBottom: '12px' }}>4</div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, color: 'var(--color-ink-light)' }}>Dotación Final</span>
            <span style={{ fontSize: '12px', color: 'var(--color-ink-light)', marginTop: '4px' }}>Por definir</span>
          </div>

        </div>
      </div>

      {/* RUTA TIMELINE VERTICAL */}
      <div style={{ position: 'relative', padding: '40px 0', marginBottom: '60px' }}>
        
        {/* La línea central serpenteante (timeline backbone) */}
        <div style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '50px', // Alineada a la izquierda en lugar de al centro para dar más espacio al texto
          width: '4px',
          backgroundColor: '#E2E8F0',
          zIndex: 1
        }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {fasesInfo.map((fase, index) => (
            <div key={fase.id} style={{ display: 'flex', gap: '30px', position: 'relative', zIndex: 2 }}>
              
              {/* Icono Nodo en la Línea */}
              <div style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                backgroundColor: fase.color, 
                border: '4px solid #FFFFFF',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative'
              }}>
                <div style={{ filter: 'brightness(0) invert(1)' }}>
                  {fase.icon}
                </div>
                {/* Etiqueta de Paso */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  backgroundColor: '#FFFFFF',
                  color: fase.color,
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  border: `2px solid ${fase.color}`,
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  {index + 1}
                </div>
              </div>

              {/* Caja de Información de la Fase */}
              <div style={{ 
                flexGrow: 1, 
                backgroundColor: '#FFFFFF', 
                borderRadius: '16px', 
                border: `1.5px solid ${fase.color}`, 
                padding: '25px', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                position: 'relative'
              }}>
                {/* Triangulito conectando el globo de texto al icono */}
                <div style={{
                  position: 'absolute',
                  left: '-8px',
                  top: '40px',
                  width: '14px',
                  height: '14px',
                  backgroundColor: '#FFFFFF',
                  borderBottom: `1.5px solid ${fase.color}`,
                  borderLeft: `1.5px solid ${fase.color}`,
                  transform: 'rotate(45deg)'
                }}></div>

                <h3 style={{ fontSize: '24px', fontFamily: "'Playfair Display', serif", color: fase.color, margin: '0 0 4px 0', fontWeight: 900, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  {fase.title}
                  {(fase as any).isCurrent && (
                    <span style={{ backgroundColor: '#FEF08A', color: '#854D0E', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 900, letterSpacing: '0.05em', fontFamily: "'Outfit', sans-serif" }}>
                      📍 ETAPA ACTUAL
                    </span>
                  )}
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontFamily: "'Outfit', sans-serif", fontWeight: 'bold', color: 'var(--color-ink-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {fase.subtitle}
                  </span>
                  {(fase as any).date && (
                    <>
                      <span style={{ color: 'var(--color-border)', fontSize: '12px' }}>|</span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: fase.color, backgroundColor: `${fase.color}15`, padding: '4px 10px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        📅 {(fase as any).date}
                      </span>
                    </>
                  )}
                </div>
                
                <p style={{ fontSize: '15px', color: 'var(--color-ink)', lineHeight: '1.6', marginBottom: '20px' }}>
                  {fase.desc}
                </p>

                <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '8px', borderLeft: `4px solid ${fase.color}` }}>
                  <h4 style={{ fontSize: '13px', color: fase.color, margin: '0 0 8px 0', fontWeight: 800, textTransform: 'uppercase' }}>
                    Puntos Clave
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13.5px', color: 'var(--color-ink)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {fase.details.map((detail, idx) => (
                      <li key={idx} style={{ lineHeight: '1.4' }}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {(fase as any).notice && (
                  <div style={{ marginTop: '15px', backgroundColor: '#FFFBEB', padding: '14px', borderRadius: '8px', border: '1px solid #FEF08A', fontSize: '13px', color: '#854D0E', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '18px' }}>📢</span>
                    <p style={{ margin: 0, lineHeight: '1.5' }}>
                      <strong>Atención Postulantes:</strong> {(fase as any).notice}
                    </p>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>


      {/* BLOQUE DE QUIÉNES PARTICIPAN Y CAUSALES DE RECHAZO (Integrados) */}
      <h3 style={{ fontSize: '28px', fontFamily: "'Playfair Display', serif", color: 'var(--color-forest)', textAlign: 'center', marginBottom: '30px', fontWeight: 900 }}>
        Reglas de Juego: Requisitos y Advertencias
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
        
        {/* SÍ PARTICIPAN */}
        <div style={{ backgroundColor: '#F0FDF4', borderRadius: '16px', border: '1.5px solid #BBF7D0', padding: '30px', boxShadow: 'var(--shadow-sm)' }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#166534', fontWeight: 900, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>✓</span> Perfiles Habilitados
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22C55E', marginTop: '6px', flexShrink: 0 }}></div>
              <p style={{ margin: 0, fontSize: '14px', color: '#166534', lineHeight: '1.5' }}><strong>Con RNT Activo:</strong> Prestadores que cuenten con el Registro Nacional de Turismo vigente.</p>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22C55E', marginTop: '6px', flexShrink: 0 }}></div>
              <p style={{ margin: 0, fontSize: '14px', color: '#166534', lineHeight: '1.5' }}><strong>Sin RNT pero Formales:</strong> Actores complementarios formales (artesanos, cocineras tradicionales).</p>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22C55E', marginTop: '6px', flexShrink: 0 }}></div>
              <p style={{ margin: 0, fontSize: '14px', color: '#166534', lineHeight: '1.5' }}><strong>Comunitarias:</strong> Organizaciones, resguardos indígenas o JAC con unidades de turismo.</p>
            </li>
          </ul>
        </div>

        {/* NO PARTICIPAN (Rechazo) */}
        <div style={{ backgroundColor: '#FFF1F2', borderRadius: '16px', border: '1.5px solid #FECDD3', padding: '30px', boxShadow: 'var(--shadow-sm)' }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#BE185D', fontWeight: 900, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>✕</span> Causales de Exclusión
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F43F5E', marginTop: '6px', flexShrink: 0 }}></div>
              <p style={{ margin: 0, fontSize: '14px', color: '#BE185D', lineHeight: '1.5' }}><strong>No residencia:</strong> No tener domicilio comercial en los 18 municipios.</p>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F43F5E', marginTop: '6px', flexShrink: 0 }}></div>
              <p style={{ margin: 0, fontSize: '14px', color: '#BE185D', lineHeight: '1.5' }}><strong>Menos de 2 años:</strong> No acreditar mínimo dos años de operación comercial demostrable.</p>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F43F5E', marginTop: '6px', flexShrink: 0 }}></div>
              <p style={{ margin: 0, fontSize: '14px', color: '#BE185D', lineHeight: '1.5' }}><strong>Conflicto de Interés:</strong> Ser servidor público activo o pariente de los diseñadores/evaluadores de la convocatoria.</p>
            </li>
          </ul>
        </div>

      </div>

      {/* BLOQUE DE DOCUMENTACIÓN REQUERIDA (NUEVO) */}
      <h3 style={{ fontSize: '28px', fontFamily: "'Playfair Display', serif", color: 'var(--color-forest)', textAlign: 'center', marginBottom: '15px', fontWeight: 900 }}>
        Documentación Mínima Requerida
      </h3>
      <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--color-ink)', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
        Asegúrate de preparar los documentos según el tipo de entidad al que perteneces. <br/>
        <strong>Transversal para todos:</strong> Formulario de postulación (On-line), Carta de compromiso firmada y Anexos soporte opcionales (videos/portafolios, máx 10MB por archivo).
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px', marginBottom: '60px' }}>
        
        {/* Tipo 1 */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1.5px solid var(--color-ocean)', padding: '25px', boxShadow: 'var(--shadow-sm)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--color-ocean)' }}></div>
          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', color: 'var(--color-ocean)', fontWeight: 800, marginBottom: '15px', lineHeight: '1.3' }}>
            Tipo 1. Prestadores de servicios turísticos (RNT)
          </h4>
          <p style={{ fontSize: '13.5px', color: 'var(--color-ink)', lineHeight: '1.5', margin: 0 }}>
            Establecimientos o empresas formalmente registradas en el Registro Nacional de Turismo, como alojamientos, agencias de viajes, operadores turísticos, transporte turístico, parques temáticos, entre otros.
          </p>
        </div>

        {/* Tipo 2 */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1.5px solid var(--color-forest)', padding: '25px', boxShadow: 'var(--shadow-sm)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--color-forest)' }}></div>
          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', color: 'var(--color-forest)', fontWeight: 800, marginBottom: '15px', lineHeight: '1.3' }}>
            Tipo 2. Guías de turismo
          </h4>
          <p style={{ fontSize: '13.5px', color: 'var(--color-ink)', lineHeight: '1.5', margin: 0 }}>
            Personas naturales que prestan servicios de guía turística y cuentan con Registro Nacional de Turismo (RNT).
          </p>
        </div>

        {/* Tipo 3 */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1.5px solid var(--color-mustard)', padding: '25px', boxShadow: 'var(--shadow-sm)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--color-mustard)' }}></div>
          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', color: 'var(--color-mustard)', fontWeight: 800, marginBottom: '15px', lineHeight: '1.3' }}>
            Tipo 3. Prestadores formales complementarios
          </h4>
          <p style={{ fontSize: '13.5px', color: 'var(--color-ink)', lineHeight: '1.5', margin: 0 }}>
            Actividades relacionadas con gastronomía, artesanías, productos con identidad regional, servicios agroturísticos y experiencias culturales vinculadas al turismo.
          </p>
        </div>

        {/* Tipo 4 */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1.5px solid var(--color-terracotta)', padding: '25px', boxShadow: 'var(--shadow-sm)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--color-terracotta)' }}></div>
          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '17px', color: 'var(--color-terracotta)', fontWeight: 800, marginBottom: '15px', lineHeight: '1.3' }}>
            Tipo 4. Unidades productivas de organizaciones étnicas, sociales, culturales y/o comunitarias
          </h4>
          <p style={{ fontSize: '13.5px', color: 'var(--color-ink)', lineHeight: '1.5', margin: 0 }}>
            Asociaciones, colectivos u organizaciones comunitarias con enfoque territorial, cultural, étnico o social.
          </p>
        </div>

      </div>

      {/* BLOQUE MATRIZ Y PRESUPUESTO */}
      <h3 style={{ fontSize: '28px', fontFamily: "'Playfair Display', serif", color: 'var(--color-forest)', textAlign: 'center', marginBottom: '30px', fontWeight: 900 }}>
        Financiación y Calificación
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '40px' }}>
        
        {/* Telar de Puntajes Visual */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--color-border)', padding: '30px', boxShadow: 'var(--shadow-md)' }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: 'var(--color-ink)', fontWeight: 900, marginBottom: '20px' }}>
            Matriz Técnica Oficial (100 Pts)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 800, color: 'var(--color-ink)' }}>1. Pertinencia en turismo cultural</span>
                <span style={{ fontWeight: 900, color: 'var(--color-terracotta)' }}>35 Puntos</span>
              </div>
              <div style={{ height: '18px', backgroundColor: '#F1F5F9', borderRadius: '50px', overflow: 'hidden' }}>
                <div style={{ width: '35%', height: '100%', background: 'var(--color-terracotta)' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 800, color: 'var(--color-ink)' }}>2. Propuesta de valor</span>
                <span style={{ fontWeight: 900, color: 'var(--color-mustard)' }}>25 Puntos</span>
              </div>
              <div style={{ height: '18px', backgroundColor: '#F1F5F9', borderRadius: '50px', overflow: 'hidden' }}>
                <div style={{ width: '25%', height: '100%', background: 'var(--color-mustard)' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 800, color: 'var(--color-ink)' }}>3. Impacto comunitario</span>
                <span style={{ fontWeight: 900, color: 'var(--color-ocean)' }}>20 Puntos</span>
              </div>
              <div style={{ height: '18px', backgroundColor: '#F1F5F9', borderRadius: '50px', overflow: 'hidden' }}>
                <div style={{ width: '20%', height: '100%', background: 'var(--color-ocean)' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 800, color: 'var(--color-ink)' }}>4. Salvaguarda de patrimonio</span>
                <span style={{ fontWeight: 900, color: 'var(--color-forest)' }}>20 Puntos</span>
              </div>
              <div style={{ height: '18px', backgroundColor: '#F1F5F9', borderRadius: '50px', overflow: 'hidden' }}>
                <div style={{ width: '20%', height: '100%', background: 'var(--color-forest)' }}></div>
              </div>
            </div>

          </div>
        </div>

        {/* Rubros de Presupuesto */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--color-border)', padding: '30px', boxShadow: 'var(--shadow-md)' }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: 'var(--color-ink)', fontWeight: 900, marginBottom: '20px' }}>
            Activos Financiables
          </h4>
          
          <div style={{ marginBottom: '25px' }}>
            <h5 style={{ fontSize: '15px', color: 'var(--color-forest)', fontWeight: 800, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>✅</span> Sí se Financia
            </h5>
            <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13.5px', color: 'var(--color-ink-light)', lineHeight: '1.5' }}>
              <li style={{ marginBottom: '6px' }}><strong>Maquinaria e insumos</strong> productivos indispensables para la experiencia.</li>
              <li style={{ marginBottom: '6px' }}><strong>Equipos Verdes:</strong> Elementos de transición energética y sostenibilidad.</li>
              <li style={{ marginBottom: '6px' }}><strong>Equipos de Seguridad:</strong> Botiquines, extintores, señalización especializada.</li>
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: '15px', color: 'var(--color-rose)', fontWeight: 800, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>❌</span> No se Financia
            </h5>
            <p style={{ fontSize: '13.5px', color: 'var(--color-ink-light)', lineHeight: '1.5', marginBottom: '12px' }}>
              Para la categoría asociada a dotaciones para la operación de actividades, experiencias, productos y servicios turísticos, se financiarán elementos cuya necesidad se encuentre asociada directamente con el turismo y en ningún caso:
            </p>
            <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13.5px', color: 'var(--color-ink-light)', lineHeight: '1.5' }}>
              <li style={{ marginBottom: '6px' }}><strong>Obras Civiles e Infraestructura:</strong> Terrenos, predios, adecuaciones locativas mayores, construcciones, baños o senderos pavimentados.</li>
              <li style={{ marginBottom: '6px' }}><strong>Tecnología y Software:</strong> Equipos de cómputo de escritorio o portátiles de gama media/alta, licencias de software, aplicaciones pagas o suscripciones digitales.</li>
              <li style={{ marginBottom: '6px' }}><strong>Transporte:</strong> Vehículos automotores, motocicletas, bicicletas eléctricas o cualquier medio de transporte.</li>
              <li style={{ marginBottom: '6px' }}><strong>Gastos Operativos:</strong> Servicios públicos (energía, agua, internet, telefonía), impuestos, tasas, contribuciones parafiscales, ni nómina.</li>
            </ul>
          </div>

          {/* Nota Aclaratoria */}
          <div style={{ marginTop: '24px', padding: '14px 18px', backgroundColor: 'rgba(217, 119, 6, 0.08)', borderRadius: '12px', borderLeft: '4px solid var(--color-mustard)' }}>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-ink-light)', lineHeight: '1.5' }}>
              <strong style={{ color: '#B45309' }}>Nota importante:</strong> Los activos detallados anteriormente son de carácter ilustrativo e indicativo. La aprobación final de cualquier dotación, rubro o equipo estará sujeta a los cambios, disposiciones oficiales y políticas de FONTUR respecto a los rubros financiables y no financiables de la convocatoria.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
