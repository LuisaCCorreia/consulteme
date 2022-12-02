import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../../Paginas/Login';
import Atendentes from "../../Paginas/Atendentes";
import Consultas from "../../Paginas/Consultas";
import Medicos from "../../Paginas/Medicos";
import Pacientes from "../../Paginas/Pacientes";
import Navbar from "./Navbar";

function Rotas(){
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/"  element={<Login/>}/>
                <Route path="/atendentes" element={<Atendentes/>}/>
                <Route path="/consultas" element={<Consultas/>}/>
                <Route path="/medicos" element={<Medicos/>}/>
                <Route path="/pacientes" element={<Pacientes/>}/>
            </Routes>
        </Router>        
    )
}

export default Rotas;