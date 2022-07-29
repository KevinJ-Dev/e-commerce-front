import '../stylesheets/Card.css'
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormValidate from "./FormPay";
import {useNavigate} from 'react-router-dom';


export default function HomeCard({image, redirectPath}){
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <Col className="d-flex p-2 justify-content-center">
        <div>
        <>{['dark',].map((variant) => (
                <Card id="card" className="text-center" bg={variant.toLowerCase()}
                          key={variant}
                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                          style={{width: '30rem'}}
                          border={variant.toLowerCase()}>
                    <Card.Img variant="top" src={image} style={{ width: '100%' }}/>
                    <Card.Body>
                        <div className="text-center">
                            <a onClick={() => navigateTo(redirectPath)} className="dynamic-btn card-btn"><span className={'dynamic-span'}>Acheter</span></a>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
        </div>
        </Col>
    );
}
