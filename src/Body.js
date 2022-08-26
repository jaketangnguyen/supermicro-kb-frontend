import React from "react"
import "./style.css"
import Search from "./Search"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Body() {
    return (
        <div class="wrapper">
            <div className="container">
                <div className="search_wrap search_wrap_5">
                    <div class="statement">
                        <p>Supermicro Knowledge Base</p>
                    </div>
                    <div className="search_box">
                        <input type="text" className="input" placeholder="Enter SKU, Components ..." />
                        <div class="btn">
                            {/* <button onClick={() => history.push(`/search?query=${search}`)} >Search</button>  */}
                            <Route to = "/Search">Search</Route>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}