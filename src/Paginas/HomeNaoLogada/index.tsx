import { Link } from 'react-router-dom';
import './home.css';

import Banner from '../../assets/banner (2).png';
import IlusMedicos from '../../assets/Ilustracao medicos (1).png';
import IlusConsulta from '../../assets/Ilustracao consulta.png';
import IlusAvaliacao from '../../assets/Ilustracao avaliação.png';


import Header from '../../Components/Header/HeaderNaoLogado';
import Footer from '../../Components/Footer/footer';

export default function HomeNaoLogada() {
    document.title = "ConsulteMe";
    return (
        <>
            <Header />

            <div className="divBanner">
                <img src={Banner} width="100%" alt="banner de marketing" id="imgBanner"></img>
                <h1 id="textoBanner1">Os melhores médicos e consultórios </h1>
                <h1 id="textoBanner2">você só encontra aqui</h1>
                <Link to="/loginPaciente">
                    <button className="button">Veja nossos médicos</button>
                </Link>
            </div>

            <div className="divBody">
                <h1 className="azul">No ConsulteMe você tem acesso a tudo que precisa</h1>
                <h1 className="azul">para marcar suas consultas com tranquilidade</h1>
                <div className="content">
                    <img src={IlusMedicos} width="100%" alt="Ilustração de três medicos" id="ilusMedicos"></img>
                    <div>
                        <h4>Veja todas as informações</h4>
                        <h4>sobre nossos médicos e consultórios</h4>
                        <p className="pBody">Nome, CRM, especialidades, classificação, planos aceitos, </p>
                        <p>valor da consulta, consultórios em que atende e horário de atendimento</p>
                        <button className="buttonBody">Veja nossos consultórios</button>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h4>Marque suas consultas com</h4>
                        <h4>facilidade, aqui pelo site</h4>
                        <p className="pBody">Acesse a página do médico que deseja marcar uma consulta, </p>
                        <p>visualize sua agenda com os horários disponíveis e marque a consulta!</p>
                        <Link to="/loginPaciente">
                            <button className="buttonBody">Veja nossos médicos</button>
                        </Link>
                    </div>
                    <img src={IlusConsulta} width="100%" alt="Ilustração de três medicos" id="ilusConsulta"></img>
                </div>
                <div className="content">
                    <img src={IlusAvaliacao} width="100%" alt="Ilustração de três medicos" id="ilusAvaliacao"></img>
                    <div>
                        <h4>Veja a classificação que outros usuários</h4>
                        <h4>deram aos médicos e consultórios</h4>
                        <p className="pBody">Depois de uma consulta, avalie ela e o médico, e contribua para </p>
                        <p>melhorarmos nossos consultórios e a sua experiência em nosso centro</p>
                        <button className="buttonBody">Avalie suas consultas</button>
                    </div>
                </div>                
            </div>
            <Footer classe="footerHome" />
        </>
    )
}