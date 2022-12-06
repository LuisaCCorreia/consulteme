import axios from "axios";
import React, { useState } from "react";
import styles from './Modal.module.css'

interface ModalNovaConsultaProps {
    crm:string,
    setCrm: Function
    show:boolean,
    setShow:Function
}

function ModalNovaConsulta({crm, setCrm, show, setShow}:ModalNovaConsultaProps) {
    
    if(!show) {
        return null;
    }
    return(
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}>Título</h4>
                </div>
                <div className={styles.modal_body}>
                    <form className={styles.conteudo}>
                        <input
                            placeholder="CRM do médico"
                            type="text"
                            value={crm}
                            onChange={(e) => {setCrm(e.target.value)}}
                        />

                    </form>
                </div>
                <div className={styles.modal_footer}>
                    <button className={styles.fechar} onClick={() => {setShow(false)}}>Fechar</button>
                    <button className={styles.salvar} onClick={async () => {
                        setShow(false)
                        await axios.post('http://localhost:5000/', {
                            ocupacao: "Atendente",
                            acao: `Criou a consulta uma consulta`,
                            nome: "Atendente logado"
                        })
                    }}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalNovaConsulta;