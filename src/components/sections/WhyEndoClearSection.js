import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

export default function WhyEndoClearSection() {
  const fadeRef = useScrollFadeIn();

  const benefits = [
    { icon: '🚀', title: 'Innovación', desc: 'Tecnología regenerativa de última generación' },
    { icon: '🛡️', title: 'Seguridad', desc: 'Reduce riesgos de rechazo y complicaciones' },
    { icon: '⚡', title: 'Eficacia', desc: 'Resultados superiores en regeneración corneal' },
    { icon: '💎', title: 'Calidad', desc: 'Mejora significativa en la visión y calidad de vida' }
  ];

  return (
    <section ref={fadeRef} style={{
      background: 'linear-gradient(135deg, var(--blue-deep) 0%, var(--turquoise) 100%)',
      color: 'var(--white)',
      borderRadius: '20px',
      padding: '3rem',
      margin: '4rem 2rem',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
        ¿Por qué Elegir EndoClear?
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {benefits.map((item, index) => (
          <div key={index} style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '15px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
            <h4 style={{ color: 'var(--gold-light)', fontWeight: 700, marginBottom: '1rem' }}>
              {item.title}
            </h4>
            <p style={{ margin: 0, opacity: 0.9 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}