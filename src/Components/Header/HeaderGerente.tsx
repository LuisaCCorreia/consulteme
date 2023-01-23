import './header.css'

import { Link, useNavigate } from 'react-router-dom';



import Logo from '../../assets/logo.png';
import { Button } from '@mui/material';

export default function HeaderGerente() {
  const navigate = useNavigate()

    function logout () {
      localStorage.setItem("cargo", "")
      navigate("/login")
    }
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
          <Link to="/medicos">
            <li className='liNav'>Médicos</li>
          </Link>
        </ul>
        <Button onClick={logout}>Logout</Button>
        
      </div>
    </div>
  );
}
