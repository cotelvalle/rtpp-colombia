import React from 'react';

// Ilustración del Mural Collage del Hero (inspirado en ProColombia - El País de la Belleza)
export const HeroCollage: React.FC = () => (
  <svg
    viewBox="0 0 800 300"
    className="hero-collage-svg"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: 'auto', display: 'block' }}
  >
    {/* Fondo del Cielo */}
    <rect width="800" height="300" rx="16" fill="#E0F2FE" />
    
    {/* Montañas de Fondo con gradiente verde-azul */}
    <path d="M 0 300 L 150 120 L 300 240 L 480 80 L 650 220 L 800 130 L 800 300 Z" fill="#D1FAE5" opacity="0.7" />
    <path d="M 0 300 L 180 160 L 350 260 L 520 120 L 700 250 L 800 170 L 800 300 Z" fill="#A7F3D0" opacity="0.9" />

    {/* Río Sinuoso en la parte inferior */}
    <path d="M 0 280 Q 200 200 400 270 T 800 240 L 800 300 L 0 300 Z" fill="#38BDF8" />

    {/* Iglesia Colonial (Estructura) */}
    <g transform="translate(100, 100)">
      {/* Fachada principal */}
      <rect x="0" y="30" width="120" height="110" fill="#FAFAF9" stroke="#1E293B" strokeWidth="2.5" />
      {/* Campanario izquierdo */}
      <rect x="-30" y="0" width="30" height="140" fill="#FAFAF9" stroke="#1E293B" strokeWidth="2.5" />
      {/* Cúpula del campanario */}
      <path d="M -30 0 C -30 -30 0 -30 0 0 Z" fill="#E0533C" stroke="#1E293B" strokeWidth="2.5" />
      {/* Cúpula de la nave principal */}
      <path d="M 30 30 C 30 10 90 10 90 30 Z" fill="#E0533C" stroke="#1E293B" strokeWidth="2.5" />
      {/* Puerta principal de madera */}
      <path d="M 40 140 A 20 20 0 0 1 80 140 Z" fill="#78350F" stroke="#1E293B" strokeWidth="2.5" />
      {/* Ventanas */}
      <circle cx="-15" cy="40" r="8" fill="#FFC72C" stroke="#1E293B" strokeWidth="2" />
      <circle cx="60" cy="70" r="10" fill="#FFC72C" stroke="#1E293B" strokeWidth="2" />
      {/* Detalles de Tejas de barro */}
      <path d="M -30 0 L 0 0 M 0 30 L 120 30" stroke="#1E293B" strokeWidth="2" />
    </g>

    {/* Palma de Cera del Quindío */}
    <g transform="translate(320, 40)">
      {/* Tronco largo y delgado */}
      <path d="M 20 260 Q 15 150 20 40" stroke="#78716C" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Hojas superiores */}
      <path d="M 20 40 C 0 30 -20 40 -20 40 C -20 40 0 20 20 40 Z" fill="#047857" stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 20 40 C 40 30 60 40 60 40 C 60 40 40 20 20 40 Z" fill="#065F46" stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 20 40 C 10 20 20 0 20 0 C 20 0 30 20 20 40 Z" fill="#059669" stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 20 40 C 0 50 -15 65 -15 65 C -15 65 10 50 20 40 Z" fill="#047857" stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 20 40 C 40 50 55 65 55 65 C 55 65 30 50 20 40 Z" fill="#065F46" stroke="#1E293B" strokeWidth="1.5" />
      {/* Sombras de frutos amarillos */}
      <circle cx="17" cy="45" r="4" fill="#FFC72C" />
      <circle cx="23" cy="48" r="3" fill="#D49B35" />
    </g>

    {/* Balcón Colonial con Macetas */}
    <g transform="translate(560, 110)">
      {/* Muro base */}
      <rect x="0" y="0" width="160" height="90" fill="#FAF6F0" stroke="#1E293B" strokeWidth="2.5" />
      {/* Tejadillo superior del balcón */}
      <polygon points="-10,0 170,0 160,-20 0,-20" fill="#E0533C" stroke="#1E293B" strokeWidth="2.5" />
      {/* Ventana doble de madera abierta */}
      <rect x="30" y="10" width="40" height="70" fill="#D97706" stroke="#1E293B" strokeWidth="2" />
      <rect x="90" y="10" width="40" height="70" fill="#D97706" stroke="#1E293B" strokeWidth="2" />
      <rect x="35" y="15" width="30" height="60" fill="#0C4A6E" />
      <rect x="95" y="15" width="30" height="60" fill="#0C4A6E" />
      {/* Baranda del balcón */}
      <rect x="15" y="50" width="130" height="35" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      {/* Postes del balcón */}
      <line x1="30" y1="50" x2="30" y2="85" stroke="#1E293B" strokeWidth="2" />
      <line x1="55" y1="50" x2="55" y2="85" stroke="#1E293B" strokeWidth="2" />
      <line x1="80" y1="50" x2="80" y2="85" stroke="#1E293B" strokeWidth="2" />
      <line x1="105" y1="50" x2="105" y2="85" stroke="#1E293B" strokeWidth="2" />
      <line x1="130" y1="50" x2="130" y2="85" stroke="#1E293B" strokeWidth="2" />
      {/* Flores colgantes rojas y amarillas */}
      <path d="M 25 55 Q 35 75 45 55" fill="none" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" />
      <path d="M 75 55 Q 85 75 95 55" fill="none" stroke="#FFB200" strokeWidth="4" strokeLinecap="round" />
      <path d="M 115 55 Q 125 75 135 55" fill="none" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Instrumento Tiple/Guitarra Colombiana */}
    <g transform="translate(500, 160) rotate(-25)">
      {/* Caja de resonancia */}
      <path d="M 20 40 C 5 40 0 25 10 15 C 5 5 25 5 20 15 C 30 25 25 40 20 40 Z" fill="#D97706" stroke="#1E293B" strokeWidth="2" />
      {/* Mástil */}
      <rect x="13" y="-30" width="6" height="50" fill="#78350F" stroke="#1E293B" strokeWidth="2" />
      {/* Clavijero */}
      <polygon points="10,-35 22,-35 20,-45 12,-45" fill="#451A03" stroke="#1E293B" strokeWidth="1.5" />
      {/* Boca de la guitarra */}
      <circle cx="16" cy="18" r="3" fill="#1E293B" />
      {/* Cuerdas */}
      <line x1="16" y1="-35" x2="16" y2="35" stroke="#E2E8F0" strokeWidth="0.5" />
    </g>

    {/* Rama de Café con granos rojos */}
    <g transform="translate(430, 200)">
      <path d="M 0 50 Q 40 10 80 30" fill="none" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
      {/* Hojas */}
      <path d="M 20 35 C 10 25 20 15 30 25 C 40 35 30 45 20 35 Z" fill="#065F46" stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 50 25 C 40 15 50 5 60 15 C 70 25 60 35 50 25 Z" fill="#065F46" stroke="#1E293B" strokeWidth="1.5" />
      {/* Cerezas de café (Rojo brillante) */}
      <circle cx="28" cy="38" r="6" fill="#DC2626" stroke="#1E293B" strokeWidth="1" />
      <circle cx="34" cy="34" r="5" fill="#EF4444" stroke="#1E293B" strokeWidth="1" />
      <circle cx="31" cy="43" r="5.5" fill="#B91C1C" stroke="#1E293B" strokeWidth="1" />
      <circle cx="56" cy="27" r="6" fill="#DC2626" stroke="#1E293B" strokeWidth="1" />
      <circle cx="61" cy="23" r="5" fill="#EF4444" stroke="#1E293B" strokeWidth="1" />
    </g>

    {/* Sol Brillante en el Centro-Superior */}
    <g transform="translate(460, 50)">
      <circle cx="0" cy="0" r="22" fill="#FFC72C" stroke="#1E293B" strokeWidth="2.5" />
      {/* Rayos del sol */}
      <line x1="0" y1="-22" x2="0" y2="-32" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="0" y1="22" x2="0" y2="32" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="-22" y1="0" x2="-32" y2="0" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="0" x2="32" y2="0" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="-15" y1="-15" x2="-23" y2="-23" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="15" x2="23" y2="23" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="-15" y1="15" x2="-23" y2="23" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="-15" x2="23" y2="-23" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Sombrero Vueltiao tradicional en el suelo */}
    <g transform="translate(290, 240)">
      {/* Base/Ala */}
      <ellipse cx="40" cy="30" rx="35" ry="12" fill="#FAF6F0" stroke="#1E293B" strokeWidth="2" />
      {/* Copa */}
      <path d="M 22 26 C 22 12 58 12 58 26 Z" fill="#FAF6F0" stroke="#1E293B" strokeWidth="2" />
      {/* Trenzado/Franjas negras */}
      <path d="M 22 23 Q 40 18 58 23" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      <path d="M 12 30 Q 40 25 68 30" fill="none" stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 27 15 Q 40 12 53 15" fill="none" stroke="#1E293B" strokeWidth="1.5" />
    </g>
  </svg>
);

