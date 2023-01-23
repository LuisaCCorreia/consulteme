import React, {useState, useEffect} from "react";
import Card from "../../Components/Card/Card";
import BarraBusca from "../../Components/BarraBusca/BarraBusca";
import axios from 'axios'




interface Medico {
    id: string,
    crm: string,
    nome:string,
    email:string
}

function Medicos() {
    const [listaMedicos, setListaMedicos] = useState<any>([]);

    async function carregarTodosAtendentes() {

        const response = await axios.get('http://localhost:8080/api/v1/gerente/buscar-medico');

        setListaMedicos(response.data)
    }

    useEffect(()=>{
        carregarTodosAtendentes();
    },[])

    return(<div>
        <BarraBusca regiao="Médicos" buscar={()=>{}} busca={""} setBusca={()=>{}}/>                 
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
        
    )
}

export default Medicos;