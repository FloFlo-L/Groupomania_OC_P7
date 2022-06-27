import React from 'react'
import Log from '../components/Log'
import logo from '../img/icon.png'
import '../style/pages/connexion.css'

export default function Connexion() {
  return (
    <div className='connexion-page'>
      <div className='connexion-container'>
        <Log />
        <div className='img-container'>
          <img src={logo} alt='icon-logo' className='logo-img '/>
        </div>
      </div> 
    </div>
  )
}