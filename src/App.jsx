import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {  HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'



function App() {
 
  return (
    
    <HashRouter>
    <Navbar /> 
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </HashRouter>

   
  )
}

export default App
