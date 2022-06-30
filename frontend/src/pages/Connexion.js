import React from 'react'
import Log from '../components/Log'
import logo from '../img/icon.png'
import '../style/pages/connexion.css'

export default function Connexion() {
  return (
    <div className='connexion-page'>
      <div className='connexion-container'>
        <Log />
        <div className='imgContainer'>
          <img src={logo} alt='icon-logo' className='logoImg '/>
        </div>
      </div> 
    </div>
  )
}