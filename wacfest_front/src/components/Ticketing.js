import '../stylesheets/Ticketing.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import standard from '../assets/Standard.png';
import premium from '../assets/Premium.png';
import Datajson from "../DataJson.json";

export default function Ticketing(){
    return <div className="container-ticketing">
        <div className="container-bg-blue container-text">
            <div className="container-passe">
                <Card style={{ width: '34rem' }}>
                    <Card.Img variant="top" src={standard} />
                </Card>
            </div>
            <p className="title-passe p-3">W@CFEST ETE 2022</p>
            <div className="p-3">            {
                Datajson.map(data => {
                    return(
                        <div>
                            <p><strong>{data.type[0]}</strong></p>
                            <p>{data.details[0]}</p>
                            <p>{data.date[0]}</p>
                            <p>{data.price[0]} euros</p>
                        </div>
                    )
                })
            }</div>


            <Button href="/ticket/standard" variant="danger btn-passe">VOIR PLUS</Button>{' '}

        </div>

        <div className="container-bg-yellow container-text">
            <div className="container-passe">
                <Card style={{ width: '34rem' }}>
                    <Card.Img variant="top" src={premium} />
                </Card>
            </div>
            <p className="title-passe p-3">W@CFEST ETE 2022</p>
            {
                Datajson.map(data => {
                    return(
                        <div className="p-3">
                            <p><strong>{data.type[1]}</strong></p>
                            <p>{data.details[1]}</p>
                            <p>{data.date[1]}</p>
                            <p>{data.price[1]} euros</p>
                        </div>
                    )
                })
            }

            <Button href="/ticket/premium" variant="danger btn-passe">VOIR PLUS</Button>{' '}
                {/*<img src={premium}/>*/}
        </div>
    </div>
}