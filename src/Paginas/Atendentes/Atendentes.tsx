import React from "react";
import Card from "../../Components/Card/Card";
import BarraBusca from "../../Components/BarraBusca/BarraBusca";

const listaAtendentes = require('../../BD/Atendente.json');

interface Atendente {
    id: string,
    nomeCompleto:string,
    email:string
}

function Atendentes(){
    return(
        <div>
            <BarraBusca/>                   
            {listaAtendentes.map((item:Atendente, key:number) => {
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