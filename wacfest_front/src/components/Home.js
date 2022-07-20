import Header from "./Header";
import HomeCard from "./HomeCard";
import Premium from '../assets/Premium.png'
import Standard from "../assets/Standard.png";
import Prod from  "../assets/polo 1.png"
import {Container, Row} from "react-bootstrap";
import ProductsCard from "./Products";

export default function Home() {
    const titleProd='Polo Homme';
    const desProd = 'S,M,L,XL,XXL';
    return <div>
        <Header/>
        {/*<Footer/>*/}

        <Container>
            <Row>
                <HomeCard image={Premium} />
                <HomeCard image={Standard} />
            </Row>

        </Container>

        <Container>
                <ProductsCard image={Prod} title={titleProd} des={desProd}/>
        </Container>

    </div>;
}
