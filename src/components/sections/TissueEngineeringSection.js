import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

export default function TissueEngineeringSection() {
  const fadeRef = useScrollFadeIn();

  const features = [
    {
      title: 'Biomateriales',
      description: 'Materiales biocompatibles que sirven como andamios para el crecimiento celular',
      icon: '🧬'
    },
    {
      title: 'Células Madre',
      description: 'Células con capacidad de diferenciarse en tejido corneal especializado',
      icon: '🔬'
    },
    {
      title: 'Señales Biológicas',
      description: 'Factores de crecimiento que guían la regeneración del tejido',
      icon: '⚡'
    },
    {
      title: 'Bioingeniería',
      description: 'Técnicas avanzadas para crear tejidos funcionales en laboratorio',
      icon: '⚙️'
    }
  ];

  return (
    <section id="ingenieria-tejidos" ref={fadeRef} style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: 'var(--blue-deep)', 
        fontSize: '2.5rem',
        marginBottom: '2rem'
      }}>
        ¿Qué es la Ingeniería de Tejidos?
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {features.map((item, index) => (
          <div key={index} style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
            <h3 style={{ color: 'var(--blue-deep)', marginBottom: '1rem' }}>{item.title}</h3>
            <p style={{ color: 'var(--blue-light)' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}