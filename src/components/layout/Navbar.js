import React, { useState } from 'react';
import endoClearLogo from '../../assets/EndoClear Logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Ingeniería de Tejidos', href: '#ingenieria-tejidos' },
    { label: 'Importancia de la Córnea', href: '#importancia-cornea' },
    { label: 'Qué es EndoClear', href: '#que-es-endoclear' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'linear-gradient(135deg, var(--blue-deep) 0%, var(--blue-light) 100%)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src={endoClearLogo} 
            alt="EndoClear Logo" 
            style={{
              height: '50px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Desktop Menu */}
        <ul style={{
          display: window.innerWidth > 768 ? 'flex' : 'none',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '2rem',
          alignItems: 'center'
        }}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                style={{
                  color: 'var(--white)',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'var(--white)',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'var(--blue-deep)',
          padding: '1rem 2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={{
                display: 'block',
                color: 'var(--white)',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}