// Personaje Ilustrado: Anfitrión/Artesano de Pueblos Patrimonio
interface ArtisanProps {
  expression?: 'happy' | 'neutral' | 'guiding';
  size?: number;
}
export const ArtisanWelcome: React.FC<ArtisanProps> = ({ expression = 'happy', size = 180 }) => (
  <svg
    viewBox="0 0 200 240"
    width={size}
    height={size * 1.2}
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', margin: '0 auto' }}
  >
    {/* Sombrero Aguadeño */}
    <g>
      {/* Ala del sombrero */}
      <path d="M 30 90 Q 100 70 170 90 Q 100 105 30 90 Z" fill="#FAF9F6" stroke="#1E293B" strokeWidth="2.5" />
      {/* Copa */}
      <path d="M 60 83 C 60 40 140 40 140 83 Z" fill="#FAF9F6" stroke="#1E293B" strokeWidth="2.5" />
      {/* Cinta negra */}
      <path d="M 60 76 Q 100 70 140 76 L 141 82 Q 100 76 59 82 Z" fill="#1E293B" />
    </g>

    {/* Cabello */}
    <path d="M 58 92 C 50 110 55 125 60 130 C 58 115 62 100 68 94 Z" fill="#451A03" />
    <path d="M 142 92 C 150 110 145 125 140 130 C 142 115 138 100 132 94 Z" fill="#451A03" />

    {/* Orejas */}
    <circle cx="58" cy="118" r="8" fill="#FDBA74" stroke="#1E293B" strokeWidth="2" />
    <circle cx="142" cy="118" r="8" fill="#FDBA74" stroke="#1E293B" strokeWidth="2" />

    {/* Cara */}
    <path d="M 62 105 Q 100 145 138 105 L 135 135 Q 100 170 65 135 Z" fill="#FDBA74" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round" />

    {/* Ojos */}
    <circle cx="85" cy="115" r="4.5" fill="#1E293B" />
    <circle cx="115" cy="115" r="4.5" fill="#1E293B" />
    {/* Cejas expresivas */}
    <path d="M 76 108 Q 85 104 92 109" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    <path d="M 124 108 Q 115 104 108 109" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

    {/* Nariz */}
    <path d="M 97 116 Q 100 126 103 116" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

    {/* Expresiones de la boca */}
    {expression === 'happy' && (
      <path d="M 85 132 Q 100 152 115 132" fill="none" stroke="#E0533C" strokeWidth="3" strokeLinecap="round" />
    )}
    {expression === 'neutral' && (
      <line x1="88" y1="135" x2="112" y2="135" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
    )}
    {expression === 'guiding' && (
      <path d="M 88 130 A 12 12 0 0 0 112 130 Z" fill="#E0533C" stroke="#1E293B" strokeWidth="2" />
    )}

    {/* Mejillas sonrosadas */}
    <circle cx="72" cy="126" r="5" fill="#FCA5A5" opacity="0.6" />
    <circle cx="128" cy="126" r="5" fill="#FCA5A5" opacity="0.6" />

    {/* Ruana / Poncho (Terracota y rayas blancas tradicionales) */}
    <g>
      {/* Hombros */}
      <path d="M 40 175 Q 100 160 160 175 L 175 240 L 25 240 Z" fill="#A84D38" stroke="#1E293B" strokeWidth="2.5" />
      {/* Cuello de la camisa */}
      <polygon points="90,166 100,180 110,166" fill="#FAF9F6" stroke="#1E293B" strokeWidth="2" />
      {/* Rayas verticales de la ruana */}
      <path d="M 65 170 L 50 240" stroke="#F5F5F4" strokeWidth="5" fill="none" />
      <path d="M 80 168 L 70 240" stroke="#FFC72C" strokeWidth="3.5" fill="none" />
      <path d="M 135 170 L 150 240" stroke="#F5F5F4" strokeWidth="5" fill="none" />
      <path d="M 120 168 L 130 240" stroke="#FFC72C" strokeWidth="3.5" fill="none" />
      {/* Flecos de la ruana en la parte inferior */}
      <path d="M 30 240 L 30 244 M 45 240 L 45 244 M 60 240 L 60 244 M 75 240 L 75 244 M 90 240 L 90 244 M 105 240 L 105 244 M 120 240 L 120 244 M 135 240 L 135 244 M 150 240 L 150 244 M 165 240 L 165 244" stroke="#1E293B" strokeWidth="2" />
    </g>
  </svg>
);

