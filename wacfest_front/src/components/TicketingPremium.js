import '../stylesheets/TicketingPremium.css';

import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Datajson from '../DataJson.json'

export default function TicketingPremium() {

        return <div className="container-bloc">
            <div className="container-bg-yellow-premium container-text">
                <div className="container-img">
                    <Card style={{width: '34rem'}}>
                        <Card.Img variant="top" src={Datajson.image} />
                    </Card>
                </div>
                <div className="info-ticketing">
                    {
                        Datajson.map(data => {
                            return(
                                <div>
                                   <p >{data.type[1]}</p>
                                   <p>{data.details[1]}</p>
                                   <p>{data.price[1]} euros</p>
                                </div>
                            )
                        })
                    }
                    <Button href="/ticket/premium/payment" variant="danger btn-passe">ACHETER</Button>{' '}
                    {/*<img src={standard}/>*/}
                </div>
            </div>
        </div>

}