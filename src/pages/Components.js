import React from "react";
import "../style.css";
import { BrowserRouter as Route, useNavigate, createSearchParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
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


    const stateChange =(e) => {
	let el = e.currentTarget.getElementsByClassName('card-title h5');
	let component = el[0].textContent;
	navigate({
		pathname:  "/Search",
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
                    <div class="result">
                        <h2> Components Page</h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>

                    <Row>
                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>CPU</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>Memory</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>Storage Related</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>GPU</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>Networking</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>Misc.</Card.Title>
                            </Card.Body>
                        </Card>


                    </Row>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