// Icono: Objeto / Mapa de Ruta
export const ObjetoIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" width="55" height="55" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="70" height="70" rx="8" fill="#FAF6F0" stroke="#1E293B" strokeWidth="2.5" />
    <path d="M 25 35 Q 40 25 55 45 T 75 30" fill="none" stroke="#8B5CF6" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="25" cy="35" r="5" fill="#8B5CF6" stroke="#1E293B" strokeWidth="2" />
    <circle cx="75" cy="30" r="5" fill="#FFC72C" stroke="#1E293B" strokeWidth="2" />
    <path d="M 35 60 L 65 60 M 35 72 L 55 72" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Icono: Presupuesto / Cofre
export const PresupuestoIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" width="55" height="55" xmlns="http://www.w3.org/2000/svg">
    {/* Caja del cofre */}
    <rect x="20" y="45" width="60" height="35" rx="4" fill="#E0533C" stroke="#1E293B" strokeWidth="2.5" />
    {/* Tapa del cofre */}
    <path d="M 20 45 C 20 25 80 25 80 45 Z" fill="#D97706" stroke="#1E293B" strokeWidth="2.5" />
    {/* Cerradura */}
    <rect x="44" y="40" width="12" height="15" rx="2" fill="#FFC72C" stroke="#1E293B" strokeWidth="2" />
    <circle cx="50" cy="46" r="2.5" fill="#1E293B" />
    {/* Brillos de monedas */}
    <circle cx="28" cy="24" r="3.5" fill="#FFC72C" />
    <circle cx="70" cy="22" r="3.5" fill="#FFC72C" />
    <path d="M 50 10 L 50 18 M 12 55 L 16 55" stroke="#FFC72C" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Icono: Beneficiarios / Comunidad
