import { useState, useEffect } from 'react'
import logoImage from './img/logo.jpg'
import cursoOfficeImage from './img/CURSO-BASICO-OFFICEE.png'
import cursoCanvaImage from './img/CURSO-CANVA-AGUADILLA.png'

const professionalInfo = {
  name: 'Tu Guía Digital',
  title: 'Especialistas en talleres de tecnología',
  description: 'Más de 3 años de experiencia en cursos y talleres sabatinos en tecnología.',
  location: {
    text: 'Hatillo, PR',
    maps: '#'
  },
  email: 'tuguiadigital12@gmail.com',
  phone: '9392283101',
  whatsapp: '9392283101',
  services: [
    {
      id: 1,
      title: 'Microsoft Office',
      image: cursoOfficeImage,
      whatsappMessage: 'Hola, me interesa el curso de Microsoft Office. ¿Me pueden brindar más información?'
    },
    {
      id: 2,
      title: 'Canva',
      image: cursoCanvaImage,
      whatsappMessage: 'Hola, me interesa el curso de Canva. ¿Me pueden brindar más información?'
    }
  ],
  feedbacks: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=400',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400',
    }
  ]
}

function App() {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<null | {
    title: string;
    image: string;
    whatsappMessage: string;
  }>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedback((prev) => 
        prev === professionalInfo.feedbacks.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
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
                <img src={feedback.image} alt={`Feedback ${feedback.id}`} />
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

        {/* Contact Info */}
        <div className="contact-info">
          <a href={professionalInfo.location.maps} className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="contact-text">
              <span className="contact-label">UBICACIÓN</span>
              <span className="contact-value">{professionalInfo.location.text}</span>
            </div>
          </a>
          <a href={`mailto:${professionalInfo.email}`} className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <div className="contact-text">
              <span className="contact-label">EMAIL</span>
              <span className="contact-value">Contactar</span>
            </div>
          </a>
          <a href={`tel:${professionalInfo.phone}`} className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="contact-text">
              <span className="contact-label">TELÉFONO</span>
              <span className="contact-value">Llamar</span>
            </div>
          </a>
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
              >
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Bottom WhatsApp Button */}
        <button 
          className="whatsapp-button-fixed"
          onClick={() => handleWhatsApp()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
          </svg>
          <span>Consultar</span>
        </button>

        {/* Course Modal */}
        {selectedCourse && (
          <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedCourse(null)}
              >
                ×
              </button>
              <img 
                src={selectedCourse.image} 
                alt={selectedCourse.title}
                className="modal-image"
              />
              <div className="modal-footer">
                <button 
                  className="whatsapp-button"
                  onClick={() => handleWhatsApp(selectedCourse.whatsappMessage)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                  </svg>
                  <span>Agendar</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
