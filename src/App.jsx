import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Hub from './Hub'
import NotFound from './NotFound'
import ReactionTime from './Games/ReactionTime'
import NumberMemory from './Games/NumberMemory'
import WordMemory from './Games/WordMemory'

function App() {

  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hub />} />
          <Route path="/ReactionTime" element={<ReactionTime />} />
          <Route path="/NumberMemory" element={<NumberMemory />} />
          <Route path="/WordsMemory" element={<WordMemory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
