import React, { useState } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import styles from './BarraBusca.module.css';
import Modal from "../../Components/Modal/Modal";

function BarraBusca() {
    const [busca, setBusca] = useState<string>("");
    const [show, setShow] = useState<boolean>(false)
    return(
        <div>
            <form>
                <input
                    placeholder="Digite um filtro."
                    value={busca}
                    onChange={(e) => {setBusca(e.target.value)}}
                    className={styles.busca}
                />
                <button className={styles.botaoBusca}> <AiOutlineSearch/></button> 
                <button className={styles.botaoCriar} onClick = {(e) => {e.preventDefault();setShow(true)}}><AiOutlinePlus/></button>  

            </form>
            <Modal setShow={setShow} show={show}/>
              
        </div>
    )
}

export default BarraBusca;