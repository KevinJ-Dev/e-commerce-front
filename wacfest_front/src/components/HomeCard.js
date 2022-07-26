import '../stylesheets/Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormValidate from "./FormPay";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Premium from '../assets/Premium.png'
import Standard from "../assets/Standard.png";

export default function HomeCard({image}){
    const navigate = useNavigate();
    const navigateToStandardPass = () => {
        navigate('/ticket/standard');
    };
    const navigateToPremiumPass = () => {
        navigate('/ticket/premium');
    };
    return (
        <Col className="d-flex p-2 justify-content-between">
        <div>
        <>{['dark',].map((variant) => (
                <Card id="card" className="text-center" bg={variant.toLowerCase()}
                          key={variant}
                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                          style={{width: '30rem'}}
                          border={variant.toLowerCase()}>
                    <Card.Img variant="top" src={Standard} style={{ width: '100%' }}/>
                    <Card.Body>
                        <div className="text-center">
                            <a onClick={navigateToStandardPass} className="dinamic-btn card-btn"><span className={'dinamic-span'}>Acheter</span></a>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
        </div>

        <div>
        <>{['dark',].map((variant) => (
                <Card id="card" className="text-center" bg={variant.toLowerCase()}
                          key={variant}
                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                          style={{width: '30rem'}}
                          border={variant.toLowerCase()}>
                    <Card.Img variant="top" src={Premium} style={{ width: '100%' }}/>
                    <Card.Body>
                        <div className="text-center">
                            <a onClick={navigateToPremiumPass} className="dinamic-btn card-btn"><span className={'dinamic-span'}>Acheter</span></a>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
        </div>
        </Col>
    );
}
