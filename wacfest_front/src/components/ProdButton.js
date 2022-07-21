import Button from 'react-bootstrap/Button';


export default function Redirect(){
    return(
        <div className="p-5" style="width: 200px;" style={{display:'flex',justifyContent:'flex-end'}}>
            <Button

                style={{width: 200, }}
                variant='dark'
                onClick={() => {
                    alert('clicked');
                }}
            >
                Voir la boutique
            </Button>
        </div>
    );
}