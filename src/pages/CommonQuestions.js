import React from "react";
import "../style.css";
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import SearchInput from "./SearchInput";


export default function CommonQuestions() {

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


    return (
        <div>
            {/* <Header /> */}
            <div className="search_wrap search_wrap_5">
                <div className="search_box">
                    <input type="text" id="search-value" className="input" placeholder="Enter SKU, Components ..." />
                    <Button variant="primary" onClick={navigateResult}>Search</Button>
                </div>
            </div>

            <div class="container">
                <div class="resultsSpace">

                    <div class="result">
                        <Link to="/ArticlePage" >
                            <h2> Expanding your search with the Configurator filter </h2>
                        </Link>
                        <p> The configurator has a vast filter network that offers a variety of options to choose from. </p>
                    </div>

                    <hr />

                    <div class="result">
                        <h2> Why am I unable to find Blade systems on the configurator? </h2>
                        <a> </a>
                        <p> The Configurator currently does not support Blade systems.  Recommend to submit manually with your sales representative. </p>
                    </div>

                    <hr />

                    <div class="result">
                        <h2> Configuration for (insert system name here) does not work </h2>
                        <p> Contact internal (configurator) team directly or send them an email. Let customer know they will
                            be updated once it is fixed. </p>
                    </div>

                    <hr />

                    <div class="result">
                        <h2> Parts not listed or are missing for configuration on the configurator </h2>
                        <p> Check configurator and product page to confirm the issue and ensure the part missing should be included
                            in the system. If issue is confirmed contact internal (configurator) team and inform the customer
                            they will be notified when it is fixed.</p>
                    </div>

                    <hr />
                    
                    <div class="result">
                        <h2> What is the difference between warranties for the systems </h2>
                        <p> Please refer to the warranty documents provided by internal (configurator) team via email and
                            respond accordingly. </p>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )

}
