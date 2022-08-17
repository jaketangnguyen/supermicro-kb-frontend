import React from "react"
import "./style.css"

export default function Body() {
    return (
        <div class="wrapper">
        <div className="container">
            <div className="search_wrap search_wrap_5">
                <div class="statement">
                    <p>Supermicro Knowledge Base</p>
                </div>
                <div className="search_box">
                    <input type="text" className="input" placeholder="Enter SKU, Components ..."/>
                    <div class="btn">
                        <a href = "./Search/index">Search</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
    )
}   