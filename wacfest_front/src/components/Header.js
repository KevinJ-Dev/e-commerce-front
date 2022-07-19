import '../stylesheets/header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/logo_black.png';

export default function Header() {
    return <div className="Header">
        <Navbar bg="light" variant="light">
            <Container>
                {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
                <Nav className="me-auto">
                    <div className="logo">
                        <img src={logo}
                             width="82"
                             height="82"
                        />
                    </div>
                    <Nav.Link href="#ticket">Billetterie</Nav.Link>
                    <Nav.Link href="#shop">Boutique</Nav.Link>
                    <Nav.Link href="#program">Programme</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
}
