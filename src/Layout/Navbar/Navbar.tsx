import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import logo from '../../assets/consulteme_logo.png'

function Navbar(){
    return(       
        <nav>
            <ul className={styles.ul}>
                <li className={styles.li}><Link to={'/'}> <div><img src={logo} alt="Logo da ConsulteMe" height="40 px" width="70 px"/></div> </Link></li>
                <li className={styles.li}><Link to={'/atendentes'}>Atendentes</Link></li>
                <li className={styles.li}><Link to={'/consultas'}>Consultas</Link></li>
                <li className={styles.li}><Link to={'/medicos'}>Médicos</Link></li>
                <li className={styles.li}><Link to={'/pacientes'}>Pacientes</Link></li>
            </ul> 
        </nav>
    )
}

export default Navbar;