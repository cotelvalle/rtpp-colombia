import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const midRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bgRef.current || !midRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Movimiento parallax sutil del fondo tropical
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // El personaje en primer plano sube ligeramente
      gsap.to(midRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Animación alegre de entrada del texto
      gsap.fromTo(textRef.current,
        { opacity: 0, x: -30, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'back.out(1.7)' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '85vh',
        overflow: 'hidden',
        backgroundColor: '#FDFBF7', // Fondo crema claro base
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Capa Fondo: Vector Tropical Vibrante */}
      <img
        ref={bgRef}
        src={`${import.meta.env.BASE_URL}villa_de_leyva.png`}
        alt="Fondo Villa de Leyva"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-2%',
          width: '105%',
          height: '120%',
          objectFit: 'cover',
          mixBlendMode: 'multiply', // Fusión perfecta con el fondo crema
          opacity: 0.85,
          zIndex: 1
        }}
      />

      {/* Capa de Texto: Aislada a la izquierda con colores vibrantes */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        <div ref={textRef} style={{ backgroundColor: 'rgba(253, 251, 247, 0.85)', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '24px', backdropFilter: 'blur(10px)', border: '2px solid rgba(255, 255, 255, 0.5)' }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(14px, 3vw, 18px)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#D92525',
              display: 'inline-block',
              marginBottom: '12px',
              backgroundColor: 'rgba(217, 37, 37, 0.1)',
              padding: '6px 12px',
              borderRadius: '8px'
            }}>
              Convocatoria
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            fontWeight: 900,
            color: '#1E4C33', 
            lineHeight: 1.15,
            maxWidth: '650px',
            margin: '0 0 16px 0',
            textWrap: 'balance'
          }}>
            Red Turística de Pueblos Patrimonio de Colombia
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(16px, 3vw, 18px)',
            color: '#475569', 
            margin: 0,
            fontWeight: 600,
            lineHeight: 1.6,
            borderLeft: '4px solid #D92525',
            paddingLeft: '12px'
          }}>
            Contrato FNTCE-730-2025
          </p>
        </div>
      </div>
    </section>
  );
}
