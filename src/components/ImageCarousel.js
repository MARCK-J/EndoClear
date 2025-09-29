import React, { useState } from 'react';
import corneaSurgeryImage from '../assets/dmek-screenshot-300x169.jpg';

const images = [
  corneaSurgeryImage,
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1511174511562-5f97f4f4eab6?auto=format&fit=crop&w=400&q=80'
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div style={{ position: 'relative', maxWidth: 400, margin: '0 auto' }}>
      <img
        src={images[index]}
        alt={`slide-${index}`}
        style={{
          borderRadius: 8,
          maxWidth: '100%',
          boxShadow: '0 2px 8px rgba(0,194,168,0.12)',
          transition: 'opacity 0.5s'
        }}
      />
      <button
        onClick={prev}
        style={{
          position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
          background: 'var(--blue-light)', color: 'var(--white)', border: 'none', borderRadius: '50%',
          width: 32, height: 32, cursor: 'pointer', fontWeight: 700
        }}
        aria-label="Anterior"
      >‹</button>
      <button
        onClick={next}
        style={{
          position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
          background: 'var(--blue-light)', color: 'var(--white)', border: 'none', borderRadius: '50%',
          width: 32, height: 32, cursor: 'pointer', fontWeight: 700
        }}
        aria-label="Siguiente"
      >›</button>
    </div>
  );
}