/* This page consists of formatting and content for the main body of the homepage*/
import SearchInput from "./SearchInput";
import React from "react";
import "../style.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export default function HomepageBody()
{
    const navigate = useNavigate();

    const navigateResult = () => {
        navigate('/Search');
    };

    return(
        <div>
            {/* Background image added in className css section */}
            <div className="body-container">
                {/* Header statement */}
                <h1>Supermicro Knowledge Bae</h1> 
                
                {/* Search box button with navigation */}
                <div className="search_wrap search_wrap_5">
                <div className="search_box">
                    <SearchInput/>
                </div>
            </div>
            </div>
        
        </div>
    );
}
