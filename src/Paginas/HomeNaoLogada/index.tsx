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
                    </div>
                </div>           
            </div>
            <Footer classe="footerHome" />
        </>
    )
}