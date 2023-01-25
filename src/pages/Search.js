import React from "react";
import Button from 'react-bootstrap/Button';
import "../style.css";
import { BrowserRouter as Route, useNavigate } from 'react-router-dom';

export default function Search() {

    const navigate = useNavigate();

    const navigateResult = () => {
        navigate('/Search');
    };

    return (
        <div className="search_wrap search_wrap_5">

            <div className="search_box">
                <input type="text" className="input" placeholder="Enter SKU, Components ..." />
                
                    <Button variant="primary" onClick={navigateResult}>Search</Button>
                
            </div>
        </div>

    )
}