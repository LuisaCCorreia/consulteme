import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Atendentes from "../../Paginas/Atendentes/Atendentes";
import DetalheAtendente from "../../Paginas/Atendentes/DetalheAtendente";
import Consultas from "../../Paginas/Consultas/Consultas";
import Medicos from "../../Paginas/Medicos/Medicos";
import DetalheMedico from "../../Paginas/Medicos/DetalheMedico";
import Pacientes from "../../Paginas/Pacientes/Pacientes";
import DetalhePaciente from "../../Paginas/Pacientes/DetalhePaciente";
import Navbar from "./Navbar";
import HomeNaoLogada from "../../Paginas/HomeNaoLogada/index";
import Login from "../../Paginas/Login/login";
import LoginAtendente from "../../Paginas/Login/loginAtendente";
import LoginGerente from "../../Paginas/Login/loginGerente";
import LoginMedico from "../../Paginas/Login/loginMedico";


function Rotas(){
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element= {<HomeNaoLogada/>} />
                <Route path="/loginAtendente" element= {<LoginAtendente/>} />
                <Route path="/loginGerente" element= {<LoginGerente/>} />
                <Route path="/loginMedico" element= {<LoginMedico/>} />
                <Route path="/atendentes" element={<Atendentes/>}/>
                <Route path="/atendentes/:id" element={<DetalheAtendente/>}/>
                <Route path="/consultas" element={<Consultas/>}/>
                <Route path="/medicos" element={<Medicos/>}/>
                <Route path="/medicos/:id" element={<DetalheMedico/>}/>
                <Route path="/pacientes" element={<Pacientes/>}/>
                <Route path="/pacientes/:id" element={<DetalhePaciente/>}/>
            </Routes>
        </Router>        
    )
}

export default Rotas;