import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Inici from './components/Inici'
import QuiSom from './components/QuiSom'
import FormulariContacte from './components/FormulariContacte'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inici />} />
        <Route path="/quisom" element={<QuiSom />} />
        <Route path="/contacte" element={<FormulariContacte />} />
      </Routes>
    </>
  )
}

export default App
