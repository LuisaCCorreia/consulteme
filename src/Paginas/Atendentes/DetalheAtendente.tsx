import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styles from '../../Components/Card/CardDetalhe.module.css'
import CardDetalhe from '../../Components/Card/CardDetalhe';
import Modal from "../../Components/Modal/Modal";
import axios from "axios";

function DetalheAtendente() {
    const [show, setShow] = useState<boolean>(false)
    const {id} = useParams();
    
    const [atendente, setAtendente] = useState<any>([]);

    async function carregarTodosAtendentes() {

        const response = await axios.get(`http://localhost:8080/api/v1/gerente/buscar-atendente/${id}`);

        setAtendente(response.data)
    }

    async function editar(email:string, senha:string, nome:string) {

        const response = await axios.patch(`http://localhost:8080/api/v1/gerente/atualizar-atendente/${id}`, {
            email: email, 
            senha: senha, 
            nome: nome, 
        });

        setAtendente(response.data)
    }

    async function apagar() {

        const response = await axios.delete(`http://localhost:8080/api/v1/gerente/deletar-atendente/${id}`);

        setAtendente({});
    }

    useEffect(()=>{
        carregarTodosAtendentes();
    },[])


    const botoes = (
        <div>
            <button onClick={() => {setShow(true)}} className={styles.botaoEditar}><AiOutlineEdit/></button>
            <button className={styles.botaoApagar} onClick={async () => {
                apagar();
                await axios.post('http://localhost:5000/', {
                            ocupacao: "Gerente",
                            acao: `Apagou o atendente ${atendente.nome}`,
                            nome: "Gerente logado"
                        })    
            }}><AiFillDelete/></button>
        </div>
    )

    return(
        <div>
            <CardDetalhe
                regiao="Atendente"
                nome={atendente.nome}
                email={atendente.email}
                botoes={botoes}
            />
            
        
            <Modal criar={editar}
                nomeAtual={atendente.nome} 
                emailAtual={atendente.email}
                senhaAtual = {atendente.senha}
                setShow={setShow}
                show={show}
            />
        </div>
    )
}

export default DetalheAtendente;