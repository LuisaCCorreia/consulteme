import React from "react";
import styles from './Card.module.css'
import {AiFillDelete, AiOutlineEdit, AiOutlinePlus} from 'react-icons/ai'

type Regiao = "Atendente" | "Médico" | "Paciente" | "Consulta";

interface CardStateProps {
    regiao: Regiao,
    id: string,
    nomeCompleto:string,
    email:string
    key: number
}


function Card(props: CardStateProps) {

    const botoes = (
        props.regiao === "Atendente" ||  props.regiao === "Médico"?
        <div>
            <button className={styles.botaoEditar}><AiOutlineEdit/></button>
            <button className={styles.botaoApagar}><AiFillDelete/></button>
    </div>: props.regiao === "Paciente"? <div>
            <button className={styles.botaoEditar}><AiOutlineEdit/></button>
            <button className={styles.botaoAdicionar}><AiOutlinePlus/></button>
    </div>: <div>
    <button className={styles.botaoEditar}><AiOutlineEdit/></button>
           
    </div>
    )
    return (
        <div key={props.key} className={styles.card}>
            <div className={styles.card2}>
                <p>Nome completo: {props.nomeCompleto}</p>
                <p>E-mail: {props.email}</p>
                {botoes}
            </div>
        </div>
    )
}

export default Card;