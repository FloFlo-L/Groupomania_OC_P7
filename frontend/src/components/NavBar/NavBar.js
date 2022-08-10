import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../Log/Logout';
import { UserIdContext } from '../../context/AppContext';

import imgLogo from '../../img/icon2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import '../../style/components/NavBar.css';

export default function NavBar() {
  const userId = useContext(UserIdContext);
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');

  fetch(`http://localhost:5000/api/user/${userId}`)
    .then((response) => response.json())
    .then((res) => {
      if (res.prenom) {
        setPrenom(res.prenom);
      }
      if (res.nom) {
        setNom(res.nom);
      }
    });

  return (
    <nav>
      <div className="logo">
        <NavLink exact to="/">
          <div>
            <img className="imgLogo" src={imgLogo} alt="logo" />
          </div>
        </NavLink>
      </div>

      {userId ? (
        <div className="containerWelcome">
          <ul className="welcome">
            <li>
              <NavLink exact to="/profil" className="NavLink">
                <h5>
                  Bienvenue {prenom} {nom}
                </h5>
              </NavLink>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      ) : (
        <div className="containerWelcome">
          <ul className="welcome">
            <li className="containerImgLog">
              <NavLink to="/connexion" className="NavIconBtn">
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  size="2x"
                  className="iconLog"
                ></FontAwesomeIcon>
                <div className="btn btnLogNavBar">Connexion</div>
                <div className="btn-small smallBtnLogNavBar">Connexion</div>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}