import Header from "./Header";
import HomeCard from "./HomeCard";
import Premium from '../assets/Premium.png'
import Standard from "../assets/Standard.png";
import {Container, Row} from "react-bootstrap";

export default function Home() {
    return <div>
        <Header/>
        {/*<Footer/>*/}

        <Container>
            <Row>
                <HomeCard image={Premium} />
                <HomeCard image={Standard} />
            </Row>

        </Container>

    </div>;
}
