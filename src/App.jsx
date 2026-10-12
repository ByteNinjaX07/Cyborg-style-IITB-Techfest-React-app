import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FAQ from './components/FAQ'
import About from './components/About'
import Perks from './components/Perks'
import { Route, Routes } from 'react-router'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path='/perks' element={<Perks/>}/>
      </Routes>
    </div>
  )
}

export default App
