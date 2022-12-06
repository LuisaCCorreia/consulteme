import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styles from '../../Components/Card/CardDetalhe.module.css'
import CardDetalhe from '../../Components/Card/CardDetalhe';
import Modal from "../../Components/Modal/Modal";
import axios from "axios";

function DetalheMedico() {
    const [show, setShow] = useState<boolean>(false)
    const {id} = useParams();
    const [listaMedicos, setListaMedicos] = useState<any>([]);

    async function carregarTodosMedicos() {

        const response = await axios.get(`http://localhost:8080/api/v1/gerente/buscar-medico/${id}`);

        setListaMedicos(response.data)
    }

    async function editar(email:string, senha:string, nome:string) {

        const response = await axios.patch(`http://localhost:8080/api/v1/gerente/atualizar-medico/${id}`, {
            email: email, 
            senha: senha, 
            nome: nome, 
        });

        await axios.post('http://localhost:5000/', {
                            ocupacao: "Gerente",
                            acao: `Editou o médico ${nome}`,
                            nome: "Gerente logado"
                        })

        setListaMedicos(response.data)
    }

    async function apagar() {

        const response = await axios.delete(`http://localhost:8080/api/v1/gerente/deletar-medico/${id}`);

        await axios.post('http://localhost:5000/', {
                            ocupacao: "Gerente",
                            acao: `Apagou o médico ${listaMedicos.nome}`,
                            nome: "Gerente logado"
                        })

        setListaMedicos({});
    }


    useEffect(()=>{
        carregarTodosMedicos();
    },[])

    const botoes = (
        <div>
            <button onClick={() => {setShow(true)}} className={styles.botaoEditar}><AiOutlineEdit/></button>
            <button className={styles.botaoApagar} onClick={apagar}><AiFillDelete/></button>
        </div>
    )

    return(
        <div>
            <CardDetalhe
                regiao="Médico"
                nome={listaMedicos.nome}
                email={listaMedicos.email}
                botoes={botoes}
            />
            
            <Modal criar={editar}
                nomeAtual={listaMedicos.nome} 
                emailAtual={listaMedicos.email}
                senhaAtual = {listaMedicos.senha}
                setShow={setShow}
                show={show}
            />
        </div>
    )
}

export default DetalheMedico;