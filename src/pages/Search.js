import React from "react"
import "../style.css"
import { BrowserRouter as Route, useNavigate } from 'react-router-dom'

export default function Search() {

    const navigate = useNavigate();

    const navigateResult = () => {
        navigate('/Search');
    };

    return (

        <div className="search_wrap search_wrap_5">
            <div class="statement">
                <p>Supermicro Knowledge Base</p>
            </div>
            <div className="search_box">
                <input type="text" className="input" placeholder="Enter SKU, Components ..." />
                <div class="btn">
                    <button onClick={navigateResult}>Search</button>
                </div>
            </div>
        </div>
    )
}