import '../stylesheets/Footer.css';

import logo from '../assets/logo_black.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import {useNavigate} from "react-router-dom";

export default function Header(){
    let navigate = useNavigate();
    return <div className="footer-container">
        <div className="footer">
            <div class="container_footer">
                <img src={logo} width="130" height="130" onClick={() => {
                    navigate('/');}}/>

                <div class="bloc">
                    <h3>NAVIGATION</h3>
                    <div className="form-blue"></div>
                    <ul class="list_bloc_footer">
                        <li><a class="list_footer" href="/ticket">BILLETTERIE</a></li>
                        <li><a class="list_footer" href="/shop">BOUTIQUE</a></li>
                        <li><a class="list_footer" href="/program">PROGRAMME</a></li>
                    </ul>
                </div>

                <div class="bloc">
                    <h3>SOCIÉTÉ</h3>
                    <div className="form-yellow"></div>
                    <ul class="list_bloc_footer">
                        <li><a class="list_footer" href="#">CGU</a></li>
                        <li><a className="list_footer" href="#">CGV</a></li>
                        <li><a className="list_footer" href="#">CONFIDENTIALITÉ</a></li>
                    </ul>
                </div>

                <div class="bloc">
                    <h3>RÉSEAUX SOCIAUX</h3>
                    <div className="form-red"></div>
                    <ul class="list_bloc_footer">
                        <li><a className="list_footer" href="#facebook"><img src={facebook} width="52" height="52"/></a></li>
                        <li><a className="list_footer" href="#instagram"><img src={instagram} width="52" height="52"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
}