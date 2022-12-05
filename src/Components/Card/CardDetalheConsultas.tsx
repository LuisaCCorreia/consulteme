import React from "react";
import styles from './CardDetalhe.module.css'

interface CardStateProps {
    status:string,
    exame: string,
    diagnostico: string,
    receita: string,
    botoes:any
}

function Card(props: CardStateProps) {

    return (
        <div className={styles.card}>
            <div className={styles.card2}>
                <p>Status: {props.status}</p>
                <p>Exame: {props.exame?props.exame:"N/A"}</p>
                <p>Diagnóstico: {props.diagnostico?props.diagnostico:"N/A"}</p>
                <p>Receita médica: {props.receita?props.receita:"N/A"}</p>
                {props.botoes}
            </div>
        </div>
    )
}

export default Card;