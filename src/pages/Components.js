import React from "react";
import "../style.css";
import { BrowserRouter as Route, useNavigate, createSearchParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import SearchInput from "./SearchInput";
import Button from 'react-bootstrap/Button';

export default function Components() {

    const navigate = useNavigate();

    const navigateResult = () => {
        let value = document.getElementById('search-value').value;
        navigate({
            pathname: "/Search",
            search: `?${createSearchParams({
                query: value
            })}`
        });
    };


    const stateChange = (e) => {
        let el = e.currentTarget.getElementsByClassName('card-title h5');
        let component = el[0].textContent;
        navigate({
            pathname: "/Search",
            search: `?${createSearchParams({
                query: component
            })}`
        });
    }

    return (
        <div>
            {/* <Header /> */}
            <div className="search_box">
                <SearchInput />
            </div>

            <div class="container">
                <div class="resultsSpace">
                    <div class="cards">
                        <Row className="g-3 gap-5">
                            <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                                <Card.Img variant="top" src={require("../Photos/Icons/cpu2.png")} />
                                <Card.Body>
                                    <Card.Title>CPU</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                                <Card.Img variant="top" src={require("../Photos/Icons/memory.png")} />
                                <Card.Body>
                                    <Card.Title>Memory</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                                <Card.Img variant="top" src={require("../Photos/Icons/storage.png")} />
                                <Card.Body>
                                    <Card.Title>Storage</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                                <Card.Img variant="top" src={require("../Photos/Icons/gpu4.png")} />
                                <Card.Body>
                                    <Card.Title>GPU</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                                <Card.Img variant="top" src={require("../Photos/Icons/networking.png")} />
                                <Card.Body>
                                    <Card.Title>Networking</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                                <Card.Img variant="top" src={require("../Photos/Icons/addon.png")} />
                                <Card.Body>
                                    <Card.Title>Add On</Card.Title>
                                </Card.Body>
                            </Card>


                        </Row>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
