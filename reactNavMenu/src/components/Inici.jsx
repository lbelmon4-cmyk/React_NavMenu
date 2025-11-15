import './Inici.css'

function Inici() {
  return (
    <section className="page inici-page">
      <div className="container">
        <h1>Benvingut al nostre web</h1>
        <p className="subtitle">Navega pel menú per descobrir més sobre nosaltres</p>
        
        <div className="content">
          <div className="card">
            <h2>Qui som</h2>
            <p>Descobreix qui som i quins són els nostres valors. Fes clic al menú per anar a la secció "Qui som".</p>
          </div>
          
          <div className="card">
            <h2>Contacte</h2>
            <p>Vols posar-te en contacte amb nosaltres? Omple el formulari i ens posarem en contacte aviat.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inici
