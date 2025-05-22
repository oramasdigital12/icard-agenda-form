import { useState, useEffect } from 'react'
import logoImage from './img/logo.jpg'
import cursoOfficeImage from './img/CURSO-BASICO-OFFICEE.png'
import cursoCanvaImage from './img/CURSO-CANVA-AGUADILLA.png'
import banner1 from './img/banner1.jpg'
import banner2 from './img/banner2.jpg'
import banner3 from './img/banner3.jpg'
import IGLogo from './img/IG.png'
import FBLogo from './img/FB.png'
import WALogo from './img/WA.png'

const professionalInfo = {
  name: 'Tu Guía Digital',
  title: 'Especialistas en talleres de tecnología',
  description: 'Más de 3 años de experiencia en cursos y talleres sabatinos en tecnología.',
  location: {
    text: 'San Juan, PR',
    maps: 'https://maps.app.goo.gl/RdWtajo13S1nbTvs6'
  },
  email: 'tuguiadigital12@gmail.com',
  phone: '9392283101',
  whatsapp: '9392283101',
  services: [
    {
      id: 1,
      title: 'Microsoft Office',
      image: cursoOfficeImage,
      images: [cursoOfficeImage, banner1, banner2],
      whatsappMessage: 'Hola, me interesa el curso de Microsoft Office. ¿Me pueden brindar más información?',
      priceOriginal: 250,
      priceDiscount: 100
    },
    {
      id: 2,
      title: 'Canva',
      image: cursoCanvaImage,
      images: [cursoCanvaImage, banner1, banner2],
      whatsappMessage: 'Hola, me interesa el curso de Canva. ¿Me pueden brindar más información?',
      priceOriginal: 270,
      priceDiscount: 125
    }
  ],
  feedbacks: [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    }
  ]
}

function App() {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<null | {
    title: string;
    image: string;
    images: string[];
    whatsappMessage: string;
    priceOriginal: number;
    priceDiscount: number;
  }>(null);

  // Imágenes del modal: usa las del servicio seleccionado
  const modalImages = selectedCourse ? selectedCourse.images : [];
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedback((prev) => 
        prev === professionalInfo.feedbacks.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    setModalImageIndex(0);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleServiceClick = (service: typeof professionalInfo.services[0]) => {
    setSelectedCourse(service);
  };

  const handleWhatsApp = (message?: string) => {
    const defaultMessage = `Hola, me gustaría obtener más información sobre sus cursos.`;
    window.open(
      `https://wa.me/${professionalInfo.whatsapp}?text=${encodeURIComponent(message || defaultMessage)}`,
      '_blank'
    );
  };

  return (
    <>
    {/*Tamaño sugerido de la imagen:
    430 x 200 px (o cualquier múltiplo, por ejemplo 860 x 400 px, 1290 x 600 px, etc.)*/}

      <div className="container">
        <div className="card">
          {/* Feedback Slideshow at the top */}
          <div className="feedback-section-top">
            <div className="feedback-slideshow">
              {professionalInfo.feedbacks.map((feedback, index) => (
                <div
                  key={feedback.id}
                  className={`feedback-slide ${index === currentFeedback ? 'active' : ''}`}
                >
                  <img src={feedback.image} alt={`Feedback ${feedback.id}`} className="banner-image" />
                </div>
              ))}
            </div>
          </div>

          {/* Card Header with Logo */}
          <div className="card-header">
            <div className="header-main">
              <div className="avatar">
                <img 
                  src={logoImage}
                  alt={professionalInfo.name}
                  className="avatar-image"
                />
              </div>
            </div>
            <div className="header-content">
              <h1 className="title">{professionalInfo.name}</h1>
              <h2 className="subtitle">{professionalInfo.title}</h2>
              <p className="description">{professionalInfo.description}</p>
            </div>
          </div>

          {/* Contact Info (ahora redes sociales + botón agendar) */}
          <div className="contact-info" style={{ flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <button
              style={{
                background: 'linear-gradient(90deg, #00B4DB 0%, #0083B0 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 2.5rem',
                fontWeight: 600,
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                cursor: 'pointer',
              }}
              // Opción 1: WhatsApp
              onClick={() => handleWhatsApp('Hola, quiero agendar una cita.')}
              // Opción 2: Link externo (descomenta la siguiente línea y comenta la de arriba para usar un link)
              // onClick={() => window.open('https://tulink.com', '_blank')}
            >
              Agendar
            </button>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="https://www.instagram.com/tuguiadigitalpr?igsh=bm01dnV6YjBjNm1m&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', borderRadius: '50%', width: 48, height: 48, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', overflow: 'hidden' }}>
                <img src={IGLogo} alt="Instagram" style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: '50%' }} />
              </a>
              <a href="https://www.facebook.com/share/19bPEYkBvX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', borderRadius: '50%', width: 48, height: 48, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', overflow: 'hidden' }}>
                <img src={FBLogo} alt="Facebook" style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: '50%' }} />
              </a>
              <a
                href="#"
                onClick={e => { e.preventDefault(); handleWhatsApp(); }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', borderRadius: '50%', width: 48, height: 48, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', overflow: 'hidden' }}
              >
                <img src={WALogo} alt="WhatsApp" style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: '50%' }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="services-section">
            <h3 className="section-title">Cursos Presenciales</h3>
            <div className="services-grid">
              {professionalInfo.services.map((service) => (
                <div
                  key={service.id}
                  className="service-card"
                  onClick={() => handleServiceClick(service)}
                  style={{ position: 'relative' }}
                >
                  {/* Badge de precio: label flotante en la esquina superior derecha */}
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}>
                    <span style={{
                      background: 'rgba(255,255,255,0.95)',
                      color: '#d32f2f',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      borderRadius: '8px',
                      padding: '0.2rem 0.7rem',
                      textDecoration: 'line-through',
                      marginBottom: 2,
                      marginRight: 0,
                      opacity: 0.8,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                    }}>
                      ${service.priceOriginal}
                    </span>
                    <span style={{
                      background: 'linear-gradient(90deg, #00B4DB 0%, #0083B0 100%)',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      borderRadius: '8px',
                      padding: '0.2rem 0.7rem',
                      marginTop: 2,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                    }}>
                      ${service.priceDiscount}
                    </span>
                  </div>
                  <img src={service.image} alt={service.title} />
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Fixed Bottom WhatsApp Button (comentado para uso futuro) */}
          {false && (
          <button 
            className="whatsapp-button-fixed"
            onClick={() => handleWhatsApp()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
            <span>Consultar</span>
          </button>
          )}

          {/* Course Modal */}
          {selectedCourse && (
            <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
              <div className="modal-content" onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedCourse(null)}
                >
                  ×
                </button>
                {/* Slideshow de imágenes con flechas modernas y foto grande */}
                <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem', minHeight: 340 }}>
                  <button
                    onClick={() => setModalImageIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1))}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(30,30,40,0.55)',
                      border: 'none',
                      borderRadius: '50%',
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 2,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                      transition: 'background 0.2s',
                    }}
                    aria-label="Anterior"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><polygon points="15,6 9,12 15,18" fill="#fff"/></svg>
                  </button>
                  <img 
                    src={modalImages[modalImageIndex]} 
                    alt={selectedCourse.title}
                    className="modal-image"
                    style={{ maxHeight: 340, maxWidth: '95%', width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}
                  />
                  <button
                    onClick={() => setModalImageIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1))}
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(30,30,40,0.55)',
                      border: 'none',
                      borderRadius: '50%',
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 2,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                      transition: 'background 0.2s',
                    }}
                    aria-label="Siguiente"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><polygon points="9,6 15,12 9,18" fill="#fff"/></svg>
                  </button>
                </div>
                {/* Badge de precio centrado debajo de la imagen */}
                <div style={{
                  width: '100%',
                 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                
                  
                }}>
                  <span style={{
                    background: 'rgba(255,255,255,0.95)',
                    color: '#d32f2f',
                    fontWeight: 700,
                    fontSize: '1.00rem',
                    borderRadius: '8px',
                    padding: '0.2rem 1.1rem',
                    textDecoration: 'line-through',
                    opacity: 0.9,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    marginBottom: 2
                  }}>
                    ${selectedCourse.priceOriginal}
                  </span>
                  <span style={{
                    background: 'linear-gradient(90deg, #00B4DB 0%, #0083B0 100%)',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.35rem',
                    borderRadius: '8px',
                    padding: '0.2rem 1.1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                  }}>
                    ${selectedCourse.priceDiscount}
                  </span>
                </div>
                <div className="modal-footer">
                  <button 
                    className="whatsapp-button"
                    onClick={() => handleWhatsApp(selectedCourse.whatsappMessage)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                    </svg>
                    <span>Hablemos!</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Contact Bar: estilo dock iPhone, fija en móvil y dentro del frame en desktop */}
        <div
          className="footer-contact-bar"
          style={{
            position: window.innerWidth > 768 ? 'absolute' : 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 380,
            maxWidth: '90vw',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: 'rgba(12, 12, 15, 0.55)',
            backdropFilter: 'blur(16px)',
            padding: '0.7rem 1.2rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            zIndex: 999,
            borderRadius: 32,
            border: '1.5px solid rgba(255,255,255,0.10)',
          }}
        >
          <a href={professionalInfo.location.maps} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.18)', borderRadius: '50%', width: 56, height: 56, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', margin: '0 8px' }}>
            <svg width="32" height="32" fill="#00B4DB" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </a>
          <a href={`mailto:${professionalInfo.email}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.18)', borderRadius: '50%', width: 56, height: 56, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', margin: '0 8px' }}>
            <svg width="32" height="32" fill="#fff" viewBox="0 0 24 24"><path d="M12 13.065l-8-5.065v10h16v-10l-8 5.065zm8-7.065v-.001l-8 5.066-8-5.066v-.001h16zm-16-2c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-16c0-1.104-.896-2-2-2h-16z"/></svg>
          </a>
          <a href={`tel:${professionalInfo.phone}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.18)', borderRadius: '50%', width: 56, height: 56, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', margin: '0 8px' }}>
            <svg width="32" height="32" fill="#25D366" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.59.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.2 2.47.57 3.59.09.27.03.57-.24 1.01l-2.21 2.19z"/></svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default App
