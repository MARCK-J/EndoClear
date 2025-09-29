import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import ImageCarousel from '../ImageCarousel';

export default function EndoClearSection() {
  const fadeRef = useScrollFadeIn();

  return (
    <section id="que-es-endoclear" ref={fadeRef} style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        color: 'var(--blue-deep)', 
        fontSize: '2.5rem',
        marginBottom: '1rem'
      }}>¿Qué es EndoClear?</h2>
      <p style={{ 
        color: 'var(--turquoise)', 
        fontSize: '1.2rem', 
        marginBottom: '3rem',
        maxWidth: '800px',
        margin: '0 auto 3rem'
      }}>
        Un andamio biocompatible de última generación que representa una alternativa revolucionaria 
        a los trasplantes de córnea tradicionales.
      </p>
      <ImageCarousel />
    </section>
  );
}