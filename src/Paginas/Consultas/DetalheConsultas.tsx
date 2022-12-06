import React, { useState } from "react";
import {  AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styles from '../../Components/Card/CardDetalhe.module.css'
import CardDetalhe from '../../Components/Card/CardDetalheConsultas';
import ModalEditarConsulta from "../../Components/Modal/ModalEditarConsulta";

function DetalheMedico() {
    const [show, setShow] = useState<boolean>(false)
    const {id} = useParams();
    const consultas = require('../../BD/Consulta.json');

    const botoes = (
        <div>
            <button onClick={() => {setShow(true)}} className={styles.botaoEditar}><AiOutlineEdit/></button>
        </div>
    )

    return(
        <div>
            <CardDetalhe
                botoes={botoes}  
                status={consultas[ parseInt(id as string)].status} 
                exame={consultas[ parseInt(id as string)].exame} 
                diagnostico={consultas[ parseInt(id as string)].diagnostico} 
                receita={consultas[ parseInt(id as string)].receita}            
            />
            
            <ModalEditarConsulta
                setShow={setShow}
                show={show}
                statusAtual={""}
                exameAtual={""}
                diagnosticoAtual={""}
                receitaAtual={""} id={id as string}            
            />
        </div>
    )
}

export default DetalheMedico;