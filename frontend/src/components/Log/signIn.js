import React, { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login(e) {
    e.preventDefault();
    const error = document.querySelector('.error');

    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch('http://localhost:5000/api/user/login', requestOptions)
      .then((response) => response.json())
      .then((response2) => {
        console.log(response2);
        if (response2.error === undefined) {
          console.log('mdp et email ok !');
          error.innerHTML = '';
          console.log(response2)
          window.localStorage.setItem('token', response2.token)
          window.location='/'
        } else {
          error.innerHTML = response2.error;
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <br />

      <form action="" onSubmit={login} id="signup">
        <div className="input-field">
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            aria-label= "renseignez votre email"
          />
          <label htmlFor="email">Email</label>
        </div>

        <br />

        <div className="input-field">
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            aria-label= "renseignez votre mot de passe"
          />
          <label htmlFor="password">Mot de passe</label>
        </div>

        <br />
        <br />

        <input type="submit" value="Se connecter" className="btn btnConnexion" aria-label='Se connecter'/>
        <br />
        <br />
        <div className="error"></div>
      </form>
    </div>
  );
}
