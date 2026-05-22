import React, { useState } from 'react';
import { ABCConvocatoria } from './components/ABCConvocatoria';
import { MapaSocioPatrimonio } from './components/MapaSocioPatrimonio';
import { GlosarioTDR } from './components/GlosarioTDR';
import { TownIcon } from './components/SVGIllustrations';
import { HeroParallax } from './components/HeroParallax';
import {
  InfoIcon,
  MapPinIcon,
  FileIcon,
  DownloadIcon,
  ExternalLinkIcon
} from './components/SVGIcons';

/* Mini escudo decorativo para la marca del navbar */
const EscudoMini: React.FC = () => (
  <svg viewBox="0 0 32 38" width="28" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1C6 4 2 6 2 10C2 22 16 36 16 36C16 36 30 22 30 10C30 6 26 4 16 1Z"
          fill="var(--color-forest)" stroke="var(--color-mustard)" strokeWidth="1.5"/>
    <path d="M16 6C10 8 7 9.5 7 12C7 18 16 28 16 28C16 28 25 18 25 12C25 9.5 22 8 16 6Z"
          fill="var(--color-mustard)" opacity="0.9"/>
    <circle cx="16" cy="14" r="3.5" fill="var(--color-forest)"/>
  </svg>
);

/* Escudo grande para el header institucional */
const EscudoColombia: React.FC = () => (
  <svg viewBox="0 0 100 100" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="var(--color-mustard)" strokeWidth="1.2" strokeDasharray="3 3" />
    <path d="M15,25 C15,15 50,12 50,12 C50,12 85,15 85,25 C85,62 50,88 50,88 C50,88 15,62 15,25 Z"
          fill="#003189" stroke="var(--color-mustard)" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M17,25 C17,20.5 50,17.5 50,17.5 C50,17.5 83,20.5 83,25 C83,38 72,50 50,60 C28,50 17,38 17,25 Z" fill="#FFC72C" />
    <path d="M20,38 C20,35 50,33 50,33 C50,33 80,35 80,38 C80,48 70,58 50,68 C30,58 20,48 20,38 Z" fill="#003189" />
    <path d="M24,50 C24,48 50,46 50,46 C50,46 76,48 76,50 C76,58 66,68 50,78 C34,68 24,58 24,50 Z" fill="#DA291C" />
    <path d="M50,4 C45,4 42,7 42,10 C44,10 46,8 50,8 C54,8 56,10 58,10 C58,7 55,4 50,4 Z" fill="#E2E8F0" stroke="#2B2B2B" strokeWidth="1" />
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState<'presentacion' | 'abc' | 'glosario' | 'inscripcion'>('presentacion');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ═══ NAVBAR UNIFICADO ═══ */}
      <nav className="sticky-menu-bar">
        <div className="menu-container">
          <div className="nav-brand" onClick={() => navigateTo('presentacion')} style={{ cursor: 'pointer' }}>
            <span className="nav-brand-text" style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--color-ink-light)' }}>
              CONVOCATORIA PÚBLICA • CONTRATO FNTCE-730-2025
            </span>
          </div>

          {/* Hamburger para móvil */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú de navegación"
          >
            <span /><span /><span />
          </button>

          {/* Links de navegación a la derecha */}
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <button className={`tab-btn ${activeTab === 'presentacion' ? 'active' : ''}`} onClick={() => navigateTo('presentacion')}>
              Presentación
            </button>
            <button className={`tab-btn ${activeTab === 'abc' ? 'active' : ''}`} onClick={() => navigateTo('abc')}>
              ABC de la Convocatoria
            </button>
            <button className={`tab-btn ${activeTab === 'glosario' ? 'active' : ''}`} onClick={() => navigateTo('glosario')}>
              Glosario
            </button>
            <button className={`tab-btn CTA ${activeTab === 'inscripcion' ? 'active' : ''}`} onClick={() => navigateTo('inscripcion')} style={{ backgroundColor: 'var(--color-forest)', color: 'white', borderRadius: '8px' }}>
              Inscripción
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ CONTENIDO PRINCIPAL ═══ */}
      <main style={{ flexGrow: 1, minHeight: '60vh' }}>
        {activeTab === 'presentacion' && (
          <>
            <HeroParallax />
            {/* Hero Portal Original */}
            <section className="hero-portal">
              <div className="hero-text-container">
                <span className="hero-badge">CONVOCATORIA PÚBLICA • CONTRATO FNTCE-730-2025</span>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: 'var(--color-forest)', fontSize: '40px', lineHeight: '1.15' }}>
                  Fortalece tu experiencia turística cultural
                </h1>
                <p style={{ fontSize: '15.5px', color: 'var(--color-ink-light)', lineHeight: '1.65' }}>
                  Cofinanciación de hasta <strong style={{ color: 'var(--color-mustard)' }}>$5.000.000 COP</strong> en activos productivos, acompañamiento técnico y fortalecimiento de capacidades para experiencias turísticas de los 18 municipios de la Red de Pueblos Patrimonio.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'var(--color-forest-light)', color: 'var(--color-forest)', padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: 700, border: '1px solid rgba(45, 74, 62, 0.15)' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-mustard)', display: 'inline-block' }}></span>
                    Etapa de Preinscripción Abierta
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '14px', marginTop: '12px' }}>
                  <button className="action-btn" onClick={() => navigateTo('abc')} style={{ padding: '12px 22px', fontSize: '14px' }}>
                    Ver el ABC
                  </button>
                  <button className="action-btn secondary" onClick={() => navigateTo('inscripcion')} style={{ padding: '12px 22px', fontSize: '14px' }}>
                    Postular Experiencia
                  </button>
                </div>
              </div>

              {/* Collage Polaroids */}
              <div className="polaroid-gallery">
                <div className="polaroid-card" style={{ transform: 'rotate(-7deg) translate(-50px, -20px)', zIndex: 3 }}>
                  <div className="polaroid-image-placeholder"><TownIcon vocab="arquitectura" color="#FFEDD5" /></div>
                  <div className="polaroid-caption">Barichara, SAN</div>
                </div>
                <div className="polaroid-card" style={{ transform: 'rotate(5deg) translate(40px, -40px)', zIndex: 4 }}>
                  <div className="polaroid-image-placeholder"><TownIcon vocab="artesania" color="#FAE8FF" /></div>
                  <div className="polaroid-caption">Mompox, BOL</div>
                </div>
                <div className="polaroid-card" style={{ transform: 'rotate(-3deg) translate(-10px, 60px)', zIndex: 5 }}>
                  <div className="polaroid-image-placeholder"><TownIcon vocab="cafetera" color="#DCFCE7" /></div>
                  <div className="polaroid-caption">Aguadas, CAL</div>
                </div>
              </div>
            </section>

            {/* Estadísticas */}
            <section className="hero-stats-grid">
              <div className="hero-stat-card"><span className="hero-stat-val">18</span><span className="hero-stat-lbl">Municipios de la Red</span></div>
              <div className="hero-stat-card"><span className="hero-stat-val">54</span><span className="hero-stat-lbl">Experiencias Beneficiadas</span></div>
              <div className="hero-stat-card"><span className="hero-stat-val">Hasta $5M</span><span className="hero-stat-lbl">Apoyo por Experiencia</span></div>
              <div className="hero-stat-card"><span className="hero-stat-val">$270M</span><span className="hero-stat-lbl">Fondo Total</span></div>
            </section>

            {/* ═══ JUSTIFICACIÓN DEL PROYECTO — Sacada de los TDR ═══ */}
            <div className="section-container" style={{ marginBottom: '10px' }}>
              <div className="section-header" style={{ textAlign: 'center' }}>
                <h2 style={{ justifyContent: 'center' }}>¿Por qué esta convocatoria?</h2>
              </div>
              <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '15px', color: 'var(--color-ink)', lineHeight: '1.75', textAlign: 'justify' }}>
                  La Red Turística de Pueblos Patrimonio de Colombia, conformada por 18 municipios que han sido reconocidos por su valor histórico, arquitectónico y cultural, representa uno de los activos turísticos más importantes del país. Sin embargo, muchas de las experiencias turísticas que se desarrollan en estos territorios carecen de las condiciones técnicas, la infraestructura productiva y los estándares de calidad necesarios para competir en los mercados nacionales e internacionales, lo que limita su capacidad de generar ingresos sostenibles y preservar el patrimonio vivo que las sustenta.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-ink)', lineHeight: '1.75', textAlign: 'justify' }}>
                  En respuesta a esta necesidad, el Fondo Nacional de Turismo — FONTUR, a través del contrato FNTCE-730-2025, ha puesto en marcha un proceso de cofinanciación que no se limita a la entrega de dotaciones físicas: busca un fortalecimiento integral de las experiencias turísticas culturales, que incluye la caracterización en campo, el diagnóstico de necesidades, la dotación de maquinaria, herramientas o equipamiento, y la generación de capacidades para que artesanos, cocineros tradicionales, guías culturales y portadores de saberes ancestrales puedan elevar la calidad, la sostenibilidad y la competitividad de su oferta turística.
                </p>
              </div>
            </div>

            {/* ═══ AVISO DE PRESELECCIÓN — Integrado elegantemente ═══ */}
            <div className="section-container" style={{ marginBottom: '40px' }}>
              <div style={{
                maxWidth: '820px',
                margin: '0 auto',
                backgroundColor: 'var(--color-forest-light)',
                borderRadius: '12px',
                padding: '20px 24px',
                borderLeft: '4px solid var(--color-forest)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-forest)' }}>
                  Proceso de selección
                </span>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-ink)', lineHeight: '1.6' }}>
                  En la fase inicial de preinscripción se realizará una preselección de <strong>hasta diez (10) experiencias candidatas por municipio</strong>. Posteriormente, el equipo de <strong>COTELCO Capítulo Valle del Cauca</strong>, como operador del proyecto, se comunicará directamente con los representantes de las experiencias preseleccionadas para programar la validación y el diagnóstico en campo.
                </p>
              </div>
            </div>

            {/* Mapa Interactivo */}
            <MapaSocioPatrimonio />
          </>
        )}

        {activeTab === 'abc' && <ABCConvocatoria />}

        {activeTab === 'inscripcion' && (
          <div className="section-container" style={{ marginTop: '30px' }}>
            <div className="section-header">
              <div>
                <h2><FileIcon /> Registro e Inscripción Oficial</h2>
                <div className="section-header-desc">
                  Completa tu registro en línea y descarga las plantillas necesarias para la postulación formal.
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--color-forest-light)',
              borderLeft: '4px solid var(--color-forest)',
              borderRadius: '8px',
              padding: '16px 20px',
              marginBottom: '30px',
              fontSize: '14px',
              color: 'var(--color-forest)',
              lineHeight: '1.5',
              fontWeight: 600
            }}>
              Recuerda: Esta es la etapa de postulación inicial. Se preseleccionarán hasta 10 candidatos por municipio, y posteriormente el operador COTELCO Valle se comunicará de forma individual con los preseleccionados para agendar visitas técnicas.
            </div>

            <div className="forms-downloads-layout">
              <div className="action-card">
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', marginBottom: '12px', color: 'var(--color-forest)', fontFamily: "'Playfair Display', serif" }}>
                    <ExternalLinkIcon /> 1. Cuestionarios Obligatorios
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-light)', lineHeight: '1.6' }}>
                    Para iniciar el proceso de selección formal, es indispensable diligenciar los dos formularios de registro oficiales.
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                  <a href="https://forms.google.com/inscripcion-red-pueblos" target="_blank" rel="noopener noreferrer" className="action-btn" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    Formulario 1: Inscripción Legal <ExternalLinkIcon size={16} />
                  </a>
                  <a href="https://forms.google.com/caracterizacion-experiencias" target="_blank" rel="noopener noreferrer" className="action-btn secondary" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    Formulario 2: Diagnóstico de Activos <ExternalLinkIcon size={16} />
                  </a>
                </div>
              </div>

              <div className="action-card">
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', marginBottom: '12px', color: 'var(--color-forest)', fontFamily: "'Playfair Display', serif" }}>
                    <DownloadIcon /> 2. Biblioteca de Formatos
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-light)', lineHeight: '1.6' }}>
                    Descarga las bases reguladoras definitivas y el modelo oficial de carta de aval municipal.
                  </p>
                </div>
                <div className="downloads-list">
                  <div className="download-row">
                    <div className="download-info">
                      <FileIcon />
                      <div className="download-title-container">
                        <span className="download-title">Términos de Referencia FNTCE-730-2025</span>
                        <span className="download-meta">PDF • 2.4 MB • Versión Oficial</span>
                      </div>
                    </div>
                    <a href="#download-pdf" className="download-btn">Descargar</a>
                  </div>
                  <div className="download-row">
                    <div className="download-info">
                      <FileIcon />
                      <div className="download-title-container">
                        <span className="download-title">Modelo de Aval de la Alcaldía</span>
                        <span className="download-meta">DOCX • 420 KB • Formato Obligatorio</span>
                      </div>
                    </div>
                    <a href="#download-docx" className="download-btn">Descargar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'glosario' && <GlosarioTDR />}
      </main>

      {/* Footer Gubernamental Premium */}
      <footer className="footer-gubernamental" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: '60px 48px 30px 48px', marginTop: '80px' }}>
        <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
          <div className="footer-section">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 900, color: 'var(--color-forest)', marginBottom: '16px' }}>Red de Pueblos Patrimonio</h3>
            <p style={{ color: 'var(--color-ink)', lineHeight: 1.7, fontSize: '14px' }}>
              Iniciativa nacional operada por <strong>COTELCO Capítulo Valle del Cauca</strong> bajo el contrato <strong>FNTCE-730-2025</strong>. Buscamos promover la competitividad y el desarrollo económico de nuestras joyas históricas.
            </p>
          </div>
          <div className="footer-section">
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-forest)', marginBottom: '16px' }}>
              Enlaces Institucionales
            </h3>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="https://www.mincit.gov.co" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Ministerio de Comercio, Industria y Turismo</a></li>
              <li><a href="https://fontur.com.co" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Fondo Nacional de Turismo - FONTUR</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-forest)', marginBottom: '16px' }}>
              Contacto y Soporte
            </h3>
            <p style={{ color: 'var(--color-ink)', fontSize: '14px', lineHeight: 1.6 }}>
              Para dudas sobre la postulación, escríbenos a:<br />
              <a href="mailto:idtcultur@gmail.com" style={{ color: 'var(--color-ocean)', fontWeight: 800, textDecoration: 'none', display: 'inline-block', marginTop: '6px', fontSize: '16px' }}>idtcultur@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="footer-legal" style={{ maxWidth: '1200px', margin: '50px auto 0 auto', borderTop: '1px solid var(--color-border)', paddingTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
          
          {/* Logos Entidades */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '60px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-ink-light)', fontWeight: 700 }}>Financiador</span>
              <img src="/logos/fontur.png" alt="FONTUR" style={{ height: '70px', objectFit: 'contain' }} />
            </div>
            
            <div style={{ width: '1px', height: '60px', backgroundColor: 'var(--color-border)', display: 'block' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-ink-light)', fontWeight: 700 }}>Operador</span>
              <img src="/logos/cotelvalle.png" alt="COTELCO Capítulo Valle del Cauca" style={{ height: '70px', objectFit: 'contain' }} />
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--color-ink-light)', lineHeight: 1.6 }}>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} Todos los derechos reservados. Sitio web diseñado para el contrato FNTCE-730-2025.</p>
          </div>

          {/* Logo País de la Belleza (Integrado estéticamente) */}
          <div className="footer-logos-co" style={{ 
            opacity: 0.85, 
            mixBlendMode: 'multiply', 
            marginTop: '10px',
            transform: 'scale(0.95)'
          }}>
            <img src="/logos/pais_belleza.png" alt="Colombia el País de la Belleza" style={{ height: '70px', objectFit: 'contain', filter: 'contrast(1.05)' }} />
          </div>

        </div>
      </footer>
    </>
  );
}

export default App;
