import './footer.css';

import IconWhats from '../../assets/whatsapp.png';
import IconInsta from '../../assets/instagram.png';
import IconFace from '../../assets/facebook.png';
import IconLinkedin from '../../assets/linkedin.png';

export default (props: { classe: string | undefined; }) =>
  <div className={props.classe}>
    <div className="contentFooter">
      <h4 className="azul"> Núcleo de Atendimento ao Cliente</h4>
      <div className="divFooter">
        <div>
          <p className="negrito">Fale conosco</p>
          <ul>
            <li>atendimento@consulteme.com.br</li>
            <li>RJ:(21) 2227-8080</li>
            <li>Macaé:(21) 4004-3132</li>
          </ul>
        </div>
        <div>
          <p className="negrito">Horário de Atendimento</p>
          <ul>
            <li>Segunda à Sexta: das 6h às 21h</li>
            <li>Sábado: das 6h às 15h</li>
          </ul>
        </div>
        <div>
          <p className="negrito">Nossas redes sociais</p>
          <div className="redesSociais">
            <img src={IconWhats} alt="Localizacao" className="icon"></img>
            <img src={IconInsta} alt="Localizacao" className="icon"></img>
            <img src={IconFace} alt="Localizacao" className="icon"></img>
            <img src={IconLinkedin} alt="Localizacao" className="icon"></img>
          </div>
        </div>
      </div>
    </div>
  </div>
