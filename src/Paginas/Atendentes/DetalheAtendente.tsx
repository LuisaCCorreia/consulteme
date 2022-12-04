import React from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styles from '../../Components/Card/CardDetalhe.module.css'
import CardDetalhe from '../../Components/Card/CardDetalhe'

function DetalheAtendente() {
    const {id} = useParams();
    console.log("Params:", id)
    const atendentes = require('../../BD/Atendente.json');

    const botoes = (
        <div>
            <button className={styles.botaoEditar}><AiOutlineEdit/></button>
            <button className={styles.botaoApagar}><AiFillDelete/></button>
        </div>
    )

    return(
        <CardDetalhe
            regiao="Atendente"
            nomeCompleto={atendentes[ parseInt(id as string)].nomeCompleto}
            email={atendentes[ parseInt(id as string)].email}
            botoes={botoes}
        />
    )
}

export default DetalheAtendente;