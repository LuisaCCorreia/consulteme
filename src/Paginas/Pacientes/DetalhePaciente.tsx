import React, { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styles from '../../Components/Card/CardDetalhe.module.css'
import CardDetalhePaciente from '../../Components/Card/CardDetalhePaciente';
import ModalPaciente from "../../Components/Modal/ModalPaciente";

function DetalhePaciente() {
    const [show, setShow] = useState<boolean>(false)
    const {id} = useParams();
    const pacientes = require('../../BD/Paciente.json');

    const data = new Date(pacientes[ parseInt(id as string)].dataNascimento);

    const dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;

    const botoes = (
        <div>
            <button onClick={() => {setShow(true)}} className={styles.botaoEditar}><AiOutlineEdit/></button>
            <button className={styles.botaoApagar}><AiFillDelete/></button>
        </div>
    )

    return(
        
        <div>
            <CardDetalhePaciente
                botoes={botoes} 
                key={0} 
                cpf={pacientes[ parseInt(id as string)].cpf} 
                nomeCompleto={pacientes[ parseInt(id as string)].nomeCompleto} 
                dataNascimento={dataFormatada} 
                endereco={pacientes[ parseInt(id as string)].endereco} 
                telefone={pacientes[ parseInt(id as string)].telefone}
                doencaCronica={pacientes[ parseInt(id as string)].doencaCronica}
            />
            
            <ModalPaciente
                setShow={setShow}
                show={show} 
                cpfAtual={""} 
                nomeCompletoAtual={""} 
                dataNascimentoAtual={""} 
                enderecoAtual={""} 
                telefoneAtual={""}           
            />
        </div>
    )
}

export default DetalhePaciente;