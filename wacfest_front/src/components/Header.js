
import '../stylesheets/header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

import logo from '../assets/logo_black.png';

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
            </Container>
        </Navbar>

    </div>
}
