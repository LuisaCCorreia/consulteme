import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

interface NavbarProps {
    auth:string
}

function Navbar({auth}:NavbarProps){
    return(       
        <nav className={styles.navbar}>
            {
                auth === "Gerente"?
                    <ul className={styles.ul}>
                        <li className={styles.li}><Link to={'/atendentes'}>Atendentes</Link></li>
                        <li className={styles.li}><Link to={'/medicos'}>Médicos</Link></li>
                    </ul> 
                : auth === "Atendente" ? 
                    <ul className={styles.ul}>
                        <li className={styles.li}><Link to={'/consultas'}>Consultas</Link></li>
                        <li className={styles.li}><Link to={'/pacientes'}>Pacientes</Link></li>
                    </ul> 
                : auth === "Médico" && 
                    <ul className={styles.ul}>
                        <li className={styles.li}><Link to={'/atendentes'}>Atendentes</Link></li>
                        <li className={styles.li}><Link to={'/consultas'}>Consultas</Link></li>
                        <li className={styles.li}><Link to={'/medicos'}>Médicos</Link></li>
                        <li className={styles.li}><Link to={'/pacientes'}>Pacientes</Link></li>
                    </ul> 
    }
            
        </nav>
    )
}

export default Navbar;