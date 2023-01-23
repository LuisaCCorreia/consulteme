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
        <div className='divAtiva'>
          <Link to="/atendentes">
            <li className='liPagAtendente'>Atendentes</li>
          </Link>
          </div>
          <Link to="/consultas">
            <li className='liNav'>Consultas</li>
          </Link>
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
