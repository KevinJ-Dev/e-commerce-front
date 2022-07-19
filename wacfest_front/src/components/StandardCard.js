import '../stylesheets/Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Standard from '../assets/Standard.png';

   export default function StandardCard() {
        return (
            <div className="d-flex justify-content-center">
            <>
                {[
                    'Light',
                ].map((variant) => (
            <Card id="card" className="text-center"  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: '22rem' }}
                  border="light">
                <Card.Img variant="top" src={Standard} style={{ width: '22rem' }} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
                ))}
            </>
            </div>
        );
    }