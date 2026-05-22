import React, { useState, useMemo } from 'react';
import tdrData from '../data/tdrInfo.json';

interface GlossaryItem {
  termino: string;
  definicion: string;
}

export const GlosarioTDR: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const glosario: GlossaryItem[] = useMemo(() => {
    // Sort terms alphabetically
    return [...tdrData.glosario].sort((a, b) =>
      a.termino.localeCompare(b.termino, 'es', { sensitivity: 'base' })
    );
  }, []);

  // Get list of unique starting letters available in the glossary
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    glosario.forEach((item) => {
      const firstChar = item.termino.charAt(0).toUpperCase();
      // Remove accents for grouping if needed, but in Spanish A and Á can be grouped as A
      const normalizedLetter = firstChar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      letters.add(normalizedLetter);
    });
    return letters;
  }, [glosario]);

  // Full Spanish alphabet
  const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

  // Filter terms based on search term and selected letter
  const filteredItems = useMemo(() => {
    return glosario.filter((item) => {
      // 1. Filter by letter
      if (selectedLetter) {
        const firstChar = item.termino.charAt(0).toUpperCase();
        const normalizedFirstChar = firstChar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (normalizedFirstChar !== selectedLetter) {
          return false;
        }
      }

      // 2. Filter by search text
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const termMatch = item.termino.toLowerCase().includes(query);
        const defMatch = item.definicion.toLowerCase().includes(query);
        return termMatch || defMatch;
      }

      return true;
    });
  }, [glosario, searchTerm, selectedLetter]);

  // Helper to highlight matched text
  const highlightText = (text: string, search: string) => {
    if (!search.trim()) return text;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <mark key={index} className="glossary-highlight">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedLetter(null);
  };

  return (
    <div className="section-container glossary-section" style={{ maxWidth: '1000px', margin: '0 auto 60px auto' }}>
      {/* Cabecera */}
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="hero-badge" style={{ marginBottom: '12px', backgroundColor: 'var(--color-purple-light)', color: 'var(--color-purple)', border: '1px solid rgba(109, 40, 217, 0.15)' }}>
          Glosario Oficial de Términos
        </span>
        <h2 style={{ fontSize: '32px', fontFamily: "'Playfair Display', serif", color: 'var(--color-forest)', fontWeight: 900 }}>
          Glosario de la Convocatoria
        </h2>
        <div className="section-header-desc" style={{ maxWidth: '700px', margin: '8px auto 0 auto' }}>
          Consulta las definiciones técnicas oficiales del TDR para el proyecto <strong>FNTP-2025-013</strong> (Contrato <strong>FNTCE-730-2025</strong>) operado por <strong>COTELCO Capítulo Valle del Cauca</strong>.
        </div>
      </div>

      {/* Controles de Búsqueda y Filtrado */}
      <div className="glossary-controls-card">
        {/* Input de Búsqueda */}
        <div className="glossary-search-wrapper">
          <svg className="glossary-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-input glossary-search-input"
            placeholder="Buscar términos o conceptos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 14px 14px 44px',
              borderRadius: '12px',
              border: '1px solid var(--color-border)',
              fontFamily: 'inherit',
              fontSize: '15px',
              outline: 'none',
              backgroundColor: '#F8FAFC'
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="glossary-clear-search"
              title="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>

        {/* Selector Alfabético A-Z */}
        <div className="glossary-alphabet-container">
          <span className="alphabet-label">Filtrar por letra:</span>
          <div className="alphabet-grid-wrapper">
            <button
              onClick={() => setSelectedLetter(null)}
              className={`alphabet-btn ${selectedLetter === null ? 'active' : ''}`}
            >
              Todos
            </button>
            {alphabet.map((letter) => {
              const hasTerms = availableLetters.has(letter);
              return (
                <button
                  key={letter}
                  onClick={() => hasTerms && setSelectedLetter(letter === selectedLetter ? null : letter)}
                  className={`alphabet-btn ${letter === selectedLetter ? 'active' : ''} ${!hasTerms ? 'disabled' : ''}`}
                  disabled={!hasTerms}
                  title={hasTerms ? `Ver términos por la letra ${letter}` : `Sin términos por la letra ${letter}`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Estadísticas de Resultados */}
      <div className="glossary-stats">
        <span style={{ fontSize: '14px', color: 'var(--color-ink-light)', fontFamily: "'Outfit', sans-serif" }}>
          Mostrando <strong>{filteredItems.length}</strong> de <strong>{glosario.length}</strong> términos oficiales
        </span>
        {(selectedLetter || searchTerm) && (
          <button onClick={handleResetFilters} className="glossary-reset-link">
            Limpiar Filtros
          </button>
        )}
      </div>

      {/* Listado de Tarjetas */}
      {filteredItems.length > 0 ? (
        <div className="glossary-grid">
          {filteredItems.map((item, idx) => {
            const firstChar = item.termino.charAt(0).toUpperCase();
            return (
              <div key={idx} className="glossary-card">
                <div className="glossary-card-header">
                  <div className="glossary-letter-badge">{firstChar}</div>
                  <h3 className="glossary-term-title">
                    {highlightText(item.termino, searchTerm)}
                  </h3>
                </div>
                <p className="glossary-term-definition">
                  {highlightText(item.definicion, searchTerm)}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="glossary-no-results">
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
          <h3>No se encontraron resultados</h3>
          <p style={{ color: 'var(--color-ink-light)', margin: '8px 0 20px 0' }}>
            No hay términos oficiales que coincidan con la búsqueda "{searchTerm}" {selectedLetter && `para la letra ${selectedLetter}`}.
          </p>
          <button onClick={handleResetFilters} className="btn-primary" style={{ display: 'inline-flex', padding: '10px 20px', fontSize: '14px', borderRadius: '8px', cursor: 'pointer' }}>
            Restablecer todos los filtros
          </button>
        </div>
      )}
    </div>
  );
};
