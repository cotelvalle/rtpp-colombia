const fs = require('fs');

// Fix App.tsx
let appStr = fs.readFileSync('src/App.tsx', 'utf8');
appStr = appStr.replace(/\/\* Mini escudo decorativo[\s\S]*?<\/svg>\n\);\n/g, '');
fs.writeFileSync('src/App.tsx', appStr);

// Fix ABCConvocatoria.tsx
let abcStr = fs.readFileSync('src/components/ABCConvocatoria.tsx', 'utf8');
abcStr = abcStr.replace(/ActivosIcon,\s*/g, '');
abcStr = abcStr.replace(/ProhibidoIcon,\s*/g, '');
abcStr = abcStr.replace(/PresupuestoIcon,\s*/g, '');
fs.writeFileSync('src/components/ABCConvocatoria.tsx', abcStr);

// Fix HeroParallax.tsx
let heroStr = fs.readFileSync('src/components/HeroParallax.tsx', 'utf8');
heroStr = heroStr.replace(/import React(, { useState, useEffect, useRef })? from 'react';/, "import { useState, useEffect, useRef } from 'react';");
heroStr = heroStr.replace(/import React from 'react';\n/, '');
fs.writeFileSync('src/components/HeroParallax.tsx', heroStr);

// Fix MapaSocioPatrimonio.tsx
let mapStr = fs.readFileSync('src/components/MapaSocioPatrimonio.tsx', 'utf8');
mapStr = mapStr.replace(/ZoomableGroup,\s*/g, '');
mapStr = mapStr.replace(/cursor:\s*['"]pointer['"],?\s*/g, '');
fs.writeFileSync('src/components/MapaSocioPatrimonio.tsx', mapStr);

console.log("Fixes applied");
