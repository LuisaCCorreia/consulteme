import React, { useState } from "react";
import styles from './Modal.module.css'

interface ModalNovaConsultaProps {
    cpf:string,
    nomeMedico:string
    show:boolean,
    setShow:Function
}

function ModalNovaConsulta({cpf, show, setShow}:ModalNovaConsultaProps) {
    const [nomeMedico, setNomeMedico] = useState<string>("");
    
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
                            placeholder="Nome completo"
                            type="text"
                            value={nomeMedico}
                            onChange={(e) => {setNomeMedico(e.target.value)}}
                        />

                    </form>
                </div>
                <div className={styles.modal_footer}>
                    <button className={styles.fechar} onClick={() => {setShow(false)}}>Fechar</button>
                    <button className={styles.salvar}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalNovaConsulta;