import React, { useState, useEffect, useRef } from 'react';
import '../css/MainScreen.css'
import heroImage from '../assets/hero.jpg'

function MainScreen() {
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jpedrooliveiragritz@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach(ref => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            ref.classList.add('fade-in');
          } else {
            ref.classList.remove('fade-in');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {loading && (
        <div className={`loader-screen${loading ? '' : ' hide'}`}>
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="Main">
          <header className="header">
            <nav>
              <ul>
                <li className='logofont'>JPOGO</li>
                <li><a href="#techs">Conhecimentos</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#footer">Contato</a></li>
              </ul>
            </nav>
            <nav>
              <ul className='social-links'>
                <li>
                  <a href="https://github.com/Splashyy7" target="_blank" rel="noopener noreferrer" className="external-link">
                    GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{ marginLeft: '6px', verticalAlign: 'text-bottom', marginTop: '-2px', transition: 'stroke 0.2s' }}
                      className="external-link-icon"
                    >
                      <path d="M14 3h3v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 10l7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 10v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <div className="hero">
            <img src={heroImage} alt="Imagem de destaque" className="hero-image" />
            <section className="about-me">
                <h1>Estudante de Engenharia de Software,<br />Desenvolvedor Front-End</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis mollitia eaque voluptatum debitis fugit porro recusandae iste, blanditiis incidunt, magni dignissimos dolore. Praesentium ab magni deserunt totam incidunt. Ipsum!</p>
              </section>
            </div>
            <div className="section-container">
            <section
                id="techs"
                ref={el => sectionRefs.current[0] = el}
                className="fade-section"
              >
              <h2>Linguagens e Tecnologias</h2>
              <ul className="tech-list">
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> JavaScript
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> React
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /> HTML5
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /> CSS3
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /> Java
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" /> Spring Boot
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" /> C#
                </li>
              </ul>
            </section>
              <section
                className="about-me-section"
                ref={el => sectionRefs.current[1] = el}
              >
              <h2>Sobre mim</h2>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '24px 0' }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ verticalAlign: 'middle' }}>
          <path d="M7 15l5-5-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Curso Engenharia de Software no Instituto Infnet desde Janeiro de 2024.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '24px 0' }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ verticalAlign: 'middle' }}>
          <path d="M7 15l5-5-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Fluência em Inglês
      </p>
              </section>
              <section
                id="projetos"
                ref={el => sectionRefs.current[2] = el}
                className="fade-section"
              >
              <h2>Projetos</h2>
              <p>Aqui você pode ver um pouco das minhas habilidades com projetos que fiz no passado:</p>
            </section>
            </div>
          </main>
          <footer id='footer' className="footer">
            <p>&copy; {new Date().getFullYear()} João Pedro Oliveira Gritz de Oliveira</p>
            <p
              className="email-copy"
              style={{ cursor: 'pointer', position: 'relative' }}
              onClick={handleCopyEmail}
              title="Clique para copiar"
            >
              Contato: jpedrooliveiragritz@gmail.com
              {copied && (
                <span className="copy-feedback" style={{
                  marginLeft: 10,
                  color: '#4caf50',
                  fontWeight: 'bold',
                  fontSize: '0.95em',
                  transition: 'opacity 0.3s'
                }}>
                  Copiado!
                </span>
              )}
            </p>
          </footer>
        </div>
      )}
    </>
  )
}

export default MainScreen
