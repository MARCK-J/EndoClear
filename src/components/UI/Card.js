import React from 'react';

export default function Card({ children, className = '', style = {}, hover = false }) {
  const cardStyles = {
    background: 'var(--white)',
    borderRadius: '15px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: hover ? 'transform 0.3s ease' : 'none',
    cursor: hover ? 'pointer' : 'default',
    ...style
  };

  const handleMouseEnter = (e) => {
    if (hover) {
      e.currentTarget.style.transform = 'translateY(-10px)';
    }
  };

  const handleMouseLeave = (e) => {
    if (hover) {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  };

  return (
    <div
      style={cardStyles}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}