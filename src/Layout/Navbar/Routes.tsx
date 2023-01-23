import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Atendentes from "../../Paginas/Atendentes/Atendentes";
import DetalheAtendente from "../../Paginas/Atendentes/DetalheAtendente";
import Consultas from "../../Paginas/Consultas/Consultas";
import Medicos from "../../Paginas/Medicos/Medicos";
import DetalheMedico from "../../Paginas/Medicos/DetalheMedico";
import Pacientes from "../../Paginas/Pacientes/Pacientes";
import DetalhePaciente from "../../Paginas/Pacientes/DetalhePaciente";
import HomeNaoLogada from "../../Paginas/HomeNaoLogada/index";
import Login from "../../Paginas/Login/login";
import HomeLogadoAtendente from "../../Paginas/HomeLogadoAtendente/HomeLogadoAtendente";
import HomeLogadoMedico from "../../Paginas/HomeLogadoMedico/HomeLogadoMedico";
import HomeLogadoGerente from "../../Paginas/HomeLogadoGerente/HomeLogadoGerente";


function Rotas(){
    return(
        <Router>
            
            <Routes>
                <Route path="/" element= {<HomeNaoLogada/>} />
                <Route path="/homeAtendente" element= {<HomeLogadoAtendente/>} />
                <Route path="/homeGerente" element= {<HomeLogadoGerente/>} />
                <Route path="/login" element= {<Login/>} />
                <Route path="/homeMedico" element= {<HomeLogadoMedico/>} />
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