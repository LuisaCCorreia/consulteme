import React, { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styles from '../../Components/Card/CardDetalhe.module.css'
import CardDetalhe from '../../Components/Card/CardDetalhe';
import Modal from "../../Components/Modal/Modal";

function DetalheMedico() {
    const [show, setShow] = useState<boolean>(false)
    const {id} = useParams();
    const medicos = require('../../BD/Medico.json');

    const botoes = (
        <div>
            <button onClick={() => {setShow(true)}} className={styles.botaoEditar}><AiOutlineEdit/></button>
            <button className={styles.botaoApagar}><AiFillDelete/></button>
        </div>
    )

    return(
        <div>
            <CardDetalhe
                regiao="Médico"
                nomeCompleto={medicos[ parseInt(id as string)].nomeCompleto}
                email={medicos[ parseInt(id as string)].email}
                botoes={botoes}
            />
            
            <Modal criar={()=>{}}
                nomeAtual={medicos[ parseInt(id as string)].nomeCompleto} 
                emailAtual={medicos[ parseInt(id as string)].email}
                senhaAtual = {medicos[ parseInt(id as string)].senha}
                setShow={setShow}
                show={show}
            />
        </div>
    )
}

export default DetalheMedico;