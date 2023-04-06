import React from "react";
import "../style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import SearchInput from "./SearchInput";
import { useState, useEffect } from 'react';


import { BrowserRouter as Route, useNavigate, createSearchParams } from 'react-router-dom'

export default function ProductFamily() {
    const navigate = useNavigate();
    const [keywords, setKeywords] = useState([]);

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
	let family = el[0].textContent;
	navigate({
		pathname:  "/Search",
		search: `?${createSearchParams({
			query: family
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

                    <Row className= "g-4 gap-5">
                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center"}}>
                            <Card.Img variant="top" src="https://www.supermicro.com/sites/default/files/product/normal/SYS-2029U-TN24R4T.png" />
                            <Card.Body>
                                <Card.Title>Ultra</Card.Title>
                            </Card.Body>
                        </Card>
                                            
                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/productSelector/SYS-420GP-TNAR+_main.png" />
                            <Card.Body>
                                <Card.Title>GPU</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/mainImages/SSG-620P-ACR12H_main.jpg" />
                            <Card.Body>
                                <Card.Title>Storage</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/mainImages/SYS-110P-WTR_main.jpg" />
                            <Card.Body>
                                <Card.Title>UP</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/productSelector/SYS-120TP-DC9TR_main.png" />
                            <Card.Body>
                                <Card.Title>Twin</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/productSelector/SYS-510P-MR_main.png" />
                            <Card.Body>
                                <Card.Title>Mainstream</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/productSelector/SYS-120C-TN10R_main.png" />
                            <Card.Body>
                                <Card.Title>CloudDC</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/a_images/products/Aplus/system/1U/AS-1014S-WTRT.jpg" />
                            <Card.Body>
                                <Card.Title>AMD</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/productSelector/SYS-E100-12T-C_main.png"/>
                            <Card.Body>
                                <Card.Title>IOT</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/mainImages/SYS-120H-TNR_main.jpg" />
                            <Card.Body>
                                <Card.Title>Hyper</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/mainImages/SYS-740A-T_main.jpg" />
                            <Card.Body>
                                <Card.Title>Super Workstation</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/a_images/products/SuperServer/1U/SYS-1029P-WT.jpg" />
                            <Card.Body>
                                <Card.Title>WIO</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/System/productSelector/SYS-530MT-H8TNR_main.png" />
                            <Card.Body>
                                <Card.Title>Micro Cloud</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/a_images/products/superserver/tower/SYS-5029C-T_close.jpg" />
                            <Card.Body>
                                <Card.Title>Up Workstation</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer", alignItems: "center" }}>
                            <Card.Img variant="top" src="https://www.supermicro.com/files_SYS/images/Chassis/cse-216be2c-920jbod_front.jpg" />
                            <Card.Body>
                                <Card.Title>JBOD</Card.Title>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
            </div>
            {/* <Footer /> */}

        </div>
    )
}
