import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  className = '',
  ...props 
}) {
  const baseStyles = {
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease'
  };

  const variants = {
    primary: {
      background: 'var(--turquoise)',
      color: 'var(--white)'
    },
    secondary: {
      background: 'var(--gold-light)',
      color: 'var(--blue-deep)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--turquoise)',
      border: '2px solid var(--turquoise)'
    }
  };

  const sizes = {
    small: { padding: '0.5rem 1.5rem', fontSize: '0.9rem' },
    medium: { padding: '1rem 2.5rem', fontSize: '1.1rem' },
    large: { padding: '1.25rem 3rem', fontSize: '1.2rem' }
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...variants[variant],
        ...sizes[size]
      }}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}