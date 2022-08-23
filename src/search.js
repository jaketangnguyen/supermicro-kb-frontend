import React from "react"
import Header from "header"
import Footer from "footer"
import "./style.css"

function search() {

    return (
        <div class="wrapper">
            <Header />
            <div class="container">
                <div class="resultsSpace">
                    <div class="searchresult">
                        <a>https://Qnaplaceholder.com</a>
                        <h2>QnA Placeholder title 1</h2>
                        <p>QnA placeholder text</p>
                    </div>
                    <div class="searchresult">
                        <a>https://Qnaplaceholder.com</a>
                        <h2>QnA Placeholder title 2</h2>
                        <p>QnA placeholder text</p>
                    </div>
                    <div class="searchresult">
                        <a>https://Qnaplaceholder.com</a>
                        <h2>QnA Placeholder title 3</h2>
                        <p>QnA placeholder text</p>
                    </div>
                    <div class="searchresult">
                        <a>https://Qnaplaceholder.com</a>
                        <h2>QnA Placeholder title 4</h2>
                        <p>QnA placeholder text</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

