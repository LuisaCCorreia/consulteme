import React, { useState } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import styles from './BarraBusca.module.css';
import Modal from "../../Components/Modal/Modal";
import ModalPaciente from "../../Components/Modal/ModalPaciente";
import axios from 'axios';

interface BarraBuscaProps {
    regiao:string
}

function BarraBusca({regiao}:BarraBuscaProps) {
    const [busca, setBusca] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);

    async function criar(email:string, senha:string, nome:string, crm?:string) {
        if(regiao === "Atendentes") {
           await axios.post('http://localhost:8080/api/v1/gerente/criar-atendente', {
                email: email, 
                senha: senha, 
                nome: nome, 
            gerente: {
                "id": 1
            }});
        } else if (regiao === "Médicos") {
            axios.post('http://localhost:8080/api/v1/gerente/criar-medico', {
                crm:crm,
                email: email, 
                senha: senha, 
                nome: nome, 
            gerente: {
                "id": 1
            }});
        }
    }
    return(
        <div>
            <form>
                <input
                    placeholder="Digite um filtro."
                    value={busca}
                    onChange={(e) => {setBusca(e.target.value)}}
                    className={styles.busca}
                />
                <button className={styles.botaoBusca}> <AiOutlineSearch/></button> 
                <button className={styles.botaoCriar} onClick = {(e) => {
                    e.preventDefault();
                    setShow(true)}
                }><AiOutlinePlus/></button>  

            </form>
            {
                regiao==="Médicos" || regiao === "Atendentes"? 
                <Modal setShow={setShow} show={show} criar={criar} regiao ={regiao}/>:
                <ModalPaciente 
                    cpfAtual={""} 
                    nomeCompletoAtual={""} 
                    dataNascimentoAtual={""} 
                    enderecoAtual={""} 
                    telefoneAtual={""} 
                    setShow={setShow} show={show}/>
            }
           
              
        </div>
    )
}

export default BarraBusca;