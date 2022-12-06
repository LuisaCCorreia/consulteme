import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './Modal.module.css'

interface ModalProps {
    cpfAtual: string,
    nomeCompletoAtual:string,
    dataNascimentoAtual: string,
    enderecoAtual: string,
    telefoneAtual: string,
    doencaCronicaAtual?: string,
    setShow:Function,
    show:boolean
}

function Modal({cpfAtual, nomeCompletoAtual, dataNascimentoAtual, enderecoAtual, telefoneAtual, doencaCronicaAtual,setShow, show}:ModalProps) {
    const [cpf, setCpf] = useState<string>(cpfAtual?cpfAtual:"");
    const [nomeCompleto, setNomeCompleto] = useState<string>(nomeCompletoAtual?nomeCompletoAtual:"");
    const [dataNascimento, setdataNascimento] = useState<string>(dataNascimentoAtual?dataNascimentoAtual:"");
    const [endereco, setEndereco] = useState<string>(enderecoAtual?enderecoAtual:"");
    const [telefone, setTelefone] = useState<string>(telefoneAtual?telefoneAtual:"");
    const [doencaCronica, setDoencaCronica] = useState<string>(doencaCronicaAtual?doencaCronicaAtual:"");

    async function criar() {

        if(cpfAtual !== "") {
            const response = await axios.patch(`http://localhost:8080/api/v1/atendente/atualizar-paciente/${cpf}`, {
                cpf: cpf,
                nome: nomeCompleto,
                dtNascimento: dataNascimento,
                endereco: endereco,
                telefone: telefone,
                doencaCronica: doencaCronica
            });

        } else {
            const response = await axios.post(`http://localhost:8080/api/v1/atendente/criar-paciente`, {
                cpf: cpf,
                nome: nomeCompleto,
                dtNascimento: dataNascimento,
                endereco: endereco,
                telefone: telefone,
                doencaCronica: doencaCronica
            });
        }
        
    }


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
                        {
                            cpfAtual===""&&                      
                             <input
                            placeholder="Cpf do paciente"
                            type="text"
                            value={cpf}
                            onChange={(e) => {setCpf(e.target.value)}}
                        />
                        }
 

                        <input
                            placeholder="Nome completo do paciente"
                            type="text"
                            value={nomeCompleto}
                            onChange={(e) => {setNomeCompleto(e.target.value)}}
                        />

                        <input
                            placeholder="Data de nascimento do paciente"
                            type="date"
                            value={dataNascimento}
                            onChange={(e) => {setdataNascimento(e.target.value)}}
                        />

                        <input
                            placeholder="Endereço do paciente"
                            type="textarea"
                            value={endereco}
                            onChange={(e) => {setEndereco(e.target.value)}}
                        />

                        <input
                            placeholder="Telefone do paciente"
                            type="text"
                            value={telefone}
                            onChange={(e) => {setTelefone(e.target.value)}}
                        />

                        <input
                            placeholder="Doença crônica do paciente do paciente (se houver)"
                            type="text"
                            value={doencaCronica}
                            onChange={(e) => {setDoencaCronica(e.target.value)}}
                        />
                    </form>
                </div>
                <div className={styles.modal_footer}>
                    <button className={styles.fechar} onClick={() => {setShow(false)}}>Fechar</button>
                    <button className={styles.salvar} onClick={async () => {
                        setShow(false)
                        await criar();
                    }}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;