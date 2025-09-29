import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import ImageCarousel from '../ImageCarousel';

export default function EndoClearSection() {
  const fadeRef = useScrollFadeIn();

  return (
    <section id="que-es-endoclear" ref={fadeRef} style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        color: 'var(--blue-deep)', 
        fontSize: '2.5rem',
        marginBottom: '1rem'
      }}>¿Qué es EndoClear?</h2>
      <p style={{ 
        color: 'var(--turquoise)', 
        fontSize: '1.2rem', 
        marginBottom: '3rem',
        maxWidth: '800px',
        margin: '0 auto 3rem'
      }}>
        Un andamio biocompatible de última generación que representa una alternativa revolucionaria 
        a los trasplantes de córnea tradicionales.
      </p>

      {/* Soluciones que ofrecemos */}
      <div style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderRadius: '20px',
        padding: '3rem',
        margin: '3rem 0',
        textAlign: 'left'
      }}>
        <h3 style={{
          color: 'var(--blue-deep)',
          fontSize: '2rem',
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          Las Soluciones Innovadoras de EndoClear
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Solución a Escasez */}
          <div style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            borderLeft: '5px solid var(--turquoise)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{
                background: 'var(--turquoise)',
                color: 'white',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '1rem'
              }}>✓</span>
              <h4 style={{
                color: 'var(--turquoise)',
                margin: 0,
                fontSize: '1.3rem',
                fontWeight: 'bold'
              }}>Disponibilidad Ilimitada</h4>
            </div>
            <p style={{
              color: 'var(--blue-deep)',
              lineHeight: '1.6',
              margin: 0
            }}>
              <strong style={{ color: 'var(--turquoise)' }}>EndoClear elimina la dependencia de donaciones </strong> 
              ofreciendo una solución manufacturada a demanda. Donde antes había escasez crítica 
              (70 córneas necesarias por cada 1 disponible), ahora garantizamos disponibilidad inmediata.
            </p>
          </div>

          {/* Solución a Complicaciones */}
          <div style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            borderLeft: '5px solid var(--blue-light)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{
                background: 'var(--blue-light)',
                color: 'white',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '1rem'
              }}>✓</span>
              <h4 style={{
                color: 'var(--blue-light)',
                margin: 0,
                fontSize: '1.3rem',
                fontWeight: 'bold'
              }}>Mayor Tasa de Éxito</h4>
            </div>
            <p style={{
              color: 'var(--blue-deep)',
              lineHeight: '1.6',
              margin: 0
            }}>
              <strong style={{ color: 'var(--blue-light)' }}>Reducimos drásticamente las complicaciones </strong> 
              gracias a nuestro diseño biocompatible avanzado. Minimizamos el riesgo de dislocación del injerto 
              y eliminamos la necesidad de retrasplantes.
            </p>
          </div>
        </div>

        {/* Beneficios */}
        <div style={{
          background: 'linear-gradient(135deg, var(--turquoise), var(--blue-light))',
          color: 'white',
          padding: '2.5rem',
          borderRadius: '15px',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h4 style={{
            margin: '0 0 1rem 0',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            🎯 Impacto Transformador
          </h4>
          <p style={{
            margin: 0,
            fontSize: '1.2rem',
            fontWeight: '500',
            lineHeight: '1.6'
          }}>
            EndoClear optimiza tiempo y recursos valiosos, convirtiendo procedimientos complejos 
            en soluciones eficientes y confiables para la regeneración corneal.
          </p>
        </div>

        {/* Compromiso */}
        <div style={{
          background: 'linear-gradient(45deg, var(--gold-light), #f39c12)',
          color: 'white',
          padding: '2rem',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
            ✨ Nuestro Compromiso
          </h4>
          <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>
            Transformar la medicina regenerativa ocular, brindando esperanza y soluciones 
            sostenibles a pacientes que necesitan recuperar su visión.
          </p>
        </div>
      </div>

      <ImageCarousel />
    </section>
  );
}