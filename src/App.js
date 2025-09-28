import './App.css';
import './theme.css';
import useScrollFadeIn from './useScrollFadeIn';
import ImageCarousel from './ImageCarousel';

function App() {
  const fade1 = useScrollFadeIn();
  const fade2 = useScrollFadeIn();

  return (
    <div>
      <header style={{
        background: 'var(--blue-light)',
        color: 'var(--white)',
        padding: '1.5rem 0',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <h1 style={{ margin: 0, fontWeight: 700, letterSpacing: 2 }}>EndoClear</h1>
        <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 400 }}>
          Innovación en regeneración corneal
        </p>
      </header>

      <main style={{ maxWidth: 900, margin: '2rem auto', background: 'var(--white)', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.04)', padding: '2rem' }}>
        <section ref={fade1} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--blue-deep)' }}>Andamio de Endotelio para Córneas</h2>
          <p style={{ color: 'var(--turquoise)', fontSize: '1.1rem', marginBottom: 24 }}>
            Una alternativa avanzada y segura para reemplazar trasplantes de córnea.
          </p>
          <ImageCarousel />
        </section>

        <section ref={fade2} style={{ background: 'var(--blue-deep)', color: 'var(--white)', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
          <h3>¿Por qué EndoClear?</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 12 }}>
              <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>Innovación:</span> Tecnología regenerativa de última generación.
            </li>
            <li style={{ marginBottom: 12 }}>
              <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>Seguridad:</span> Reduce riesgos asociados a trasplantes tradicionales.
            </li>
            <li>
              <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>Resultados:</span> Mejora la visión y calidad de vida.
            </li>
          </ul>
        </section>

        <section style={{ textAlign: 'center' }}>
          <button
            style={{
              background: 'var(--turquoise)',
              color: 'var(--white)',
              border: 'none',
              borderRadius: 6,
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.background = 'var(--gold-light)'}
            onMouseOut={e => e.currentTarget.style.background = 'var(--turquoise)'}
          >
            Más información
          </button>
        </section>

        <section style={{ textAlign: 'center' }}>
          <button
            className="cta-animated"
            style={{
              background: 'var(--turquoise)',
              color: 'var(--white)',
              border: 'none',
              borderRadius: 6,
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.background = 'var(--gold-light)'}
            onMouseOut={e => e.currentTarget.style.background = 'var(--turquoise)'}
          >
            Más información
          </button>
        </section>
        
      </main>
      <footer style={{ textAlign: 'center', color: 'var(--blue-deep)', padding: '1rem 0', fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} EndoClear. Innovación en salud ocular.
      </footer>
    </div>
  );
}

export default App;