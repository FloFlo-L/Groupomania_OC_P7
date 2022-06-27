import React, { useState } from 'react'
import SignUp from './signUp'
import SignIn from './signIn'

export default function Log() {
const [signUp, setSignUp]= useState(false)
const [signIn, setSignIn]= useState(true)

function clickBtnConnexion(e) {
    if (e.target.id === "login") {
        setSignUp(false)
        setSignIn(true)
    }
    if (e.target.id === "register") {
        setSignUp(true)
        setSignIn(false)
    }
}

  return (
    <div className='card'>
            <ul className='form-container'>
                <li onClick={clickBtnConnexion}
                    id="login"
                    className={signIn ? "active-btn" : null}
                >
                    Se connecter
                </li>
                <li onClick={clickBtnConnexion}
                    id="register"
                    className={signUp ? "active-btn" : null}
                >
                    S'inscrire
                </li>
            </ul>
            {signUp ? <SignUp /> : null}
            {signIn ? <SignIn /> :null}   
        
    </div>

  )
}
