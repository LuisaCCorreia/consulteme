import React from "react";
import styles from './Card.module.css'
import {AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


interface CardStateProps {
    id: string,
    status:string,
    exame: string,
    diagnostico: string,
    receita: string,
    key: number
}


function CardConsulta(props: CardStateProps) {

const navigate = useNavigate();

    function onClick() {
       navigate(`/consultas/${props.id}`)
        
    }

    return (
        <div key={props.key} className={styles.card}>
            <div className={styles.card2}>
                <p>Status: {props.status}</p>
                <p>Exame: {props.exame}</p>
                <p>Diagnóstico: {props.diagnostico}</p>
                <p>Receita: {props.receita}</p>
                
                <button className={styles.botaoDetalhe} onClick={onClick}><AiOutlineEye/></button>
            </div>
        </div>
    )
}

export default CardConsulta;