import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/instagram.png'
import youtube from '../assets/img/youtube.png'
import twitter from '../assets/img/twitter.png'
import { Link } from 'react-router-dom';
import "../style/Footer.css"
import "../index.css"

export default function Footer(){
    return (
        <footer>
            <div id="container1">
                <div id="links">
                    <ul>
                        <li><Link to="/nuestro-club">Información</Link></li>
                        <li><Link to="/licencias">Links de Interés</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li>Síguenos</li> 
                    </ul>
                </div>

                <div id="social">
                    <a title="facebook" href="https://www.facebook.com/people/Karate-Wadokan-Dos-Hermanas/100063655906913/" target="_blank"><img src={facebook} alt="facebook"/></a>
                    <a title="youtube" href="" target="_blank"><img src={youtube} alt="youtube"/></a>
                    <a title="instagram" href="https://www.instagram.com/karatewadokan/" target="_blank"><img src={instagram} lt="instagram"/></a>
                    <a title="twitter" href="" target="_blank"><img src={twitter} alt="twitter"/></a>
                </div>
            </div>
            <div id="container2">
                <div id="copyright">
                    <p>©Copyright <strong>Wadokan</strong>. Todos los derechos reservados</p>
                </div>

                <div id="legal">
                    <Link to="/aviso-legal" id="politica">Aviso Legal</Link>
                    <Link to="/politica-privacidad" id="privacidad">Política de Privacidad</Link>
                    <Link to="/politica-cookies" id="cookies">Política de Cookies</Link>
                </div>
            </div>
        </footer>
    )
}