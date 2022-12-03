import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../../Paginas/Login/Login';
import Atendentes from "../../Paginas/Atendentes/Atendentes";
import Consultas from "../../Paginas/Consultas/Consultas";
import Medicos from "../../Paginas/Medicos/Medicos";
import Pacientes from "../../Paginas/Pacientes/Pacientes";
import Navbar from "./Navbar";
import { useState } from "react";

function Rotas(){
    const [auth, setAuth] = useState<string>("");
    return(
        <Router>
            <Navbar auth={auth}/>
            <Routes>
                <Route path="/"  element={<Login setAuth={setAuth}/>}/>
                <Route path="/atendentes" element={<Atendentes/>}/>
                <Route path="/consultas" element={<Consultas/>}/>
                <Route path="/medicos" element={<Medicos/>}/>
                <Route path="/pacientes" element={<Pacientes/>}/>
            </Routes>
        </Router>        
    )
}

export default Rotas;