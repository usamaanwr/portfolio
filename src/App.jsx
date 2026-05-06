import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'



function App() {
 
  return (
    
    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>

   
  )
}

export default App
