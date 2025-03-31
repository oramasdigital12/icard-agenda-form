import { useState } from 'react'

const professionalInfo = {
  name: 'Dr. Ana García',
  title: 'Especialista en Dermatología',
  description: 'Más de 10 años de experiencia en tratamientos dermatológicos avanzados.',
  location: {
    text: 'Madrid, España',
    maps: 'https://goo.gl/maps/your-location-link'
  },
  email: 'contacto@clinicagarcia.com',
  phone: '+34 600 123 456',
  whatsapp: '+34600123456',
  services: [
    {
      id: 1,
      title: 'Consulta Dermatológica',
      description: 'Diagnóstico y tratamiento de condiciones de la piel',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300',
      variants: [
        {
          id: 1,
          title: 'Consulta Regular',
          description: '30 minutos de consulta',
          price: '60€'
        },
        {
          id: 2,
          title: 'Consulta Extendida',
          description: '45 minutos de consulta con análisis detallado',
          price: '90€'
        }
      ]
    },
    {
      id: 2,
      title: 'Tratamientos Estéticos',
      description: 'Procedimientos no invasivos para mejorar la apariencia',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300',
      variants: [
        {
          id: 1,
          title: 'Limpieza Facial',
          description: 'Limpieza profunda con tratamiento hidratante',
          price: '75€'
        },
        {
          id: 2,
          title: 'Tratamiento Anti-edad',
          description: 'Incluye masaje facial y máscara especializada',
          price: '120€'
        }
      ]
    },
    {
      id: 3,
      title: 'Tratamientos Láser',
      description: 'Tecnología avanzada para diferentes condiciones',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=300',
      variants: [
        {
          id: 1,
          title: 'Láser Rejuvenecedor',
          description: 'Mejora la textura y luminosidad',
          price: '150€'
        },
        {
          id: 2,
          title: 'Láser Depilación',
          description: 'Tratamiento por zonas',
          price: '90€'
        }
      ]
    },
    {
      id: 4,
      title: 'Tratamientos Corporales',
      description: 'Cuidado integral de la piel del cuerpo',
      image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=300',
      variants: [
        {
          id: 1,
          title: 'Tratamiento Reductor',
          description: 'Reduce medidas y mejora la firmeza',
          price: '120€'
        },
        {
          id: 2,
          title: 'Masaje Terapéutico',
          description: 'Masaje personalizado de 60 minutos',
          price: '80€'
        }
      ]
    },
  ],
}

function App() {
  const [showAppointment, setShowAppointment] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedVariant, setSelectedVariant] = useState<any>(null)
  const [currentStep, setCurrentStep] = useState(1)

  const handleServiceClick = (service: any) => {
    setSelectedService(service)
    setShowAppointment(true)
    setCurrentStep(1)
  }

  const handleVariantSelect = (variant: any) => {
    setSelectedVariant(variant)
    setCurrentStep(2)
  }

  const handleWhatsApp = () => {
    const message = `Hola, me gustaría obtener más información sobre sus servicios.`
    window.open(`https://wa.me/${professionalInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="container">
      <div className="card">
        {/* Banner */}
        <div className="banner">
          <img 
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&auto=format&fit=crop" 
            alt="Medical Banner"
            className="banner-image"
          />
        </div>

        {/* Card Header */}
        <div className="card-header">
          <div className="header-main">
            <div className="avatar">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop" 
                alt={professionalInfo.name}
                className="avatar-image"
              />
            </div>
            <button className="whatsapp-header" onClick={handleWhatsApp}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            </button>
          </div>
          <div className="header-content">
            <h1 className="title">{professionalInfo.name}</h1>
            <h2 className="subtitle">{professionalInfo.title}</h2>
            <p className="description">{professionalInfo.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="card-content">
          {/* Contact Info */}
          <div className="contact-info">
            <a 
              href={professionalInfo.location.maps} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="contact-text">
                <span className="contact-label">Ubicación</span>
                <span className="contact-value">Madrid</span>
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
                <span className="contact-label">Email</span>
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
                <span className="contact-label">Teléfono</span>
                <span className="contact-value">Llamar</span>
              </div>
            </a>
          </div>

          {/* Services */}
          <div className="services">
            <h3 className="services-title">Servicios</h3>
            <div className="services-grid">
              {professionalInfo.services.map((service) => (
                <div 
                  key={service.id} 
                  className="service-card"
                  onClick={() => handleServiceClick(service)}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-card-image"
                  />
                  <div className="service-card-content">
                    <h4 className="service-card-title">{service.title}</h4>
                    <p className="service-card-price">Desde {service.variants[0].price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      {showAppointment && selectedService && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3 className="modal-title">Agendar Cita</h3>
              <button 
                className="close-button"
                onClick={() => {
                  setShowAppointment(false)
                  setSelectedService(null)
                  setSelectedVariant(null)
                  setCurrentStep(1)
                }}
              >
                ✕
              </button>
            </div>

            <div className="steps">
              <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                <div className="step-number">1</div>
                <div className="step-connector"></div>
              </div>
              <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                <div className="step-number">2</div>
                <div className="step-connector"></div>
              </div>
              <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                <div className="step-number">3</div>
              </div>
            </div>

            {currentStep === 1 && (
              <div className="service-variants">
                {selectedService.variants.map((variant: any) => (
                  <div
                    key={variant.id}
                    className={`variant-option ${selectedVariant?.id === variant.id ? 'selected' : ''}`}
                    onClick={() => handleVariantSelect(variant)}
                  >
                    <div className="variant-info">
                      <h4 className="variant-title">{variant.title}</h4>
                      <p className="variant-description">{variant.description}</p>
                    </div>
                    <span className="variant-price">{variant.price}</span>
                  </div>
                ))}
              </div>
            )}

            {currentStep === 2 && (
              <div className="appointment-form">
                <div className="form-group">
                  <label className="form-label">Fecha de la cita</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value)
                      if (e.target.value && selectedTime) {
                        setCurrentStep(3)
                      }
                    }}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Hora de la cita</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => {
                      setSelectedTime(e.target.value)
                      if (e.target.value && selectedDate) {
                        setCurrentStep(3)
                      }
                    }}
                  >
                    <option value="">Seleccionar hora</option>
                    {['09:00', '10:00', '11:00', '12:00', '16:00', '17:00'].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="appointment-summary">
                <h4>Resumen de la cita</h4>
                <p>Servicio: {selectedVariant.title}</p>
                <p>Fecha: {selectedDate}</p>
                <p>Hora: {selectedTime}</p>
                <p>Precio: {selectedVariant.price}</p>
                <div className="button-group">
                  <button
                    className="button button-secondary"
                    onClick={() => setCurrentStep(2)}
                  >
                    Atrás
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      alert(`Cita agendada:\n${selectedVariant.title}\n${selectedDate} a las ${selectedTime}`)
                      setShowAppointment(false)
                      setSelectedService(null)
                      setSelectedVariant(null)
                      setCurrentStep(1)
                    }}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
