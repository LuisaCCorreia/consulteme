import React from "react";
import styles from './CardDetalhe.module.css'

interface CardStateProps {
    regiao:string,
    nomeCompleto:string,
    email:string
    botoes:any
}

function Card(props: CardStateProps) {

    return (
        <div className={styles.card}>
            <div className={styles.card2}>
                <h1>Detalhes do {props.regiao}</h1>
                <p>Nome completo: {props.nomeCompleto}</p>
                <p>E-mail: {props.email}</p>
                {props.botoes}
            </div>
        </div>
    )
}

export default Card;