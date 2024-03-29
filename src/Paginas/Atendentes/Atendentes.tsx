import React, { useEffect, useState }from "react";
import Card from "../../Components/Card/Card";
import BarraBusca from "../../Components/BarraBusca/BarraBusca";
import axios from "axios";

import Header from '../../Components/Header/HeaderGerente';
import Footer from '../../Components/Footer/footer';

interface Atendente {
    id: string,
    nome:string,
    email:string
}

function Atendentes(){

    const [busca, setBusca] = useState<string>("");
    const [listaAtendentes, setListaAtendentes] = useState<any>([]);

    async function carregarTodosAtendentes() {

        const response = await axios.get('http://localhost:8080/api/v1/gerente/buscar-atendente');

        setListaAtendentes(response.data)
    }

    useEffect(()=>{
        carregarTodosAtendentes();
    },[])

    async function buscar() {
        let atendenteEspecifico = await axios.get(`http://localhost:8080/api/v1/gerente/buscar-atendente/${busca}`);
        setListaAtendentes([atendenteEspecifico.data])
    }

    return(
        <><Header /><div>
            <BarraBusca regiao={"Atendentes"} buscar={buscar} busca={busca} setBusca={setBusca} />
            {listaAtendentes.length > 0 && listaAtendentes.map((item: Atendente, key: number) => {
                return (
                    <Card
                        key={key}
                        id={item.id}
                        nomeCompleto={item.nome}
                        email={item.email}
                        regiao={"Atendente"} />
                );
            })}
        </div>
        <Footer classe="footer" />
        </>
           
    )
}

export default Atendentes;