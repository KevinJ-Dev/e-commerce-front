import Header from "./Header";
import HomeCard from "./HomeCard";
import Premium from '../assets/Premium.png'
import Standard from "../assets/Standard.png";
import {Container, Row} from "react-bootstrap";

export default function Home() {
    const title1 ='Pass Standard';
    const title2 ='Pass Premium';
    const text1 = '26,27 ou 28\n Places disponible: ';
    const text2 = '26,27 & 28 Places disponible: ';

    return <div>
        <Header/>
        {/*<Footer/>*/}

        <Container>
            <Row>
                <HomeCard image={Standard} title={title1} text={text1}/>
                <HomeCard image={Premium} title={title2} text={text2}/>
            </Row>

        </Container>

    </div>;
}
