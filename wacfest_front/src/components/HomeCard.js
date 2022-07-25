import '../stylesheets/Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormValidate from "./FormPay";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';




export default function HomeCard({image}){

    /* for redirect */
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/ticket/standard');
    };

    return (
        <Col>
        <div className="d-flex justify-content-center p-2">
        <>{['dark',].map((variant) => (
                <Card id="card" className="text-center" bg={variant.toLowerCase()}
                          key={variant}
                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                          style={{width: '30rem'}}
                          border={variant.toLowerCase()}>
                    <Card.Img variant="top" src={image} style={{ width: '100%' }}/>
                    <Card.Body>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        {/*<Card.Text>*/}
                        {/*    Some quick example text to build on the card title and make up the*/}
                        {/*    bulk of the card's content.*/}
                        {/*</Card.Text>*/}
                        {/*/!*<Button className="dinamic-btn">Go somewhere</Button>*!/*/}
                        <div className="text-center">
                            <a className="dinamic-btn card-btn"><span className={'dinamic-span'}>Acheter</span></a>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
        </div>
        </Col>
    );
}
