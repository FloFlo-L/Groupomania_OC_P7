import React, { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login(e) {
    e.preventDefault();
    // const error = document.querySelector('.error');
  }

  return (
    <div>
      <br />

      <form action="" onSubmit={login} id="signup" className="">
        <div className="input-field">
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
          />
          <label htmlFor="password">Mot de passe</label>
        </div>

        <br />
        <br />

        <input type="submit" value="Se connecter" className="btn btn-signin" />
        <br /><br />
        <div className="error"></div>
      </form>
    </div>
  );
}