export const BeneficiariosIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" width="55" height="55" xmlns="http://www.w3.org/2000/svg">
    {/* Personas en red */}
    <circle cx="50" cy="30" r="12" fill="#FFC72C" stroke="#1E293B" strokeWidth="2.5" />
    <path d="M 30 65 C 30 50 70 50 70 65 Z" fill="#FFC72C" stroke="#1E293B" strokeWidth="2.5" />

    <circle cx="25" cy="48" r="9" fill="#EC4899" stroke="#1E293B" strokeWidth="2" />
    <path d="M 10 75 C 10 65 40 65 40 75 Z" fill="#EC4899" stroke="#1E293B" strokeWidth="2" />

    <circle cx="75" cy="48" r="9" fill="#0EA5E9" stroke="#1E293B" strokeWidth="2" />
    <path d="M 60 75 C 60 65 90 65 90 75 Z" fill="#0EA5E9" stroke="#1E293B" strokeWidth="2" />
  </svg>
);

// Icono: Activos Habilitados / Equipamiento
export const ActivosIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" width="55" height="55" xmlns="http://www.w3.org/2000/svg">
    {/* Caja de herramientas */}
    <rect x="22" y="32" width="56" height="46" rx="4" fill="#0EA5E9" stroke="#1E293B" strokeWidth="2.5" />
    {/* Mango */}
    <path d="M 38 32 L 38 22 Q 50 18 62 22 L 62 32" fill="none" stroke="#1E293B" strokeWidth="2.5" />
    {/* Herramientas que sobresalen */}
    <line x1="50" y1="42" x2="50" y2="68" stroke="#FFC72C" strokeWidth="4.5" strokeLinecap="round" />
    <circle cx="50" cy="42" r="6.5" fill="#FFC72C" stroke="#1E293B" strokeWidth="2" />
    <line x1="38" y1="52" x2="62" y2="52" stroke="#1E293B" strokeWidth="2.5" />
  </svg>
);

