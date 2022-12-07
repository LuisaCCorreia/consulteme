import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './Modal.module.css'

interface ModalProps {
    nomeAtual?: string,
    emailAtual?: string,
    regiao?:string
    criar:Function,
    setShow:Function,
    show:boolean
}

function Modal({nomeAtual, emailAtual,criar,regiao,setShow, show}:ModalProps) {
    const [nome, setNome] = useState<string>(nomeAtual?nomeAtual:"");
    const [email, setEmail] = useState<string>(emailAtual?emailAtual:"");
    const [senha, setSenha] = useState<string>("");
    const [crm, setCrm] = useState("");
    

    useEffect(()=>{
        if(nomeAtual!== undefined) {
            setNome(nomeAtual);
        }

        if(emailAtual!== undefined) {
            setEmail(emailAtual);
        }

    },[nomeAtual, emailAtual])

   
   
    if(!show) {
        return null;
    }
    return(
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}>{nomeAtual?"Editar": "Criar"} {regiao}</h4>
                </div>
                <div className={styles.modal_body}>
                    <form className={styles.conteudo}>
                        {
                            (regiao === "Médicos" && !nomeAtual) &&
                                <input
                                    placeholder="CRM do Médico"
                                    type="text"
                                    value={crm}
                                    onChange={(e) => {setCrm(e.target.value)}}
                        />
                        }
        
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

                        {
                            !nomeAtual&&
                                <input
                                    placeholder="Senha"
                                    type="password"
                                    value={senha}
                                    onChange={(e) => {setSenha(e.target.value)}}
                                />
                        }
                       
                    </form>
                </div>
                <div className={styles.modal_footer}>
                    <button className={styles.fechar} onClick={() => {setShow(false)}}>Fechar</button>
                    <button className={styles.salvar} onClick={async ()=>{
                         if(regiao === "Médicos") {
                            criar(email, senha, nome, crm);
                        } else {
                            criar(email, senha, nome)
                        }
                        setShow(false);
                        await axios.post('http://localhost:5000/', {
                            ocupacao: "Gerente",
                            acao: `Criou ${nome} na aba ${regiao}`,
                            nome: "Gerente logado"
                        });
                       
                        }}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;