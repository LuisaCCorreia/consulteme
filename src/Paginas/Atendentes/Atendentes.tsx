import React, { useEffect, useState }  from "react";
import Card from "../../Components/Card/Card";
import BarraBusca from "../../Components/BarraBusca/BarraBusca";
import axios from "axios";

interface Atendente {
    id: string,
    nomeCompleto:string,
    email:string
}

function Atendentes(){

    const [listaAtendentes, setListaAtendentes] = useState<any>([]);

    async function carregarTodosAtendentes() {

        const response = await axios.get('localhost:8080/api/v1/gerente/buscar-atendente');

        setListaAtendentes(response)
    }

    useEffect(()=>{
        carregarTodosAtendentes();
    })

    return(
        <div>
            <BarraBusca/>                 
            {listaAtendentes.length >0 && listaAtendentes.map((item:Atendente, key:number) => {
                return(
                   <Card 
                        key={key}
                        id={item.id}
                        nomeCompleto={item.nomeCompleto}
                        email={item.email} 
                        regiao={"Atendente"}                   
                    />
                )
            })}
        </div>
       
    )
}

export default Atendentes;