// Icono: Prohibido / Gastos no elegibles
export const ProhibidoIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="36" fill="#FEE2E2" stroke="#EF4444" strokeWidth="4.5" />
    <line x1="24" y1="24" x2="76" y2="76" stroke="#EF4444" strokeWidth="4.5" />
    {/* Coche / Edificio miniatura adentro */}
    <rect x="38" y="44" width="24" height="16" fill="none" stroke="#1E293B" strokeWidth="2" />
    <circle cx="44" cy="62" r="3" fill="#1E293B" />
    <circle cx="56" cy="62" r="3" fill="#1E293B" />
  </svg>
);

// Iconos Ilustrativos para Pueblos Específicos (según su vocación)
interface TownIconProps {
  vocab?: string;
  color?: string;
}
export const TownIcon: React.FC<TownIconProps> = ({ vocab = 'default', color = '#FFC72C' }) => {
  switch (vocab.toLowerCase()) {
    case 'cafetera': // Eje Cafetero
    case 'agricultura':
      return (
        <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill={color} stroke="#1E293B" strokeWidth="2" />
          <path d="M 35 65 C 20 65 20 40 35 40 M 35 40 C 35 25 65 25 65 40 M 65 40 C 80 40 80 65 65 65 Z" fill="#FAF6F0" stroke="#1E293B" strokeWidth="2" />
          <circle cx="50" cy="45" r="5" fill="#E0533C" />
          <line x1="50" y1="50" x2="50" y2="65" stroke="#1E293B" strokeWidth="2" />
        </svg>
      );
    case 'arquitectura': // Pueblos Coloniales
    case 'colonial':
      return (
        <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill={color} stroke="#1E293B" strokeWidth="2" />
          <polygon points="50,22 18,52 82,52" fill="#E0533C" stroke="#1E293B" strokeWidth="2" />
          <rect x="28" y="52" width="44" height="26" fill="#FAF9F6" stroke="#1E293B" strokeWidth="2" />
          <rect x="42" y="62" width="16" height="16" fill="#78350F" stroke="#1E293B" strokeWidth="1.5" />
        </svg>
      );
    case 'artesania': // Aguadas, Mompox
    case 'filigrana':
      return (
        <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill={color} stroke="#1E293B" strokeWidth="2" />
          {/* Sombrero miniatura */}
          <ellipse cx="50" cy="62" rx="28" ry="10" fill="#FAF6F0" stroke="#1E293B" strokeWidth="2" />
          <path d="M 34 58 C 34 40 66 40 66 58 Z" fill="#FAF6F0" stroke="#1E293B" strokeWidth="2" />
          <line x1="34" y1="55" x2="66" y2="55" stroke="#1E293B" strokeWidth="2.5" />
        </svg>
      );
    case 'rio': // Honda, Mompox
    case 'pesca':
      return (
        <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill={color} stroke="#1E293B" strokeWidth="2" />
          {/* Puente Colonial */}
          <path d="M 15 65 Q 50 35 85 65" fill="none" stroke="#1E293B" strokeWidth="4" />
          <path d="M 25 65 A 10 10 0 0 1 45 65" fill="#38BDF8" stroke="#1E293B" strokeWidth="2" />
          <path d="M 55 65 A 10 10 0 0 1 75 65" fill="#38BDF8" stroke="#1E293B" strokeWidth="2" />
          <line x1="20" y1="54" x2="80" y2="54" stroke="#1E293B" strokeWidth="2" />
        </svg>
      );
    case 'naturaleza': // Jardín, Jericó
    case 'flores':
      return (
        <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill={color} stroke="#1E293B" strokeWidth="2" />
          {/* Flor estilizada */}
          <circle cx="50" cy="50" r="8" fill="#FFC72C" stroke="#1E293B" strokeWidth="2" />
          <circle cx="50" cy="32" r="10" fill="#E0533C" stroke="#1E293B" strokeWidth="1.5" />
          <circle cx="50" cy="68" r="10" fill="#E0533C" stroke="#1E293B" strokeWidth="1.5" />
          <circle cx="32" cy="50" r="10" fill="#E0533C" stroke="#1E293B" strokeWidth="1.5" />
          <circle cx="68" cy="50" r="10" fill="#E0533C" stroke="#1E293B" strokeWidth="1.5" />
        </svg>
      );
    default: // Genérico
      return (
        <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill={color} stroke="#1E293B" strokeWidth="2" />
          <polygon points="50,20 80,75 20,75" fill="#FAF9F6" stroke="#1E293B" strokeWidth="2" />
          <circle cx="50" cy="58" r="8" fill="#FFC72C" stroke="#1E293B" strokeWidth="1.5" />
        </svg>
      );
  }
};

