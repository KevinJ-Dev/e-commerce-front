import React from "react";
import "../stylesheets/lineup.css"
import Button from "react-bootstrap/Button";
import {Col, Container, Row} from "react-bootstrap";

export default function LineUp() {

    const lineup = [
        {
            name: "BB Jacques",
            img: "https://www.le4bis-ij.com/quartiersdete/img/galerie/artiste-bb-jacques.jpg",
            desc: "Rappeur"
        },
        {
            name: "BB Jacques",
            img: "https://www.le4bis-ij.com/quartiersdete/img/galerie/artiste-bb-jacques.jpg",
            desc: "Rappeur"
        },
        {
            name: "BB Jacques",
            img: "https://www.le4bis-ij.com/quartiersdete/img/galerie/artiste-bb-jacques.jpg",
            desc: "Rappeur"
        },
        {
            name: "BB Jacques",
            img: "https://www.le4bis-ij.com/quartiersdete/img/galerie/artiste-bb-jacques.jpg",
            desc: "Rappeur"
        }
    ]

    return (
        <div className="LineUp-body">
            <Container className={'justify-content-center'}>
                <Row className={'justify-content-md-center p-5'}>
                    <Col className="dinamic-btn fit-text-btn p-0 m-1" md="auto"><span className='dinamic-span p-2'>TOUT</span></Col>
                    <Col className="dinamic-btn fit-text-btn p-0 m-1" md="auto"><span className='dinamic-span p-2'>SAMEDI</span></Col>
                    <Col className="dinamic-btn fit-text-btn p-0 m-1" md="auto"><span className='dinamic-span p-2'>DIMANCHE</span></Col>
                </Row>
            </Container>
            <Container className={'justify-content-center lineup-container'}>
                <Row>
                    <div className={"title-lineup"}>ARTISTES</div>
                    {lineup.map((artiste) => {
                        return (
                            <Col xs><img src={artiste.img} alt="photo" width="50%" height="50%"/></Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}
