import axios from "axios";
import React, { useState } from "react";
import styles from './Modal.module.css'

interface ModalNovaConsultaProps {
    crm:string,
    setCrm: Function
    show:boolean,
    setShow:Function,
    criarConsulta:Function
}

function ModalNovaConsulta({crm, setCrm, criarConsulta,show, setShow}:ModalNovaConsultaProps) {
    
    if(!show) {
        return null;
    }
    return(
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}>Criar consulta</h4>
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
                        await criarConsulta();
                    }}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalNovaConsulta;