import axios from "axios";
import { useState, useEffect } from "react";
import CardConsultas from "../../Components/Card/CardConsultas";
import HeaderAtendente from '../../Components/Header/HeaderAtendente';
import HeaderMedico from '../../Components/Header/HeaderMedico';
import Footer from '../../Components/Footer/footer';

interface Consulta {
    id: string,
    status:string,
    exame: string,
    diagnostico: string,
    receita: string,
}

function Consultas () {

    const [listaConsultas, setListaConsultas] = useState<any>([]);

    async function carregarTodasConsultas() {

        const response = await axios.get('http://localhost:8080/api/v1/atendente/buscar-consulta');

        setListaConsultas(response.data)
    }

    useEffect(()=>{
        carregarTodasConsultas();
    },[])
    
    return(
        <>{localStorage.getItem("cargo") === "MEDICO"? <HeaderMedico/>:localStorage.getItem("cargo") === "ATENDENTE"&&<HeaderAtendente/>}
        <div>            
            {listaConsultas.length > 0 && 
                listaConsultas.map(({
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
        <Footer classe='footer'/>
        </>
    )
}

export default Consultas;