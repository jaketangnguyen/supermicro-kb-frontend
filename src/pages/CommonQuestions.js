import React from "react"
import "../style.css"
import { BrowserRouter as Route, useNavigate } from 'react-router-dom'

export default function CommonQuestions(){
    
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
                        <h2> Is JBOD going to be added to the configurator? </h2>
                        <hr />
                        <p> Currently there are no plans to add JBOD to the configurator. Please submit manually through IBOM. </p>
                        <a> https://my.livechatinc.com/tickets/V9KMQ </a>
                    </div>
                    <div class="result">
                        <h2> Why am I unable to find Blade systems on the configurator? </h2>
                        <hr />
                        <a> </a>
                        <p> The Configurator currently does not support Blade systems.  Recommend to submit manually with your sales representative. </p>
                    </div>
                    <div class="result">
                        <h2> Configuration for (insert system name here) does not work </h2>
                        <hr />
                        <p> Contact internal (configurator) team directly or send them an email. Let customer know they will
                            be updated once it is fixed. </p>
                        <a> https://my.livechatinc.com/tickets/7Y2UH </a>

                    </div>
                    <div class="result">
                        <h2> Parts not listed or are missing for configuration on the configurator </h2>
                        <hr />
                        <p> Check configurator and product page to confirm the issue and ensure the part missing should be included 
                            in the system. If issue is confirmed contact internal (configurator) team and inform the customer 
                            they will be notified when it is fixed.</p>
                        <a> https://my.livechatinc.com/tickets/KFSRX </a>

                    </div>
                    <div class="result">
                        <h2> What is the difference between warranties for the systems </h2>
                        <hr />
                        <p> Please refer to the warranty documents provided by internal (configurator) team via email and
                            respond accordingly. </p>
                        <a> https://my.livechatinc.com/tickets/G82A3 </a>
                        
                    </div>
                    <div class="result">
                        <h2>QnA Placeholder title 6</h2>
                        <a>https://Qnaplaceholder.com</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.</p>
                    </div>
                    <div class="result">
                        <h2>QnA Placeholder title 7</h2>
                        <a>https://Qnaplaceholder.com</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.</p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )

}