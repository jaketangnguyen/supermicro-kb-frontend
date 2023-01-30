import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "../style.css";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";

export default function SearchInput()
{
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const state = useLocation();

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            navigateResult();
        }

    }

    const navigateResult = () => {
        navigate({
            pathname: state.pathname === "/Search"? ".":"Search",
            search: `?${createSearchParams({
                query: search
            })}`
        });
        navigate(0);
    };

        return (
            <div className="search_wrap search_wrap_5">
                <div className="search_box">
                    <input type="search" className="input" placeholder="Enter SKU, Components ..." onChange={(e)=>{setSearch(e.target.value)}} onKeyUp={handleKeyPress}/>             
                        <Button variant="primary" onClick={navigateResult}>Search</Button>
                </div>
            </div>
        )
}