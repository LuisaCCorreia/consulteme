import axios from "axios";
import { useEffect, useState } from "react";
import BarraBusca from "../../Components/BarraBusca/BarraBusca";
import CardPacientes from "../../Components/Card/CardPaciente";

interface Paciente {
    cpf: string,
    nome:string,
    dtNascimento: string,
    endereco: string,
    telefone: number,
    doencaCronica?: string
}

function Pacientes () {

    const [listaPacientes, setListaPacielistaPacientes] = useState<any>([]);

    async function carregarTodosPacientes() {

        const response = await axios.get('http://localhost:8080/api/v1/atendente/buscar-paciente');

        setListaPacielistaPacientes(response.data)
    }

    useEffect(()=>{
        carregarTodosPacientes();
    },[])
    
    return(
        <div>
            <BarraBusca regiao={"Pacientes"}/>                 
            {listaPacientes.length > 0 && 
                listaPacientes.map(({
                    cpf, 
                    nome, 
                    dtNascimento, 
                    endereco, 
                    telefone, 
                    doencaCronica
                }:Paciente, key:number) => {
                    console.log(typeof dtNascimento)
                    return(
                        <CardPacientes 
                            key = {key} 
                            cpf = {cpf} 
                            nomeCompleto = {nome} 
                            dataNascimento = {new Date(dtNascimento)} 
                            endereco = {endereco} 
                            telefone = {telefone}
                            doencaCronica = {doencaCronica}
                        />
                    )
                })}
        </div>
    )
}

export default Pacientes;