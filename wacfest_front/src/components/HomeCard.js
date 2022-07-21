import '../stylesheets/Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";


export default function HomeCard({image, title, text}){
    return (
        <Col>
        <div className="d-flex p-4 justify-content-center">
        <>
            {[
                'Light',
            ].map((variant) => (
                <Card id="card" className="text-center" bg={variant.toLowerCase()}
                          key={variant}
                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                          style={{ width: '22rem' }}
                          border='light'>
                    <Card.Img variant="top" src={image} style={{ width: '22rem' }}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                        <Button variant="dark">Acheter</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
        </div>
        </Col>
    );

}