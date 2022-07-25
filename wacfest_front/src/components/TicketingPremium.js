import '../stylesheets/TicketingPremium.css';

import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

import premium from '../assets/Premium.png';

export default function TicketingPremium(){
    return <div className="container-bloc">
        <div className="container-bg-yellow-premium container-text">
            <div className="container-img">
                <Card style={{ width: '34rem' }}>
                    <Card.Img variant="top" src={premium} />
                </Card>
            </div>
            <div className="info-ticketing">
                <h1 className="title-passe title-passe-premium">W@CFEST PASSE PREMIUM</h1>
                <p className="stay bloc-info">3 séjours au W@CFEST</p>
                <p className="info bloc-info">Infos pratiques <br/>Vendredi 26 aout - Dimanche 28 aout</p>
                <p className="place-premium">Rennes, France</p>
                <p className="price bloc-info">Prix 80,00€</p>
                <Button href="/ticket/premium/payment" variant="danger btn-passe">ACHETER</Button>{' '}
                {/*<img src={standard}/>*/}
            </div>
        </div>
    </div>
}