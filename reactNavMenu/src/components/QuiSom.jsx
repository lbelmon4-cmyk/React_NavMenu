import './QuiSom.css'

function QuiSom() {
  return (
    <section className="page quisom-page">
      <div className="container">
        <h1>Qui som</h1>
        
        <div className="content">
          <div className="about-section">
            <h2>La nostra història</h2>
            <p>
              Som una empresa jove i dinàmica dedicada a oferir solucions innovadores 
              en el sector tecnològic. Amb més de 10 anys d'experiència, hem ajudat 
              a centenars de clients a transformar les seves idees en realitat.
            </p>
          </div>

          <div className="about-section">
            <h2>Els nostres valors</h2>
            <ul className="values-list">
              <li><strong>Innovació:</strong> Sempre buscant noves formes de resoldre problemes</li>
              <li><strong>Qualitat:</strong> Compromès amb l'excel·lència en tot allò que fem</li>
              <li><strong>Integritat:</strong> Actuant amb honestitat i transparència</li>
              <li><strong>Equip:</strong> Creient que junts podem assolir més</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>El nostre equip</h2>
            <p>
              Comptem amb un equip multidisciplinari de professionals amb gran experiència 
              en els seus respectius camps. Ens apasiona el que fem i estamos sempre disposats 
              a ajudar als nostres clients a assolir els seus objectius.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuiSom
