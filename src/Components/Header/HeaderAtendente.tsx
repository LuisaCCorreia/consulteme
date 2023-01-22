import './header.css'

import { Link } from 'react-router-dom';



import Logo from '../../assets/logo.png';

export default function HeaderSecretaria() {
  
    
  return (
    <div id="divNavBar">
      <div className="navBar">
        <Link to="/">
          <img src={Logo} alt="Logo" id="logo"></img>
        </Link>
        <ul className="navSecretaria">
          <Link to="/consultorio">
            <li>Página Consultório</li>
          </Link>
          <Link to="/cadastroDoctor">
            <li>Cadastro médico</li>
          </Link>
          <Link to="/cadastroPaciente">
            <li>Cadastro Paciente</li>
          </Link>
        </ul>
        
      </div>
    </div>
  );
}
