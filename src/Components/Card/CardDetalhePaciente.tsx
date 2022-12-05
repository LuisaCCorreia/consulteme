import React from "react";
import styles from './CardDetalhe.module.css'

interface CardStateProps {
    cpf: string,
    nomeCompleto:string,
    dataNascimento: string,
    endereco: string,
    telefone: number,
    doencaCronica?: string
    key: number
    botoes:any
}

function Card(props: CardStateProps) {

    return (
        <div className={styles.card}>
            <div className={styles.card2}>
            <p>Nome completo: {props.nomeCompleto}</p>
                <p>CPF: {props.cpf}</p>
                <p>Data de nascimento: {props.dataNascimento}</p>
                <p>Endereço: {props.endereco}</p>
                <p>Telefone: {props.telefone}</p>
                <p>Doença crônica: {props.doencaCronica?props.doencaCronica:"N/A"}</p>
                {props.botoes}
            </div>
        </div>
    )
}

export default Card;