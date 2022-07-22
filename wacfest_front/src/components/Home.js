import Header from "./Header";
import HomeCard from "./HomeCard";
import Footer from "./Footer";
import Premium from '../assets/Premium.png'
import Standard from "../assets/Standard.png";
import Prod from  "../assets/polo 1.png"
import {Container, Row} from "react-bootstrap";
import ProductsCard from "./Products";
import Ticketing from "./Ticketing";

export default function Home() {
    const titleProd='Polo Homme';
    const desProd = 'S,M,L,XL,XXL';
    return <div>
        <Header/>
        <Ticketing/>
        {/*<Footer/>*/}

        {/*<Container>*/}
        {/*    <Row>*/}
        {/*        <HomeCard image={Premium} />*/}
        {/*        <HomeCard image={Standard} />*/}
        {/*    </Row>*/}

        {/*</Container>*/}

        {/*<Container>*/}
        {/*        <ProductsCard image={Prod} title={titleProd} des={desProd}/>*/}
        {/*</Container>*/}

        <Footer></Footer>

    </div>;
}
