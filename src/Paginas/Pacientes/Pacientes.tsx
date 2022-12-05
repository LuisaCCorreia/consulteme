import BarraBusca from "../../Components/BarraBusca/BarraBusca";
import CardPacientes from "../../Components/Card/CardPaciente";

const listaPacientes = require('../../BD/Paciente.json');

interface Paciente {
    cpf: string,
    nomeCompleto:string,
    dataNascimento: string,
    endereco: string,
    telefone: number,
    doencaCronica?: string
}

function Pacientes () {
    return(
        <div>
            <BarraBusca/>                 
            {listaPacientes.length > 0 && 
                listaPacientes.map(({
                    cpf, 
                    nomeCompleto, 
                    dataNascimento, 
                    endereco, 
                    telefone, 
                    doencaCronica
                }:Paciente, key:number) => {
                    return(
                        <CardPacientes 
                            key = {key} 
                            cpf = {cpf} 
                            nomeCompleto = {nomeCompleto} 
                            dataNascimento = {new Date(dataNascimento)} 
                            endereco = {endereco} 
                            telefone = {telefone}
                            doencaCronica = {doencaCronica}
                        />
                    )
                })}
        </div>
    )
}

export default Pacientes;