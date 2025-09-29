import React from 'react';
import endoClearLogo from '../../assets/EndoClear Logo.png';

export default function HeroSection() {
  return (
    <section id="inicio" style={{
      background: 'linear-gradient(135deg, var(--blue-light) 0%, var(--turquoise) 100%)',
      color: 'var(--white)',
      padding: '120px 0 80px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <img 
            src={endoClearLogo} 
            alt="EndoClear Logo" 
            style={{
              height: '300px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
            }}
          />
        </div>
        <h1 style={{ 
          margin: 0, 
          fontWeight: 800, 
          letterSpacing: '2px', 
          fontSize: '3.5rem',
          textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          marginBottom: '1rem'
        }}></h1>
        <p style={{ 
          margin: 0, 
          fontSize: '1.5rem', 
          fontWeight: 300,
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Revolución en regeneración corneal
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: 'var(--gold-light)',
            color: 'var(--blue-deep)',
            border: 'none',
            borderRadius: '50px',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Descubre Más
          </button>
          <button style={{
            background: 'transparent',
            color: 'var(--white)',
            border: '2px solid var(--white)',
            borderRadius: '50px',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Ver Video
          </button>
        </div>
      </div>
    </section>
  );
}