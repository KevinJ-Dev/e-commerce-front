import '../stylesheets/Ticketing.css';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import standard from '../assets/Standard.png';
import premium from '../assets/Premium.png';

export default function Ticketing(){
    return <div className="container-ticketing">
        <div className="container-bg-blue container-text">
            <p className="title-passe">W@CFEST ETE 2022</p>
            <p className="date-passe">26 au 28 aout</p>
            <Button variant="danger btn-passe">VOIR PLUS</Button>{' '}
            {/*<img src={standard}/>*/}
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={standard} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        <div className="container-bg-yellow container-text">
            <p className="title-passe">W@CFEST ETE 2022</p>
            <p className="date-passe">26 au 28 aout</p>
            <Button variant="danger btn-passe">VOIR PLUS</Button>{' '}
                {/*<img src={premium}/>*/}
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={premium} />
                            </Card>
                        </Col>
                    ))}
                </Row>
        </div>
    </div>
}