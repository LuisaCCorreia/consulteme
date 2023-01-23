import React, {useState, useEffect} from "react";
import Card from "../../Components/Card/Card";
import BarraBusca from "../../Components/BarraBusca/BarraBusca";
import axios from 'axios'

import Header from '../../Components/Header/HeaderGerente';
import Footer from '../../Components/Footer/footer';


interface Medico {
    id: string,
    crm: string,
    nome:string,
    email:string
}

function Medicos() {
    const [busca, setBusca] = useState<string>("");
    const [listaMedicos, setListaMedicos] = useState<any>([]);

    async function carregarTodosMedicos() {

        const response = await axios.get('http://localhost:8080/api/v1/gerente/buscar-medico');

        setListaMedicos(response.data)
    }

    useEffect(()=>{
        carregarTodosMedicos();
    },[])

    async function buscar() {
        let medicoEspecifico = await axios.get(`http://localhost:8080/api/v1/gerente/buscar-medico/${busca}`);
        setListaMedicos([medicoEspecifico.data])
    }

    return(
        <><Header/>
    <div>
        
        <BarraBusca regiao="Médicos" buscar={buscar} busca={busca} setBusca={setBusca}/>                 
        {listaMedicos.length > 0 && listaMedicos.map((item:Medico, key:number) => {
            return(
               <Card 
                    key={key}
                    id={item.crm}
                    nomeCompleto={item.nome}
                    email={item.email} 
                    regiao={"Médico"}                   
                />
            )
        })}
    </div>
    <Footer classe='footer'/>
        </>
    )
}

export default Medicos;