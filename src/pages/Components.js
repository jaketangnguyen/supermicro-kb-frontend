import React from "react"
import "../style.css"
import { BrowserRouter as Route, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default function Components() {

    const navigate = useNavigate();

    const navigateResult = () => {
        navigate('/Search');
    };

    return (
        <div>
            {/* <Header /> */}
            <div className="search_wrap search_wrap_5">
                <div className="search_box">
                    <input type="text" className="input" placeholder="Enter SKU, Components ..." />
                    <div class="btn">
                        <button onClick={navigateResult}>Search</button>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="resultsSpace">
                    <div class="result">
                        <h2> Components Page</h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>

                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card</Card.Title>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card</Card.Title>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card</Card.Title>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card</Card.Title>

                        </Card.Body>
                    </Card>                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card</Card.Title>

                        </Card.Body>
                    </Card>
                </Row>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}