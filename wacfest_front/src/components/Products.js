import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";

export default function ProductsCard({image}){
    return(

            <div >
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            <Card style={{ width: '22rem' }}>
                                <Card.Img variant="top" src={image} style={{ width: '20rem' }} />
                                <Card.Body className="text-center">
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text >
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>


    );
}