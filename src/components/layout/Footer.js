import React from 'react';
import endoClearLogo from '../../assets/EndoClear Logo.png';

export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--blue-deep)',
      color: 'var(--white)',
      textAlign: 'center', 
      padding: '3rem 2rem 2rem',
      marginTop: '4rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <img 
            src={endoClearLogo} 
            alt="EndoClear Logo" 
            style={{
              height: '60px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)' // Hace el logo blanco
            }}
          />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h4 style={{ color: 'var(--gold-light)' }}>Contacto</h4>
            <p>info@endoclear.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--gold-light)' }}>Síguenos</h4>
            <p>LinkedIn | Twitter | Facebook</p>
          </div>
        </div>
        <hr style={{ border: '1px solid rgba(255,255,255,0.2)', margin: '2rem 0' }} />
        <p style={{ margin: 0, opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} EndoClear. Innovación en salud ocular.
        </p>
      </div>
    </footer>
  );
}