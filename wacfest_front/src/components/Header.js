import '../stylesheets/header.css';
import LogoBlack from '../assets/logo_black.png';

export default function Header() {
    return <div className="Header">
        <div className="container-header">
            <div id="NavLogo">
                <img src={LogoBlack} alt='Logo' id="logo-black"/>
            </div>

            <div className="NavBar">
                <div className="NavItem"><a href=""><h2>Billetterie</h2></a></div>
                <div className="NavItem"><a href=""><h2>Boutique</h2></a></div>
                <div className="NavItem"><a href=""><h2>Programme</h2></a></div>
            </div>

            <div>Panier</div>

            </div>
        </div>
}
