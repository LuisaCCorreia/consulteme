import axios from "axios";
import { useState, useEffect } from "react";
import BarraBusca from "../../Components/BarraBusca/BarraBusca";
import CardConsultas from "../../Components/Card/CardConsultas";

const consultas = require('../../BD/Consulta.json');

interface Consulta {
    id: string,
    status:string,
    exame: string,
    diagnostico: string,
    receita: string,
}

function Consultas () {

    const [listaMedicos, setListaMedicos] = useState<any>([]);

    async function carregarTodosAtendentes() {

        const response = await axios.get('http://localhost:8080/api/v1/gerente/buscar-medico');

        setListaMedicos(response.data)
    }

    useEffect(()=>{
        carregarTodosAtendentes();
    },[])
    
    return(
        <div>            
            {consultas.length > 0 && 
                consultas.map(({
                    id,
                    status,
                    exame,
                    diagnostico,
                    receita
                }:Consulta, key:number) => {
                    return(
                        <CardConsultas
                            key={key} 
                            id={id} 
                            status={status} 
                            exame={exame} 
                            diagnostico={diagnostico} 
                            receita={receita}  
                        />
                    )
                })}
        </div>
    )
}

export default Consultas;