// Jeep Willys: Icono del transporte rural cafetero colombiano para la validación en territorio
export const JeepWillysIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
    {/* Ruedas y ejes */}
    <rect x="18" y="70" width="16" height="15" rx="3" fill="#1E293B" />
    <rect x="66" y="70" width="16" height="15" rx="3" fill="#1E293B" />
    <rect x="25" y="75" width="50" height="5" fill="#64748B" />
    {/* Carrocería verde oliva */}
    <rect x="20" y="45" width="60" height="28" rx="4" fill="#1E3A20" stroke="#1E293B" strokeWidth="2.5" />
    {/* Parrilla frontal */}
    <rect x="30" y="52" width="40" height="20" fill="#0F2414" stroke="#1E293B" strokeWidth="1.5" />
    {/* Líneas verticales de la parrilla */}
    <line x1="38" y1="56" x2="38" y2="68" stroke="#1E293B" strokeWidth="2" />
    <line x1="44" y1="56" x2="44" y2="68" stroke="#1E293B" strokeWidth="2" />
    <line x1="50" y1="56" x2="50" y2="68" stroke="#1E293B" strokeWidth="2" />
    <line x1="56" y1="56" x2="56" y2="68" stroke="#1E293B" strokeWidth="2" />
    <line x1="62" y1="56" x2="62" y2="68" stroke="#1E293B" strokeWidth="2" />
    {/* Faros redondos amarillos */}
    <circle cx="26" cy="53" r="6" fill="#FCD34D" stroke="#1E293B" strokeWidth="1.5" />
    <circle cx="74" cy="53" r="6" fill="#FCD34D" stroke="#1E293B" strokeWidth="1.5" />
    {/* Parachoques */}
    <rect x="12" y="72" width="76" height="4" rx="1" fill="#64748B" stroke="#1E293B" strokeWidth="1.5" />
    {/* Parabrisas plegable */}
    <rect x="24" y="22" width="52" height="24" fill="none" stroke="#1E293B" strokeWidth="2.5" />
    <rect x="27" y="25" width="21" height="18" fill="#E0F2FE" stroke="#1E293B" strokeWidth="1.5" />
    <rect x="52" y="25" width="21" height="18" fill="#E0F2FE" stroke="#1E293B" strokeWidth="1.5" />
    {/* Capó superior */}
    <path d="M 28 45 L 34 38 L 66 38 L 72 45 Z" fill="#1E3A20" stroke="#1E293B" strokeWidth="2" />
  </svg>
);

// Casa Colonial: Icono de los pueblos patrimonio y fase de inscripción
export const ColonialHouseIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
    {/* Pared principal */}
    <rect x="20" y="38" width="60" height="46" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2.5" />
    {/* Techo de barro (Tejas rojas) */}
    <polygon points="12,38 50,14 88,38" fill="#B91C1C" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round" />
    {/* Líneas de tejas */}
    <line x1="30" y1="28" x2="30" y2="38" stroke="#1E293B" strokeWidth="1.5" />
    <line x1="50" y1="18" x2="50" y2="38" stroke="#1E293B" strokeWidth="1.5" />
    <line x1="70" y1="28" x2="70" y2="38" stroke="#1E293B" strokeWidth="1.5" />
    {/* Puerta colonial de madera */}
    <path d="M 40 84 A 10 10 0 0 1 60 84 Z" fill="#78350F" stroke="#1E293B" strokeWidth="2" />
    <rect x="40" y="65" width="20" height="19" fill="#78350F" stroke="#1E293B" strokeWidth="2" />
    {/* Ventanas con marcos de color (azul caribe) */}
    <rect x="26" y="46" width="14" height="16" fill="#0284C7" stroke="#1E293B" strokeWidth="1.5" />
    <rect x="29" y="49" width="8" height="10" fill="#E0F2FE" />
    <rect x="60" y="46" width="14" height="16" fill="#0284C7" stroke="#1E293B" strokeWidth="1.5" />
    <rect x="63" y="49" width="8" height="10" fill="#E0F2FE" />
    {/* Zócalo tradicional en la parte inferior */}
    <rect x="20.5" y="80" width="59" height="3.5" fill="#D97706" />
  </svg>
);

