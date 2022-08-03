import HomeCard from "./HomeCard";
import HomeSlide from "./HomeSlide";
import Footer from "./Footer";
import Prod from  "../assets/polo 1.png"
import {Container, Row} from "react-bootstrap";
import ProductsCard from "./Products";
import "../stylesheets/home.css";
import {useNavigate} from 'react-router-dom';
import FormValidate from "./FormPay";
import Premium from '../assets/Premium.png'
import Standard from "../assets/Standard.png";

import TicketetButton from "./TicketButton";

import test from "./DataJson.json";

export default function Home() {
    const titleProd='Polo Homme';
    const desProd = 'S,M,L,XL,XXL';
    const navigate = useNavigate();
    const navigateToPass = () => {
  };
    return <div>
        <div  className="home-body">
                <HomeSlide/>

            <Container >
                <div>
                    <Row>
                        <TicketetButton {'/ticket/standard'}/>
                        <HomeCard image={Standard} redirectPath={'/ticket/standard'}/>
                        <HomeCard image={Premium} redirectPath={'/ticket/premium'}/>
                    </Row>
                </div>
            </Container>

            {/*<Container>*/}
            {/*        <ProductsCard image={Prod} title={titleProd} des={desProd}/>*/}
            {/*</Container>*/}


        </div>
    </div>;
}
