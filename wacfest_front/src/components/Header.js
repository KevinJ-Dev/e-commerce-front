
import '../stylesheets/header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../assets/logo_black.png';
import panier from '../assets/panier.png';
import person from '../assets/person.png';

export default function Header() {
    let navigate = useNavigate();

    return <div className="Header">
        <Navbar bg="light" variant="light">
            <Container>
                <img src={logo} width="82" height="82" onClick={() => {
                         navigate('/');}}/>

                <Nav className="me-auto">
                    <Nav.Link href="/ticket">Billetterie</Nav.Link>
                    <Nav.Link href="/shop">Boutique</Nav.Link>
                    <Nav.Link href="/program">Programme</Nav.Link>
                </Nav>
                <div className="container">
                    <NavDropdown title="Compte" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/login">Connection</NavDropdown.Item>
                        <NavDropdown.Item href="/register">Inscrption</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Container>
            <div className="container">
                <Nav.Link href="/panier">Panier</Nav.Link>
            </div>
        </Navbar>

    </div>
}
