import './header.css'

import { Link, useNavigate } from 'react-router-dom';



import Logo from '../../assets/logo.png';
import { Button } from '@mui/material';

export default function HeaderMedico() {
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
          <Link to="/consultas">
            <li className='liNav'>Consultas</li>
          </Link>
        </ul>
        <Button onClick={logout}>Logout</Button>
        
      </div>
    </div>
  );
}
