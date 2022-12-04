import React from "react";
import styles from './Card.module.css'
import {AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

type Regiao = "Atendente" | "Médico" | "Paciente" | "Consulta";

interface CardStateProps {
    regiao: Regiao,
    id: string,
    nomeCompleto:string,
    email:string
    key: number
}


function Card(props: CardStateProps) {

    const navigate = useNavigate();

    function onClick() {
        navigate(`/atendentes/${props.id}`)
    }

    return (
        <div key={props.key} className={styles.card}>
            <div className={styles.card2}>
                <p>Nome completo: {props.nomeCompleto}</p>
                <p>E-mail: {props.email}</p>
                <button className={styles.botaoDetalhe} onClick={onClick}><AiOutlineEye/></button>
            </div>
        </div>
    )
}

export default Card;