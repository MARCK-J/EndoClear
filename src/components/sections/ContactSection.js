import React from 'react';
import Button from '../UI/Button';

export default function ContactSection() {
  return (
    <section id="contacto" style={{ 
      textAlign: 'center', 
      padding: '4rem 2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{ color: 'var(--blue-deep)', marginBottom: '2rem' }}>
        ¿Listo para el Futuro de la Medicina Ocular?
      </h2>
      <p style={{ color: 'var(--blue-light)', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Descubre cómo EndoClear está transformando la vida de pacientes en todo el mundo.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          variant="primary"
          size="large"
          className="cta-animated"
          style={{
            boxShadow: '0 6px 20px rgba(0,194,168,0.3)'
          }}
        >
          Contactar Especialista
        </Button>
        <Button variant="outline" size="large">
          Descargar Brochure
        </Button>
      </div>
    </section>
  );
}