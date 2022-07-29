import React, {useState} from "react";
import "../stylesheets/lineup.css"
import Button from "react-bootstrap/Button";
import {Card, Col, Container, Row} from "react-bootstrap";

export default function LineUp() {

    const lineup = [
        {
            name: "BB Jacques",
            img: "https://www.le4bis-ij.com/quartiersdete/img/galerie/artiste-bb-jacques.jpg",
            desc: "Rappeur",
            shown: false
        },
        {
            name: "Philippe Katrine",
            img: "https://cdn.radiofrance.fr/s3/cruiser-production/2022/02/a19c77ed-ed73-4fa3-be37-3b41a02edf8d/1200x630_222222222222philippe-katerine-cgabrieldelachapelle.jpg",
            shown: false,
            desc: "Rappeur"
        },
        {
            name: "Rone",
            img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Rone_live_%C3%A0_Los_Lobos_-_Los_Angeles.png",
            shown: false,
            desc: "À la suite de son précédent projet réfréné par le confinement, Rone décide de créer un album collaboratif avec de nombreux artistes"
        },
        {
            name: "Post Malone",
            img: "https://cdn.cnn.com/cnnnext/dam/assets/220613182412-post-malone-file-041622-super-tease.jpg",
            shown: false,
            desc: "Rappeur"
        },
        {
            name: "Linkin Park",
            img: "https://images.rtl.fr/~c/770v513/rtl2/www/963879-linkin-park.jpg",
            shown: false,
            desc: "Rappeur"
        },
        {
            name: "Kate Bush",
            img: "https://i.f1g.fr/media/cms/2850x1603_crop/2022/06/22/52c4d412a3b94ecb115296a327b7e93c2a9096429f8ccff56846304a2691527d.jpg",
            shown: false,
            desc: "Rappeur"
        },
        {
            name: "Stand Hight Patrol",
            img: "https://static.fnac-static.com/multimedia/Images/FR/NR/ac/35/37/3618220/1540-1/tsp20200701161155/Midnight-Walkers.jpg",
            shown: false,
            desc: "Rappeur"
        }
    ]

    const [Artistes, setArtistes] = useState(lineup);
    const changeArtistes = (index, val) => {
          let arr = Artistes;
          arr[index].shown = val;
        console.log(index, val);
          setArtistes(arr);
    };

    return (
        <div className="LineUp-body">
            <Container className={'justify-content-center'}>
                <Row className={'justify-content-md-center p-5'}>
                    <Col className="dynamic-btn fit-text-btn p-0 m-1" md="auto"><span className='dynamic-span p-2'>TOUT</span></Col>
                    <Col className="dynamic-btn fit-text-btn p-0 m-1" md="auto"><span className='dynamic-span p-2'>SAMEDI</span></Col>
                    <Col className="dynamic-btn fit-text-btn p-0 m-1" md="auto"><span className='dynamic-span p-2'>DIMANCHE</span></Col>
                </Row>
            </Container>
            <Container className={'justify-content-center lineup-container'}>
                <Row className={'m-2'}>
                    <div className={"title-lineup"}>ARTISTES</div>
                    <Col md={"auto"}>
                        <Row>
                            {lineup.map((artiste, index) => {
                                return (
                                    <Col md={6} className={'row-card'}>
                                        <Card className={'rounded-0 m-1'} bg={"none"}>
                                            <Card.Img className={'rounded-0 card-img-top'}
                                                      onMouseEnter={() => changeArtistes(index,true)}
                                                      onMouseLeave={() => changeArtistes(index,false)}
                                                      src={artiste.img}
                                                      max-width={"100%"}
                                                      max-height={"100%"}
                                                      alt="photo"
                                            />
                                            {
                                                // Artistes[index].shown && (

                                                    <Card.ImgOverlay>
                                                        <Card.Text>{artiste.name}</Card.Text>
                                                    </Card.ImgOverlay>
                                                // )
                                            }
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
