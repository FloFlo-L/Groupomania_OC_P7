import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import '../../style/components/NavBar.css';

export default function Logout() {
  function logout() {
    localStorage.clear();
    window.location('/connexion');
  }

  return (
    <li className="containerImgLog">
      <NavLink onClick={logout} to="/connexion" className="NavIconBtn">
        <FontAwesomeIcon
          icon={faRightFromBracket}
          size="2x"
          className="iconLog"
        ></FontAwesomeIcon>
        <div className="btn btnLogNavBar">Déconnexion</div>
        <div className="btn-small smallBtnLogNavBar">Déconnexion</div>
      </NavLink>
    </li>
  );
}
