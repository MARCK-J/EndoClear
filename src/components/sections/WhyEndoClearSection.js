import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import marcoImage from '../../assets/Team/Marco.png';
import araImage from '../../assets/Team/Ara.jpg';
import joseImage from '../../assets/Team/Jose.jpg';
import dianaImage from '../../assets/Team/Diana.png';
import andreaImage from '../../assets/Team/Andrea.jpg';
import mariaImage from '../../assets/Team/Maria.jpg';

export default function WhyEndoClearSection() {
  const fadeRef = useScrollFadeIn();

  const benefits = [
    { icon: '🚀', title: 'Innovación', desc: 'Tecnología regenerativa de última generación' },
    { icon: '🛡️', title: 'Seguridad', desc: 'Reduce riesgos de rechazo y complicaciones' },
    { icon: '⚡', title: 'Eficacia', desc: 'Resultados superiores en regeneración corneal' },
    { icon: '💎', title: 'Calidad', desc: 'Mejora significativa en la visión y calidad de vida' }
  ];

  return (
    <section ref={fadeRef} style={{
      background: 'linear-gradient(135deg, var(--blue-deep) 0%, var(--turquoise) 100%)',
      color: 'var(--white)',
      borderRadius: '20px',
      padding: '3rem',
      margin: '4rem 2rem',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
        ¿Por qué Elegir EndoClear?
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {benefits.map((item, index) => (
          <div key={index} style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '15px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
            <h4 style={{ color: 'var(--gold-light)', fontWeight: 700, marginBottom: '1rem' }}>
              {item.title}
            </h4>
            <p style={{ margin: 0, opacity: 0.9 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Sección del Equipo */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '20px',
        padding: '3rem',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h3 style={{ 
          textAlign: 'center', 
          fontSize: '2rem', 
          marginBottom: '1rem',
          color: 'var(--gold-light)'
        }}>
          Nuestro Equipo Especializado
        </h3>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.1rem', 
          opacity: 0.9,
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          Profesionales expertos comprometidos con la innovación en medicina regenerativa
        </p>

        {/* CEO Destacada */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '25px',
            padding: '2.5rem',
            textAlign: 'center',
            width: '300px',
            backdropFilter: 'blur(15px)',
            border: '2px solid var(--gold-light)',
            boxShadow: '0 20px 40px rgba(245,192,78,0.2)'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              margin: '0 auto 1.5rem',
              overflow: 'hidden',
              border: '4px solid var(--gold-light)',
              boxShadow: '0 10px 25px rgba(245,192,78,0.4)'
            }}>
              <img 
                src={mariaImage} 
                alt="María Dolores Montalvo Parra" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h4 style={{ 
              color: 'var(--gold-light)', 
              margin: '0 0 0.5rem 0',
              fontSize: '1.4rem',
              fontWeight: 'bold'
            }}>
              María Dolores Montalvo Parra
            </h4>
            <p style={{ 
              color: 'white', 
              margin: '0 0 1rem 0',
              fontSize: '1.1rem',
              fontWeight: '700',
              background: 'linear-gradient(45deg, var(--gold-light), #f39c12)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              CEO & Fundadora
            </p>
            <p style={{ 
              margin: 0, 
              fontSize: '0.9rem', 
              opacity: 0.9,
              lineHeight: '1.4'
            }}>
              Biotecnóloga
            </p>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          alignItems: 'flex-start'
        }}>
          {/* Marco Reynolds - CTO */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'center',
            width: '180px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              overflow: 'hidden',
              border: '3px solid var(--blue-light)',
              boxShadow: '0 6px 15px rgba(77,166,255,0.3)'
            }}>
              <img 
                src={marcoImage} 
                alt="Marco Reynolds" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h4 style={{ 
              color: 'var(--gold-light)', 
              margin: '0 0 0.3rem 0',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              Marco Reynolds
            </h4>
            <p style={{ 
              color: 'white', 
              margin: '0 0 0.5rem 0',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              CTO
            </p>
            <p style={{ 
              margin: 0, 
              fontSize: '0.75rem', 
              opacity: 0.8,
              lineHeight: '1.3'
            }}>
              Ingeniero en Sistemas
            </p>
          </div>

          {/* Aracely Ariñez - Especialista de Tejidos */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'center',
            width: '180px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              overflow: 'hidden',
              border: '3px solid var(--turquoise)',
              boxShadow: '0 6px 15px rgba(0,194,168,0.3)'
            }}>
              <img 
                src={araImage} 
                alt="Aracely Ariñez" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h4 style={{ 
              color: 'var(--gold-light)', 
              margin: '0 0 0.3rem 0',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              Aracely Ariñez
            </h4>
            <p style={{ 
              color: 'white', 
              margin: '0 0 0.5rem 0',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              Especialista de Tejidos
            </p>
            <p style={{ 
              margin: 0, 
              fontSize: '0.75rem', 
              opacity: 0.8,
              lineHeight: '1.3'
            }}>
              Ingeniera Biomédica
            </p>
          </div>

          {/* José Luis Dorado - Gerente de Desarrollo */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'center',
            width: '180px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              overflow: 'hidden',
              border: '3px solid #9c27b0',
              boxShadow: '0 6px 15px rgba(156,39,176,0.3)'
            }}>
              <img 
                src={joseImage} 
                alt="José Luis Dorado" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h4 style={{ 
              color: 'var(--gold-light)', 
              margin: '0 0 0.3rem 0',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              José Luis Dorado
            </h4>
            <p style={{ 
              color: 'white', 
              margin: '0 0 0.5rem 0',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              Gerente de Desarrollo
            </p>
            <p style={{ 
              margin: 0, 
              fontSize: '0.75rem', 
              opacity: 0.8,
              lineHeight: '1.3'
            }}>
              Administrador de Empresas
            </p>
          </div>

          {/* Diana Flores - Supervisora Química */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'center',
            width: '180px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              overflow: 'hidden',
              border: '3px solid #ff5722',
              boxShadow: '0 6px 15px rgba(255,87,34,0.3)'
            }}>
              <img 
                src={dianaImage} 
                alt="Diana Flores" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h4 style={{ 
              color: 'var(--gold-light)', 
              margin: '0 0 0.3rem 0',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              Diana Flores
            </h4>
            <p style={{ 
              color: 'white', 
              margin: '0 0 0.5rem 0',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              Supervisora Química
            </p>
            <p style={{ 
              margin: 0, 
              fontSize: '0.75rem', 
              opacity: 0.8,
              lineHeight: '1.3'
            }}>
              Ingeniera Bioquímica
            </p>
          </div>

          {/* Andrea Guaribana - Gerente Bioquímica */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'center',
            width: '180px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              overflow: 'hidden',
              border: '3px solid #e91e63',
              boxShadow: '0 6px 15px rgba(233,30,99,0.3)'
            }}>
              <img 
                src={andreaImage} 
                alt="Andrea Guaribana" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h4 style={{ 
              color: 'var(--gold-light)', 
              margin: '0 0 0.3rem 0',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              Andrea Guaribana
            </h4>
            <p style={{ 
              color: 'white', 
              margin: '0 0 0.5rem 0',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              Gerente Bioquímica
            </p>
            <p style={{ 
              margin: 0, 
              fontSize: '0.75rem', 
              opacity: 0.8,
              lineHeight: '1.3'
            }}>
              Ingeniera Bioquímica
            </p>
          </div>
        </div>

        {/* Mensaje del equipo */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '2rem',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '15px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h4 style={{ 
            color: 'var(--gold-light)', 
            marginBottom: '1rem',
            fontSize: '1.3rem'
          }}>
            💡 Unidos por la Innovación
          </h4>
          <p style={{ 
            margin: 0, 
            fontSize: '1rem', 
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Nuestro equipo multidisciplinario combina décadas de experiencia en biotecnología, 
            medicina y gestión para hacer realidad el futuro de la regeneración corneal.
          </p>
        </div>
      </div>
    </section>
  );
}