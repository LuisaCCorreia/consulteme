import './header.css'

import { Link } from 'react-router-dom';



import Logo from '../../assets/logo.png';

export default function HeaderMedico() {
  
    
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
          <div className='divAtiva'>
          <Link to="/medicos">
            <li className='liPagMedicos'>Médicos</li>
          </Link>
          </div>
          <Link to="/pacientes">
            <li className='liNav'>Pacientes</li>
          </Link>
        </ul>
        
      </div>
    </div>
  );
}
