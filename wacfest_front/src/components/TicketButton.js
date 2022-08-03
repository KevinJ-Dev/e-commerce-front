import '../stylesheets/TicketButton.css'
// import DataJson from 'DataJson.json';
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom";

export default function TicketButton({redirectPath}){
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };
    return (
    <Card.Body>
        <div className="text-center">
            <a onClick={() => navigateTo(redirectPath)}><span className={'dinamic-span'}>Acheter</span>
            </a>
        </div>
    </Card.Body>)
}