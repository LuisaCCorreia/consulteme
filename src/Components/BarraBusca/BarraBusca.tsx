import React, { useState } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import styles from './BarraBusca.module.css';
import Modal from "../../Components/Modal/Modal";
import axios from 'axios';

interface BarraBuscaProps {
    regiao:string
}

function BarraBusca({regiao}:BarraBuscaProps) {
    const [busca, setBusca] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);

    function criar(email:string, senha:string, nome:string) {
        if(regiao === "Atendentes") {
            axios.post('http://localhost:8080/api/v1/gerente/criar-atendente', {
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
                    e.preventDefault();setShow(true)}}><AiOutlinePlus/></button>  

            </form>
            <Modal setShow={setShow} show={show} criar={criar} />
              
        </div>
    )
}

export default BarraBusca;