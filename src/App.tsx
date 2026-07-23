import { useState, useEffect } from 'react';
import { ABCConvocatoria } from './components/ABCConvocatoria';
import { MapaSocioPatrimonio } from './components/MapaSocioPatrimonio';
import { GlosarioTDR } from './components/GlosarioTDR';
import { TownIcon } from './components/SVGIllustrations';
import { HeroParallax } from './components/HeroParallax';
import {
  FileIcon,
  DownloadIcon,
  ExternalLinkIcon
} from './components/SVGIcons';

type TabType = 'presentacion' | 'abc' | 'glosario' | 'inscripcion';

function App() {
  const getTabFromHash = (): TabType => {
    const hash = window.location.hash.replace('#', '');
    if (['presentacion', 'abc', 'glosario', 'inscripcion'].includes(hash)) {
      return hash as TabType;
    }
    return 'presentacion';
  };

  const [activeTab, setActiveTab] = useState<TabType>(getTabFromHash());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getTabFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (tab: TabType) => {
    if (tab === 'presentacion') {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    } else {
      window.location.hash = tab;
    }
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
            <div className="nav-logos">
              <img src={`${import.meta.env.BASE_URL}logos/cotelvalle.png`} alt="Cotelco Valle" className="nav-logo-img" />
              <div className="nav-logo-divider hide-on-mobile"></div>
              <span className="nav-contract-text hide-on-mobile">CONTRATO FNTCE-730-2025</span>
            </div>
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
                  Cofinanciación en activos productivos, acompañamiento técnico y fortalecimiento de capacidades para experiencias turísticas de los 18 municipios de la Red de Pueblos Patrimonio.
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
                  <div className="polaroid-caption">Barichara, Santander</div>
                </div>
                <div className="polaroid-card" style={{ transform: 'rotate(5deg) translate(40px, -40px)', zIndex: 4 }}>
                  <div className="polaroid-image-placeholder"><TownIcon vocab="artesania" color="#FAE8FF" /></div>
                  <div className="polaroid-caption">Mompox, Bolívar</div>
                </div>
                <div className="polaroid-card" style={{ transform: 'rotate(-3deg) translate(-10px, 60px)', zIndex: 5 }}>
                  <div className="polaroid-image-placeholder"><TownIcon vocab="cafetera" color="#DCFCE7" /></div>
                  <div className="polaroid-caption">Aguadas, Caldas</div>
                </div>
              </div>
            </section>

            {/* Estadísticas */}
            <section className="hero-stats-grid">
              <div className="hero-stat-card"><span className="hero-stat-val">18</span><span className="hero-stat-lbl">Municipios de la Red</span></div>
              <div className="hero-stat-card"><span className="hero-stat-val">54</span><span className="hero-stat-lbl">Experiencias Beneficiadas</span></div>
            </section>

            {/* ═══ JUSTIFICACIÓN DEL PROYECTO — Sacada de los TDR ═══ */}
            <div className="section-container" style={{ marginBottom: '10px' }}>
              <div className="section-header" style={{ textAlign: 'center' }}>
                <h2 style={{ justifyContent: 'center' }}>¿Por qué esta convocatoria?</h2>
              </div>
              <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '15px', color: 'var(--color-ink)', lineHeight: '1.75', textAlign: 'justify' }}>
                  El programa <strong>Red Turística de Pueblos Patrimonio (RTPP)</strong> es una apuesta clave para el turismo cultural en Colombia, destacando el inmenso valor histórico y arquitectónico de 18 municipios únicos. Teniendo en cuenta la importancia que ha tenido el programa para el desarrollo turístico del país, se considera necesario dar continuidad a la Red a partir de tres pilares estratégicos de fortalecimiento: <strong>articulación, competitividad y sostenibilidad</strong>. El trabajo articulado como red colaborativa, con principios de participación y corresponsabilidad de las partes interesadas, permitirá seguir fortaleciendo esta importante Red.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-ink)', lineHeight: '1.75', textAlign: 'justify' }}>
                  Por lo anterior, el presente proyecto <strong>FNTCE-730-2025</strong> vincula y materializa las siguientes actividades, que esperan ser desarrolladas con las experiencias seleccionadas:
                </p>
                <ul style={{ fontSize: '15px', color: 'var(--color-ink)', lineHeight: '1.6', paddingLeft: '25px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>Diseñar un portafolio de servicios, actividades y experiencias turísticas de los municipios que integran la Red Turística de Pueblos Patrimonio.</li>
                  <li>Realizar una jornada de validación de servicios y experiencias turísticas en cada uno de los 18 municipios que integran la Red Turística de Pueblos Patrimonio.</li>
                  <li>Estructurar un documento que incluya las necesidades de dotación para la operación de las actividades, experiencias, productos y servicios turísticos identificados.</li>
                  <li>Realizar la entrega de dotación a 54 actividades, experiencias, productos y/o servicios turísticos que aporten a los pilares de la sostenibilidad del turismo cultural.</li>
                  <li>Realizar un encuentro de fortalecimiento empresarial y un encuentro de encadenamiento productivo para la RTPP.</li>
                </ul>
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
                  El proceso recibirá todas las postulaciones sin límite inicial. Tras un filtro documental y técnico, <strong>cinco (5) experiencias quedarán preclasificadas</strong> por municipio para recibir una visita técnica en campo por parte del equipo de COTELCO Valle del Cauca. Tras las visitas, se elegirán las <strong>tres (3) experiencias seleccionadas definitivas</strong> por municipio para recibir dotación, conforme a los Términos de Referencia. <br/><br/><strong>Para conocer el detalle exacto del proceso, por favor revisa la sección del ABC de la Convocatoria.</strong>
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

            {/* Advisor de Descargo de Responsabilidad */}
            <div style={{ backgroundColor: 'rgba(217, 119, 6, 0.1)', border: '1px solid var(--color-mustard)', borderRadius: '12px', padding: '20px', marginBottom: '30px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '24px' }}>⚠️</span>
              <div>
                <h4 style={{ color: '#B45309', margin: '0 0 8px 0', fontSize: '16px', fontWeight: 800 }}>Importante: Responsabilidad del Postulante</h4>
                <p style={{ color: 'var(--color-ink-light)', margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                  Es <strong>responsabilidad exclusiva y obligatoria</strong> de cada postulante descargar, leer y comprender en su totalidad los Términos de Referencia (TDR) y los anexos oficiales antes de realizar su inscripción. La postulación implica la aceptación de todas las reglas y condiciones descritas en los documentos formales de la convocatoria.
                </p>
              </div>
            </div>

            {/* ═══ TUTORIAL DE INSCRIPCIÓN ═══ */}
            <div className="tutorial-section" style={{ marginBottom: '30px', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ padding: '24px', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-forest-light)' }}>
                <h3 style={{ margin: 0, color: 'var(--color-forest)', fontFamily: "'Playfair Display', serif", fontSize: '22px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  📺 Tutorial: ¿Cómo realizar tu postulación?
                </h3>
                <p style={{ margin: '8px 0 0 0', color: 'var(--color-ink)', fontSize: '14.5px', lineHeight: '1.6' }}>
                  Antes de descargar los formatos o llenar el formulario, te recomendamos ver este breve video paso a paso donde explicamos cómo completar tu inscripción exitosamente.
                </p>
              </div>
              <div style={{ padding: '32px 24px', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--color-surface)' }}>
                <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', position: 'relative', boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.15)' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/u1L93XPkDns"
                    srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%;background:transparent}img{position:absolute;width:100%;height:100%;object-fit:cover;top:0;left:0}.play-btn{width:72px;height:52px;background-color:rgba(33,33,33,0.85);border-radius:14px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center;transition:all 0.2s ease;backdrop-filter:blur(4px);}.play-btn::before{content:"";border-style:solid;border-width:12px 0 12px 22px;border-color:transparent transparent transparent #fff;margin-left:6px;}a:hover .play-btn{background-color:#ff0000;transform:translate(-50%,-50%) scale(1.05);}</style><a href="https://www.youtube.com/embed/u1L93XPkDns?autoplay=1"><img src="${import.meta.env.BASE_URL}tutorial-cover.webp" alt="Tutorial Video"><div class="play-btn"></div></a>`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Tutorial RTPP"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="forms-downloads-layout">
              {/* Nuevo Bloque de Resultados - Diseño de Impacto */}
              <div className="action-card" style={{ 
                gridColumn: '1 / -1', 
                background: 'linear-gradient(135deg, var(--color-ocean) 0%, #0284c7 100%)', 
                borderColor: 'var(--color-ocean)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                padding: '32px',
                gap: '24px',
                color: 'white',
                boxShadow: '0 12px 30px -10px rgba(14, 165, 233, 0.5)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px'
              }}>
                <div style={{ flex: '1 1 300px', position: 'relative', zIndex: 2 }}>
                  <span style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(255,255,255,0.2)', 
                    color: '#fff', 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    fontSize: '13px', 
                    fontWeight: 800,
                    letterSpacing: '0.5px',
                    marginBottom: '14px',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>
                    <span style={{ fontSize: '16px' }}>📅</span> PUBLICADO: 22 DE JULIO DE 2026
                  </span>
                  <h3 style={{ fontSize: '24px', margin: '0 0 10px 0', color: 'white', fontFamily: "'Playfair Display', serif", fontWeight: 900, lineHeight: '1.3' }}>
                    Publicación de resultados de la verificación de requisitos habilitantes fase de elegibilidad
                  </h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.95)', lineHeight: '1.6', margin: 0, fontWeight: 500, textAlign: 'justify' }}>
                    La presente publicación corresponde exclusivamente a la revisión del cumplimiento de los requisitos mínimos establecidos en los TDR de la convocatoria. En consecuencia, las postulaciones declaradas como elegibles han acreditado el cumplimiento de dichos requisitos y continúan a la siguiente fase del proceso.
                  </p>
                </div>
                <div style={{ flex: '0 0 auto', display: 'flex', minWidth: '220px', position: 'relative', zIndex: 2 }}>
                  <a href={`${import.meta.env.BASE_URL}acta-elegibilidad.pdf`} target="_blank" rel="noopener noreferrer" className="action-btn download-btn" style={{ 
                    textAlign: 'center', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    gap: '10px', 
                    backgroundColor: 'white', 
                    color: 'var(--color-ocean)',
                    fontWeight: 800,
                    fontSize: '16px',
                    padding: '16px 28px',
                    width: '100%',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                    border: 'none',
                    borderRadius: '12px'
                  }}>
                    Ver Documento <FileIcon />
                  </a>
                </div>
                {/* Elementos decorativos de fondo */}
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 1 }}></div>
                <div style={{ position: 'absolute', bottom: '-40px', right: '100px', width: '80px', height: '80px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 1 }}></div>
              </div>

              <div className="action-card">
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', marginBottom: '12px', color: 'var(--color-forest)', fontFamily: "'Playfair Display', serif" }}>
                    <ExternalLinkIcon /> 1. Cuestionario Obligatorio
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-light)', lineHeight: '1.6' }}>
                    El periodo de postulación formal ha finalizado. Agradecemos a todos los participantes.
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                  <a href="#" className="action-btn" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '8px', opacity: 0.7, cursor: 'not-allowed', backgroundColor: '#9ca3af' }} onClick={(e) => e.preventDefault()}>
                    Convocatoria Cerrada
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
                        <span className="download-title">Términos de Referencia</span>
                        <span className="download-meta">Versión Oficial</span>
                      </div>
                    </div>
                    <a href={`${import.meta.env.BASE_URL}documentos/TDR-FNTCE-730-2025-RTPP-VF.pdf`} target="_blank" rel="noopener noreferrer" className="download-btn">Leer PDF</a>
                  </div>
                  <div className="download-row">
                    <div className="download-info">
                      <FileIcon />
                      <div className="download-title-container">
                        <span className="download-title">Carta de compromiso</span>
                        <span className="download-meta">Formato Obligatorio</span>
                      </div>
                    </div>
                    <a href={`${import.meta.env.BASE_URL}documentos/CARTA_DE_COMPROMISO_POSTULANTE.docx`} download="Carta_de_Compromiso.docx" target="_blank" rel="noopener noreferrer" className="download-btn">Descargar</a>
                  </div>

                  {/* Adendas Divider */}
                  <div style={{ padding: '20px 0 12px 0', borderTop: '1px dashed var(--color-border)', marginTop: '8px' }}>
                    <h4 style={{ margin: '0 0 6px 0', color: 'var(--color-forest)', fontSize: '16px', fontFamily: "'Playfair Display', serif" }}>Actualizaciones y Adendas oficiales</h4>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-ink-light)', lineHeight: '1.5' }}>
                      Te invitamos a leer atentamente estos documentos, ya que incluyen los últimos cambios oficiales, ajustes de fechas y aclaraciones sobre la convocatoria.
                    </p>
                  </div>

                  <div className="download-row">
                    <div className="download-info">
                      <FileIcon />
                      <div className="download-title-container">
                        <span className="download-title">Adenda 1 - Cronograma Convocatoria</span>
                        <span className="download-meta">Actualización de fechas</span>
                      </div>
                    </div>
                    <a href={`${import.meta.env.BASE_URL}documentos/ADENDA_1_CRONOGRAMA_CONVOCATORIA.pdf`} target="_blank" rel="noopener noreferrer" className="download-btn">Leer PDF</a>
                  </div>
                  
                  <div className="download-row">
                    <div className="download-info">
                      <FileIcon />
                      <div className="download-title-container">
                        <span className="download-title">Adenda 2 - Cronograma Convocatoria</span>
                        <span className="download-meta">Actualización de fechas</span>
                      </div>
                    </div>
                    <a href={`${import.meta.env.BASE_URL}documentos/ADENDA_2.pdf`} target="_blank" rel="noopener noreferrer" className="download-btn">Leer PDF</a>
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
              <li><a href="https://redturisticadepueblospatrimonio.com.co" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Red Turística de Pueblos Patrimonio</a></li>
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
              <a href="mailto:cotelcopueblospatrimonio2026@gmail.com" style={{ color: 'var(--color-ocean)', fontWeight: 800, textDecoration: 'none', display: 'inline-block', marginTop: '6px', fontSize: '14.5px', wordBreak: 'break-all' }}>cotelcopueblospatrimonio2026@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="footer-legal" style={{ maxWidth: '1200px', margin: '50px auto 0 auto', borderTop: '1px solid var(--color-border)', paddingTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
          
          {/* Bloque Central de Logos */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
            {/* FONTUR y COTELCO */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '60px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-ink-light)', fontWeight: 700 }}>Financiador</span>
                <img src={`${import.meta.env.BASE_URL}logos/fontur.png`} alt="FONTUR" style={{ height: '65px', objectFit: 'contain' }} />
              </div>
              
              <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--color-border)', display: 'block' }}></div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-ink-light)', fontWeight: 700 }}>Operador</span>
                <img src={`${import.meta.env.BASE_URL}logos/cotelvalle.png`} alt="COTELCO Capítulo Valle del Cauca" style={{ height: '65px', objectFit: 'contain' }} />
              </div>
            </div>

            {/* Logo País de la Belleza (Más pequeño e integrado) */}
            <div className="footer-logos-co" style={{ opacity: 0.85, mixBlendMode: 'multiply' }}>
              <img src={`${import.meta.env.BASE_URL}logos/pais_belleza.png`} alt="Colombia el País de la Belleza" style={{ height: '42px', objectFit: 'contain', filter: 'contrast(1.05)' }} />
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--color-ink-light)', lineHeight: 1.6, marginTop: '10px' }}>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} Todos los derechos reservados. Sitio web diseñado para el contrato FNTCE-730-2025.</p>
          </div>

        </div>
      </footer>
    </>
  );
}

export default App;
