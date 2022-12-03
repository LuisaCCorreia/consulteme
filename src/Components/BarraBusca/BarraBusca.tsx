import React, { useState } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import styles from './BarraBusca.module.css'

function BarraBusca() {
    const [busca, setBusca] = useState<string>("")
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
                <button className={styles.botaoCriar}><AiOutlinePlus/></button>  

            </form>
              
    </div>
    )
}

export default BarraBusca;