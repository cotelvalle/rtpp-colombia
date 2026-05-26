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
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 8vw, 4.2rem)',
            fontWeight: 900,
            color: '#D92525', // Rojo vibrante en vez del verde oscuro y triste
            lineHeight: 1.15,
            maxWidth: '550px',
            marginBottom: '10px'
          }}>
            Celebramos<br />
            nuestra riqueza<br />
            cultural.
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(15px, 4vw, 18px)',
            color: '#1E4C33', // Verde esmeralda oscuro
            marginTop: '10px',
            maxWidth: '500px',
            fontWeight: 700,
            lineHeight: 1.6
          }}>
            Descubre la alegría y diversidad de los 18 Pueblos Patrimonio de Colombia. Un viaje por el País de la Belleza.
          </p>
        </div>
      </div>
    </section>
  );
}
