import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
    setAuth:Function
}

function Login({setAuth}:LoginProps) {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const navigate = useNavigate();

    function handleLogin(e:any) {
        e.preventDefault();
   //     const atendentesCadastrados:any[] = require('../../BD/Atendente.json');
   //     const medicosCadastrados = require('../../BD/Medico.json');
        const gerentesCadastrados = require('../../BD/Gerente.json');

        /*
        for(let i:number = 0; i < atendentesCadastrados.length; i++) {
            if(atendentesCadastrados[i].email === email && atendentesCadastrados[i].senha === senha) {
                setAuth("Atendente")
            }
        }

        for(let i:number = 0; i < medicosCadastrados.length; i++) {
            if(medicosCadastrados[i].email === email && medicosCadastrados[i].senha === senha) {
                setAuth("Médico")
            }
        }
*/
        for(let i:number = 0; i < gerentesCadastrados.length; i++) {
            if(gerentesCadastrados[i].email === email && gerentesCadastrados[i].senha === senha) {
                setAuth("Gerente")
                navigate('/atendentes')
            }
        }

    }

    return(
        <div>
            <form>
                <h1>Login</h1>  
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
                <button onClick={(e) => {handleLogin(e)}}>Ok</button>
            </form>
                
        </div>
    )
}

export default Login