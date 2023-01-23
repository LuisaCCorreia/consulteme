import './header.css'

import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Perfil from '../../assets/account 1.png';

export default function HeaderNaoLogado() {

  return (
    <div id="divNavBar">
      <div className="navBar">
        <Link to="/">
          <img src={Logo} alt="Logo" id="logo"></img>
        </Link>
        <ul className="nav">
          <Link to="/Atendentes">
            <li>Atendentes</li>
          </Link>
          <Link to="/Consultas">
            <li>Consultas</li>
          </Link>
          <Link to="/Medicos">
            <li>Médicos</li>
          </Link>
          <Link to="/Pacientes">
            <li>Pacientes</li>
          </Link>
        </ul>
        <div className="perfilNãoLogado">
          <ul>
          <Link to="/loginPaciente">
            <li> Faça login </li>
        </Link>
          </ul>
          <Link to="/loginAtendente">
            <img src={Perfil} alt="Foto de perfil" id="fotoPerfil"></img>
          </Link>
        </div>
      </div>
    </div>
  )
}

