import { useState } from 'react'
import './FormulariContacte.css'

function FormulariContacte() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telefon: '',
    missatge: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí es pot afegir la lògica per enviar les dades al servidor
    console.log('Dades del formulari:', formData)
    setSubmitted(true)
    
    // Reset del formulari després de 3 segons
    setTimeout(() => {
      setFormData({
        nom: '',
        email: '',
        telefon: '',
        missatge: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="page contacte-page">
      <div className="container">
        <h1>Formulari de Contacte</h1>
        
        <div className="form-container">
          {submitted ? (
            <div className="success-message">
              <h2>✓ Missatge enviat correctament!</h2>
              <p>Gràcies per posar-te en contacte. Ens posarem en contacte aviat.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="nom">Nom complet *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder="El teu nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correu electrònic *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="El teu correu"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefon">Telèfon</label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  placeholder="El teu número de telèfon"
                />
              </div>

              <div className="form-group">
                <label htmlFor="missatge">Missatge *</label>
                <textarea
                  id="missatge"
                  name="missatge"
                  value={formData.missatge}
                  onChange={handleChange}
                  required
                  placeholder="Escriu el teu missatge aquí..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Enviar</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default FormulariContacte
