import React, { useContext } from 'react'
import Log from '../components/Log'
import logo from '../img/icon.png'
import{UserIdContext} from '../context/AppContext'
import '../style/pages/connexion.css'
import {Helmet} from "react-helmet";

export default function Connexion() {
  const userId = useContext(UserIdContext)
  return (
    <div className='connexionPage'>
      <Helmet>
        <title>Connexion</title>
        <meta
          description = "Envie de partager un post ou d'accèder aux posts de vos collègues ? Conectez-vous ou inscrivez-vous !"
        />
      </Helmet>
      {userId ? (
        <h1>Vous êtes déjà connecté !</h1>
      ):(
        <div className='connexionContainer'>
        <Log />
        <div className='imgContainer'>
          <img src={logo} alt='icon-logo' className='logoImg '/>
        </div>
      </div> 
      )}
      
    </div>
  )
}
