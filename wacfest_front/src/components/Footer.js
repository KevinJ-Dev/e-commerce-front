import '../stylesheets/Footer.css';

import logo from '../assets/logo_black.png';

export default function Header(){
    return <div className="footer-container">
        {/*<img src={logo}*/}
        {/*     width="82"*/}
        {/*     height="82"*/}
        {/*/>*/}

        <div className="footer">
            <div class="container_footer">
                <img src={logo}
                     width="82"
                     height="82"
                />
                <div class="bloc">
                    <h3>NAVIGATION</h3>
                    <ul class="list_bloc_footer">
                        <li><a class="list_footer" href="#">BILLETTERIE</a></li>
                        <li><a class="list_footer" href="#">BOUTIQUE</a></li>
                        <li><a class="list_footer" href="#">PROGRAMME</a></li>
                    </ul>
                </div>
                <div class="bloc">
                    <h3>SOCIÉTÉ</h3>
                    <ul class="list_bloc_footer">
                        <li><a class="list_footer" href="#">CGU</a></li>
                        <li><a className="list_footer" href="#">CGV</a></li>
                        <li><a className="list_footer" href="#">CONFIDENTIALITÉ</a></li>
                    </ul>
                </div>
                <div class="bloc">
                    <h3>RÉSEAUX SOCIAUX</h3>
                    <ul class="list_bloc_footer">
                        <li><a class="list_footer" href="#">logo fb</a></li>
                        <li><a class="list_footer" href="#">logo insta</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
}