import React, { useState } from "react";
import styles from './Card.module.css'
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ModalEditarConsulta from "../Modal/ModalEditarConsulta";


interface CardStateProps {
    id: string,
    status:string,
    exame: string,
    diagnostico: string,
    receita: string,
    key: number
}


function CardConsulta(props: CardStateProps) {
    const [show, setShow] = useState(false)

const navigate = useNavigate();

    function mostrarModalEdicao() {
       setShow(true) 
    }

    return (
        <div key={props.key} className={styles.card}>
            <div className={styles.card2}>
                <p>Status: {props.status}</p>
                <p>Exame: {props.exame}</p>
                <p>Diagnóstico: {props.diagnostico}</p>
                <p>Receita: {props.receita}</p>
                
                <button className={styles.botaoDetalhe} onClick={mostrarModalEdicao}><AiOutlineEdit/></button>
            </div>
            <ModalEditarConsulta 
                id={props.id} 
                statusAtual={props.status} 
                exameAtual={props.exame} 
                diagnosticoAtual={props.diagnostico} 
                receitaAtual={props.receita} 
                setShow={setShow} 
                show={show}/>
        </div>
    )
}

export default CardConsulta;