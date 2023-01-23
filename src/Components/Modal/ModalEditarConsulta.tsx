import axios from "axios";
import React, { useState } from "react";
import styles from './Modal.module.css'

interface ModalProps {
    id:string,
    statusAtual:string,
    exameAtual: string,
    diagnosticoAtual: string,
    receitaAtual: string,
    setShow:Function,
    show:boolean
}

function Modal({statusAtual, exameAtual, diagnosticoAtual, id ,receitaAtual,setShow, show}:ModalProps) {
    const [status, setStatus] = useState<string>(statusAtual?statusAtual:"");
    const [receita, setReceita] = useState<string>(receitaAtual?receitaAtual:"");
    const [exame, setExame] = useState(exameAtual?exameAtual:"");
    const [diagnostico, setDiagnostico] = useState(diagnosticoAtual?diagnosticoAtual:"");

    async function editar() {
        await axios.patch(`http://localhost:8080/api/v1/medico/finalizar-consulta/${id}`, {
            status:status,
            exame: exame,
            diagnostico: diagnostico,
            receita: receita
        })
    }

    if(!show) {
        return null;
    }

    return(
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}></h4>
                </div>
                <div className={styles.modal_body}>
                    <form className={styles.conteudo}>
                        <select
                        value={status}
                        onChange={(e)=>{setStatus(e.target.value)}}>
                            <option value={"CONCLUIDA"}>CONCLUIDA</option>
                            <option value={"CANCELADA"}>CANCELADA</option>
                        </select>                      

                        <input
                            placeholder="Exame"
                            type="textarea"
                            value={exame}
                            onChange={(e) => {setExame(e.target.value)}}
                        />

                        <input
                            placeholder="Diagnóstico"
                            type="textarea"
                            value={diagnostico}
                            onChange={(e) => {setDiagnostico(e.target.value)}}
                        />

                        <input
                            placeholder="Receita"
                            type="textarea"
                            value={receita}
                            onChange={(e) => {setReceita(e.target.value)}}
                        />
                    </form>
                </div>
                <div className={styles.modal_footer}>
                    <button className={styles.fechar} onClick={() => {setShow(false)}}>Fechar</button>
                    <button className={styles.salvar} onClick={()=>{
                        editar();
                        setShow(false)
                    }}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;