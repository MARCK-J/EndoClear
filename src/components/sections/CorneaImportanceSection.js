import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

export default function CorneaImportanceSection() {
  const fadeRef = useScrollFadeIn();

  const importancePoints = [
    'Es la "ventana" del ojo que permite el paso de la luz',
    'Responsable del 65% de la capacidad refractiva del ojo',
    'Su transparencia es esencial para una visión clara',
    'Las enfermedades corneales afectan a millones de personas',
    'Los trasplantes tradicionales tienen limitaciones significativas'
  ];

  return (
    <section id="importancia-cornea" ref={fadeRef} style={{
      background: 'var(--gray-soft)',
      padding: '4rem 2rem',
      margin: '4rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: 'var(--blue-deep)', 
          fontSize: '2.5rem',
          marginBottom: '3rem'
        }}>
          ¿Por qué la Córnea es tan Importante?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {importancePoints.map((item, index) => (
                <li key={index} style={{
                  marginBottom: '1rem',
                  padding: '1rem',
                  background: 'var(--white)',
                  borderRadius: '10px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  borderLeft: '4px solid var(--turquoise)'
                }}>
                  <span style={{ color: 'var(--turquoise)', fontWeight: 'bold', marginRight: '0.5rem' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, var(--turquoise), var(--blue-light))',
              margin: '0 auto 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>👁️</div>
            <h3 style={{ color: 'var(--blue-deep)', marginBottom: '1rem' }}>
              Visión Clara
            </h3>
            <p style={{ color: 'var(--blue-light)' }}>
              Una córnea sana es fundamental para mantener una visión perfecta y una calidad de vida óptima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}