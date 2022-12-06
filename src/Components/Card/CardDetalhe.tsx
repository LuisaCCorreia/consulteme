import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './CardDetalhe.module.css'

interface CardStateProps {
    regiao:string,
    nome:string,
    email:string
    botoes:any
}

function Card(props: CardStateProps) {
    
    return (
        <div className={styles.card}>
            <div className={styles.card2}>
                <h1>Detalhes do {props.regiao}</h1>
                <p>Nome completo: {props.nome}</p>
                <p>E-mail: {props.email}</p>
                {props.botoes}
            </div>
        </div>
    )
}

export default Card;