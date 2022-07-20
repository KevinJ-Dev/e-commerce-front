import Button from 'react-bootstrap/Button';


export default function Redirect(){
    return(
        <Button
            className="d-flex justify-content-left"
            variant='dark'
            onClick={() => {
                alert('clicked');
            }}
        >
            Voir la boutique
        </Button>
    );
}