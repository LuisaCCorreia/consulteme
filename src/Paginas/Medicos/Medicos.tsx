import React from "react";
import Card from "../../Components/Card/Card";
import BarraBusca from "../../Components/BarraBusca/BarraBusca";

const listaMedicos = require('../../BD/Medico.json');


interface Medico {
    id: string,
    crm: string,
    nomeCompleto:string,
    email:string
}

function Medicos() {
    return(<div>
        <BarraBusca/>                 
        {listaMedicos.length > 0 && listaMedicos.map((item:Medico, key:number) => {
            return(
               <Card 
                    key={key}
                    id={item.id}
                    nomeCompleto={item.nomeCompleto}
                    email={item.email} 
                    regiao={"Médico"}                   
                />
            )
        })}
    </div>
        
    )
}

export default Medicos;