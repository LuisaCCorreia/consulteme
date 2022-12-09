import React from "react";
import styles from './Card.module.css'
import {AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


interface CardStateProps {
    cpf: string,
    nomeCompleto:string,
    dataNascimento: Date,
    endereco: string,
    telefone: number,
    doencaCronica?: string
    key: number
}


function Card(props: CardStateProps) {

const navigate = useNavigate();
    const dataFormatada = `${props.dataNascimento.getDate() + 1}/${props.dataNascimento.getMonth() + 1}/${props.dataNascimento.getFullYear()}`;

    function onClick() {
       navigate(`/pacientes/${props.cpf}`)
        
    }

    return (
        <div key={props.key} className={styles.card}>
            <div className={styles.card2}>
                <p>Nome completo: {props.nomeCompleto}</p>
                <p>CPF: {props.cpf}</p>
                <p>Data de nascimento: {dataFormatada}</p>
                <p>Endereço: {props.endereco}</p>
                <p>Telefone: {props.telefone}</p>
                <p>Doença crônica: {props.doencaCronica?props.doencaCronica:"N/A"}</p>
                
                <button className={styles.botaoDetalhe} onClick={onClick}><AiOutlineEye/></button>
            </div>
        </div>
    )
}

export default Card;