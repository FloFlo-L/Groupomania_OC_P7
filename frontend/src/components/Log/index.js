import React, { useState } from 'react';
import SignUp from './signUp';
import SignIn from './SignIn';

export default function Log() {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);

  function clickBtnConnexion(e) {
    if (e.target.id === 'register') {
      setSignIn(false);
      setSignUp(true);
    } else if (e.target.id === 'login') {
      setSignUp(false);
      setSignIn(true);
    }
  }

  return (
    <div className="card containerConnexion">
      <ul className="formContainer">
        <li
          onClick={clickBtnConnexion}
          id="login"
          className={signIn ? 'activeBtn' : null}
        >
          Se connecter
        </li>
        <li
          onClick={clickBtnConnexion}
          id="register"
          className={signUp ? 'activeBtn' : null}
        >
          S'inscrire
        </li>
      </ul>
      {signUp ? <SignUp /> : null}
      {signIn ? <SignIn /> : null}
    </div>
  );
}
