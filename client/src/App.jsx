import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

import Cripto from './pages/Cripto.jsx'
import DetailCripto from './pages/DetailCripto.jsx'
import Noticias from './pages/Noticias.jsx'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Cripto />} />
        <Route exact path='/criptomonedas' element={<Cripto />} />
        <Route exact path='/criptomonedas/detalles/:id' element={<DetailCripto />} />
     
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
