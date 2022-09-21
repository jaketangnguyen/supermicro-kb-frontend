import React from "react"
// import Header from "header"
// import Footer from "footer"
// import "./style.css"
import { BrowserRouter as Route, useNavigate } from 'react-router-dom'

export default function Search() {

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
                        <h2> QnA Placeholder title 1</h2>
                        <a>https://Qnaplaceholder.com</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.</p>
                    </div>
                    <div class="result">
                        <h2>QnA Placeholder title 2</h2>
                        <a>https://Qnaplaceholder.com</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.</p>
                    </div>
                    <div class="result">
                        <h2>QnA Placeholder title 3</h2>
                        <a>https://Qnaplaceholder.com</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.</p>
                    </div>
                    <div class="result">
                        <h2>QnA Placeholder title 4</h2>
                        <a>https://Qnaplaceholder.com</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.</p>
                    </div>
                    <div class="result">
                        <h2>QnA Placeholder title 5</h2>
                        <a>https://Qnaplaceholder.com</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.</p>
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


