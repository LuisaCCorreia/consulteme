import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styles from '../../Components/Card/CardDetalhe.module.css'
import CardDetalhePaciente from '../../Components/Card/CardDetalhePaciente';
import ModalNovaConsulta from "../../Components/Modal/ModalNovaConsulta";
import ModalPaciente from "../../Components/Modal/ModalPaciente";

function DetalhePaciente() {
    const [show, setShow] = useState<boolean>(false);
    const [showConsulta, setShowConsulta] = useState<boolean>(false);
    const [crm, setCrm] = useState("")
    const {id} = useParams();
    const [listaPacientes, setListaPacientes] = useState<any>({});

    async function carregarTodosPacientes() {

        const response = await axios.get(`http://localhost:8080/api/v1/atendente/buscar-paciente/${id}`);

        setListaPacientes(response.data)
    }

    useEffect(()=>{
        carregarTodosPacientes();
    },[]);

    async function criarConsulta() {
        const response = await axios.post(`http://localhost:8080/api/v1/atendente/criar-consulta`, {
            medico:{
                crm: crm
            } ,
            paciente: {
                cpf: listaPacientes.cpf
            }
        });
        await axios.post('http://localhost:5000/', {
            ocupacao: "Atendente",
            acao: `Criou a consulta uma consulta`,
            nome: "Atendente logado"
        })

        setListaPacientes(response.data)
    }

    
    const botoes = (
        <div>
            <button onClick={() => {setShow(true)}} className={styles.botaoEditar}><AiOutlineEdit/></button>
            <button className={styles.botaoAdicionar} onClick={() => {
                setShowConsulta(true)
            }}><AiOutlinePlus/></button>
        </div>
    )
            console.log(listaPacientes)
    return(
        
        <div>
            <CardDetalhePaciente
                botoes={botoes} 
                key={0} 
                cpf={listaPacientes.cpf} 
                nomeCompleto={listaPacientes.nome} 
                dataNascimento={listaPacientes.dtNascimento}
                endereco={listaPacientes.endereco} 
                telefone={listaPacientes.telefone}
                doencaCronica={listaPacientes.doencaCronica}
            />

            {
                
                Object.entries(listaPacientes).length > 0 &&
                <ModalPaciente
                setShow={setShow}
                show={show} 
                cpfAtual={listaPacientes.cpf} 
                nomeCompletoAtual={listaPacientes.nome} 
                dataNascimentoAtual={listaPacientes.dtNascimento} 
                enderecoAtual={listaPacientes.endereco} 
                telefoneAtual={listaPacientes.telefone}       
                doencaCronicaAtual={listaPacientes.doencaCronica}    
            />
            }

            <ModalNovaConsulta 
                criarConsulta={criarConsulta}
                crm={crm}
                setCrm={setCrm}
                show={showConsulta} 
                setShow={setShowConsulta}
            />
        </div>
    )
}

export default DetalhePaciente;