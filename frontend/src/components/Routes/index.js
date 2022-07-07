import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home'
import Error from '../../pages/Error'
import Connexion from '../../pages/Connexion'
import NavBar from '../NavBar/NavBar'

export default function index() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/connexion' element={<Connexion />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}
