import HomeCard from "./HomeCard";
import Footer from "./Footer";
import Premium from '../assets/Premium.png'
import Standard from "../assets/Standard.png";
import Prod from  "../assets/polo 1.png"
import {Container, Row} from "react-bootstrap";
import ProductsCard from "./Products";
import "../stylesheets/home.css";
import FormValidate from "./FormPay";

export default function Home() {
    const titleProd='Polo Homme';
    const desProd = 'S,M,L,XL,XXL';
    return <div>
        <div  className="home-body">
            <Container >
                <div>
                    <Row>
                        <HomeCard image={Premium} />
                        <HomeCard image={Standard} />
                    </Row>
                </div>

            </Container>

            {/*<Container>*/}
            {/*        <ProductsCard image={Prod} title={titleProd} des={desProd}/>*/}
            {/*</Container>*/}


        </div>

    </div>;
}
