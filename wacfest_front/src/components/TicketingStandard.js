import '../stylesheets/TicketingStandard.css';

import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

import standard from '../assets/Standard.png';
// import premium from '../assets/Premium.png';

import Form from 'react-bootstrap/Form';
import Datajson from "../DataJson.json";

export default function TicketingStandard(){
    return <div className="container-bloc">
        <div className="container-bg-blue-standard container-text">
            <div className="container-img">
                <Card style={{ width: '34rem' }}>
                    <Card.Img variant="top" src={standard} />
                </Card>
            </div>
            <div className="info-ticketing">
                {
                    Datajson.map(data => {
                        return(
                            <div>
                                <p >{data.type[0]}</p>
                                <p>{data.details[0]}</p>
                                <p>{data.price[0]} euros </p>
                            </div>
                        )
                    })
                }
                <Button href="/ticket/standard/payment" variant="danger btn-passe">ACHETER</Button>{' '}
                {/*<img src={standard}/>*/}

                <Form className="date-select">
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Vendredi"
                                name="date"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Samedi"
                                name="date"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label="Dimanche"
                                name="date"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                </Form>
            </div>
        </div>
    </div>
}