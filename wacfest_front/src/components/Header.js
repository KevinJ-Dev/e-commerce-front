import '../stylesheets/header.css';
import Button from 'react-bootstrap/Button';


export default function Header() {
    return <div className="Header">
        <div>Logo</div>
        <div>Billetterie</div>
        <Button variant="primary">Primary</Button>{' '}
    </div>
}
