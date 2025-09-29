import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

export default function AboutSection() {
  const fadeRef = useScrollFadeIn();

  return (
    <section id="quienes-somos" ref={fadeRef} style={{
      background: 'linear-gradient(45deg, var(--blue-deep), var(--blue-light))',
      color: 'var(--white)',
      padding: '4rem 2rem',
      margin: '4rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
          Quiénes Somos
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ color: 'var(--gold-light)', marginBottom: '1rem' }}>Nuestra Misión</h3>
            <p>Revolucionar la medicina regenerativa ocular mediante tecnologías innovadoras que mejoren la calidad de vida de pacientes con enfermedades corneales.</p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ color: 'var(--gold-light)', marginBottom: '1rem' }}>Nuestra Visión</h3>
            <p>Ser líderes mundiales en ingeniería de tejidos corneales, eliminando las listas de espera para trasplantes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}