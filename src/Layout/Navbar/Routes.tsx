import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Atendentes from "../../Paginas/Atendentes/Atendentes";
import DetalheAtendente from "../../Paginas/Atendentes/DetalheAtendente";
import Consultas from "../../Paginas/Consultas/Consultas";
import DetalheConsultas from "../../Paginas/Consultas/DetalheConsultas";
import Medicos from "../../Paginas/Medicos/Medicos";
import DetalheMedico from "../../Paginas/Medicos/DetalheMedico";
import Pacientes from "../../Paginas/Pacientes/Pacientes";
import DetalhePaciente from "../../Paginas/Pacientes/DetalhePaciente";
import Navbar from "./Navbar";

function Rotas(){
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/atendentes" element={<Atendentes/>}/>
                <Route path="/atendentes/:id" element={<DetalheAtendente/>}/>
                <Route path="/consultas" element={<Consultas/>}/>
                <Route path="/consultas/:id" element={<DetalheConsultas/>}/>
                <Route path="/medicos" element={<Medicos/>}/>
                <Route path="/medicos/:id" element={<DetalheMedico/>}/>
                <Route path="/pacientes" element={<Pacientes/>}/>
                <Route path="/pacientes/:id" element={<DetalhePaciente/>}/>
            </Routes>
        </Router>        
    )
}

export default Rotas;