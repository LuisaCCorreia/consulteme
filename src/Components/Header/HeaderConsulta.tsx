import './header.css'

import { Link } from 'react-router-dom';



import Logo from '../../assets/logo.png';

export default function HeaderConsulta() {
  
    
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
          <div className='divAtiva'>
          <Link to="/consultas">
            <li className='liPagConsultas'>Consultas</li>
          </Link>
          </div>
          <Link to="/medicos">
            <li className='liNav'>Médicos</li>
          </Link>
          <Link to="/pacientes">
            <li className='liNav'>Pacientes</li>
          </Link>
        </ul>
        
      </div>
    </div>
  );
}
