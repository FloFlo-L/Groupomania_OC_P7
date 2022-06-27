import React, { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login(e) {
  }


  return (
    <div className="row">
      <br />

      <form action="" onSubmit={login} id="signup" className="col s12">
        <div className="input-field active">
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
          <label htmlFor="password" className="">Mot de passe</label>
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
