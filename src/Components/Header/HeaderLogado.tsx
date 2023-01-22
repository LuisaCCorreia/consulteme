import './header.css'

import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Perfil from '../../assets/account 1.png';

export default function Header() {  


  return(
    <div id="divNavBar">
      <div className="navBar">
        <Link to="/home">
          <img src={Logo} alt="Logo" id="logo"></img>
        </Link>
        <ul className="nav">
          <Link to="/nossosMedicos">
            <li>Nossos médicos</li>
          </Link>
          <Link to="/nossosConsultorios">
            <li>Nossos consultórios</li>
          </Link>
        </ul>
        <div className="perfil">
          <ul className="logado">
            <li> Olá {localStorage.getItem('nome')} </li>
            <li className="negrito">Sua conta</li>
          </ul>
          <Link to="/perfil">
            <img src={Perfil} alt="Foto de perfil" id="fotoPerfil"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
