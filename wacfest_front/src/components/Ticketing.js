import '../stylesheets/Ticketing.css';
// import '../stylesheets/Button.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import standard from '../assets/Standard.png';
import premium from '../assets/Premium.png';

export default function Ticketing(){
    return <div className="container-ticketing">
        <div className="container-bg-blue container-text">
            <div className="container-passe">
                <Card style={{ width: '34rem' }}>
                    <Card.Img variant="top" src={standard} />
                </Card>
            </div>
            <p className="title-passe">W@CFEST ETE 2022</p>
            <p className="date-passe">26 au 28 aout</p>
            <Button variant="danger btn-passe">VOIR PLUS</Button>{' '}
            {/*<div className="text-center">*/}
            {/*    <a className="dinamic-btn card-btn"><span className={'dinamic-span'}>Buy</span></a>*/}
            {/*</div>*/}
            {/*<img src={standard}/>*/}
        </div>

        <div className="container-bg-yellow container-text">
            <div className="container-passe">
                <Card style={{ width: '34rem' }}>
                    <Card.Img variant="top" src={premium} />
                </Card>
            </div>
            <p className="title-passe">W@CFEST ETE 2022</p>
            <p className="date-passe">26 au 28 aout</p>
            <Button variant="danger btn-passe">VOIR PLUS</Button>{' '}
                {/*<img src={premium}/>*/}
        </div>
    </div>
}