import React, { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styles from '../../Components/Card/CardDetalhe.module.css'
import CardDetalhe from '../../Components/Card/CardDetalhe';
import Modal from "../../Components/Modal/Modal";

function DetalheAtendente() {
    const [show, setShow] = useState<boolean>(false)
    const {id} = useParams();
    const atendentes = require('../../BD/Atendente.json');

    const botoes = (
        <div>
            <button onClick={() => {setShow(true)}} className={styles.botaoEditar}><AiOutlineEdit/></button>
            <button className={styles.botaoApagar}><AiFillDelete/></button>
        </div>
    )

    return(
        <div>
            <CardDetalhe
                regiao="Atendente"
                nomeCompleto={atendentes[ parseInt(id as string)].nomeCompleto}
                email={atendentes[ parseInt(id as string)].email}
                botoes={botoes}
            />
            
        
            <Modal criar={()=>{}}
                nomeAtual={atendentes[ parseInt(id as string)].nomeCompleto} 
                emailAtual={atendentes[ parseInt(id as string)].email}
                senhaAtual = {atendentes[ parseInt(id as string)].senha}
                setShow={setShow}
                show={show}
            />
        </div>
    )
}

export default DetalheAtendente;