// Telar de Puntajes: Metáfora para los criterios evaluados
export const WeavingLoomIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
    {/* Marco de madera */}
    <rect x="15" y="15" width="70" height="70" fill="none" stroke="#78350F" strokeWidth="6" rx="2" />
    {/* Rodillos superior e inferior */}
    <rect x="12" y="18" width="76" height="4" fill="#451A03" />
    <rect x="12" y="78" width="76" height="4" fill="#451A03" />
    {/* Hilos verticales (urdimbre) */}
    <line x1="28" y1="22" x2="28" y2="78" stroke="#DC2626" strokeWidth="2.5" />
    <line x1="34" y1="22" x2="34" y2="78" stroke="#DC2626" strokeWidth="2.5" />
    <line x1="42" y1="22" x2="42" y2="78" stroke="#D97706" strokeWidth="2.5" />
    <line x1="48" y1="22" x2="48" y2="78" stroke="#D97706" strokeWidth="2.5" />
    <line x1="56" y1="22" x2="56" y2="78" stroke="#0284C7" strokeWidth="2.5" />
    <line x1="62" y1="22" x2="62" y2="78" stroke="#0284C7" strokeWidth="2.5" />
    <line x1="70" y1="22" x2="70" y2="78" stroke="#16A34A" strokeWidth="2.5" />
    <line x1="76" y1="22" x2="76" y2="78" stroke="#16A34A" strokeWidth="2.5" />
    {/* Lanzadera / Hilo horizontal tejido */}
    <path d="M 20 50 Q 50 40 80 50" fill="none" stroke="#FFC72C" strokeWidth="4" strokeLinecap="round" />
    {/* Aguja de madera */}
    <polygon points="10,53 22,47 20,51 10,55" fill="#B45309" stroke="#1E293B" strokeWidth="1" />
  </svg>
);

// Manos Artesanas: Icono representativo del fortalecimiento y dotación final
export const ArtisanHandsIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
    {/* Vasija de barro en el centro */}
    <path d="M 35 40 C 35 25 65 25 65 40 C 65 52 75 60 70 75 C 65 85 35 85 30 75 C 25 60 35 52 35 40 Z" fill="#D97706" stroke="#1E293B" strokeWidth="2.5" />
    <ellipse cx="50" cy="30" rx="15" ry="4" fill="#FAF6F0" stroke="#1E293B" strokeWidth="2" />
    <path d="M 33 60 C 40 68 60 68 67 60" fill="none" stroke="#B45309" strokeWidth="2.5" />
    {/* Mano Izquierda */}
    <g transform="translate(10, 42)">
      <path d="M 0 20 Q 15 15 25 22 C 28 25 28 30 22 34 L 10 38" fill="none" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <path d="M 0 20 Q 15 15 25 22 C 28 25 28 30 22 34 L 10 38" fill="#FDBA74" />
      {/* Dedos */}
      <line x1="25" y1="22" x2="28" y2="21" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="25" x2="29" y2="24" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    </g>
    {/* Mano Derecha */}
    <g transform="translate(62, 42) scale(-1, 1)">
      <path d="M -25 20 Q -10 15 0 22 C 3 25 3 30 -3 34 L -15 38" fill="none" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <path d="M -25 20 Q -10 15 0 22 C 3 25 3 30 -3 34 L -15 38" fill="#FDBA74" />
      <line x1="0" y1="22" x2="3" y2="21" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      <line x1="0" y1="25" x2="4" y2="24" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);
