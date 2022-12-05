import React, { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styles from '../../Components/Card/CardDetalhe.module.css'
import CardDetalhe from '../../Components/Card/CardDetalheConsultas';
import Modal from "../../Components/Modal/Modal";

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
            
            <Modal criar={()=>{}}
                nomeAtual={consultas[ parseInt(id as string)].nomeCompleto} 
                emailAtual={consultas[ parseInt(id as string)].email}
                senhaAtual = {consultas[ parseInt(id as string)].senha}
                setShow={setShow}
                show={show}
            />
        </div>
    )
}

export default DetalheMedico;