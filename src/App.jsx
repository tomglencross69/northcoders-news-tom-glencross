import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Navigate } from 'react-router'
import {Routes, Route} from "react-router"

function App() {

  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path ="/" element={<Navigate to="/articles"/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
 