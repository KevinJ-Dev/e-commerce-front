import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";

export default function ProductsCard({image, title, des}){
    return(

            <div className="p-4" >
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            <Card style={{ width: '22rem' }}>
                                <Card.Img variant="top" src={image} style={{ width: '20rem' }} />
                                <Card.Body className="text-center">
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>{des}</Card.Text>
                                    <Button variant="dark">Acheter</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>


    );
}