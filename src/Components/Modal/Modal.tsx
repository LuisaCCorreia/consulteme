import axios from "axios";
import React, { useState } from "react";
import styles from './Modal.module.css'

interface ModalProps {
    nomeAtual?: string,
    emailAtual?: string,
    senhaAtual?:string,
    regiao?:string
    criar:Function,
    setShow:Function,
    show:boolean
}

function Modal({nomeAtual, emailAtual, senhaAtual,criar, regiao,setShow, show}:ModalProps) {
    const [nome, setNome] = useState<string>(nomeAtual?nomeAtual:"");
    const [email, setEmail] = useState<string>(emailAtual?emailAtual:"");
    const [senha, setSenha] = useState<string>(senhaAtual?senhaAtual:"");

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
                            value={nome}
                            onChange={(e) => {setNome(e.target.value)}}
                        />

                        <input
                            placeholder="E-mail"
                            type="text"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />

                        <input
                            placeholder="Senha"
                            type="password"
                            value={senha}
                            onChange={(e) => {setSenha(e.target.value)}}
                        />
                    </form>
                </div>
                <div className={styles.modal_footer}>
                    <button className={styles.fechar} onClick={() => {setShow(false)}}>Fechar</button>
                    <button className={styles.salvar} onClick={async ()=>{
                        await axios.post('http://localhost:5000/', {
                            ocupacao: "Gerente",
                            acao: `Criou ${nome} na aba ${regiao}`,
                            nome: "Gerente logado"
                        })
                        if(regiao === "Médicos") {
                            criar(email, senha, nome, "12441");
                        } else {
                            criar(email, senha, nome)
                        }
                        
                        setShow(false)
                        }}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;