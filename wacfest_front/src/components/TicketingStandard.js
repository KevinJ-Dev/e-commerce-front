import '../stylesheets/TicketingStandard.css';

import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

import standard from '../assets/Standard.png';
// import premium from '../assets/Premium.png';

export default function TicketingStandard(){
    return <div className="container-bloc">
        <div className="container-bg-blue-standard container-text">
            <div className="container-img">
                <Card style={{ width: '34rem' }}>
                    <Card.Img variant="top" src={standard} />
                </Card>
            </div>
            <div className="info-ticketing">
                <h1 className="title-passe">W@CFEST PASSE STANDARD</h1>
                <p className="stay bloc-info">1 séjour au W@CFEST</p>
                <p className="info bloc-info">Infos pratiques <br/>Vendredi 26 aout - Dimanche 28 aout</p>
                <p className="place">Rennes, France</p>
                <p className="price bloc-info">Prix 30,00€</p>
                <Button href="/ticket/standard/payment" variant="danger btn-passe">ACHETER</Button>{' '}
                {/*<img src={standard}/>*/}
            </div>
        </div>
    </div>
}