import './header.css'

import { Link } from 'react-router-dom';



import Logo from '../../assets/logo.png';

export default function HeaderSecretaria() {
  
    
  return (
    <div id="divNavBar">
      <div className="navBar">
        <div></div>
        <Link to="/">
          <img src={Logo} alt="Logo" id="logo"></img>
        </Link>
        <ul className="navAtendente">
          <Link to="/atendentes">
            <li className='liNav'>Atendentes</li>
          </Link>
          <Link to="/consultas">
            <li className='liNav'>Consultas</li>
          </Link>
          <Link to="/medicos">
            <li className='liNav'>Médicos</li>
          </Link>
          <div className='divAtiva'>
          <Link to="/pacientes">
            <li className='liPagPacientes'>Pacientes</li>
          </Link>
          </div>
        </ul>
        
      </div>
    </div>
  );
}
