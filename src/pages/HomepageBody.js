/* This page consists of formatting and content for the main body of the homepage*/
import React from "react";
import SearchInput from "./SearchInput";
import { useState, useEffect } from "react";
import "../style.css";
import API from "../services/API";

export default function HomepageBody()
{

    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        const api = new API();
        api.getKeywords().then((response)=>{
            console.log(response.data);
            setKeywords(response.data.map(({keyword}) => keyword));
        }).catch((err)=> console.log(err));
    }, []);

    return(
        <div>
            {/* Background image added in className css section */}
            <div className="body-container">
                {/* Header statement */}
                <h1>Supermicro Knowledge Base </h1> 
                
                {/* Search box button with navigation */}
                <div className="search_wrap search_wrap_5">
                <div className="search_box">
                    <SearchInput autoCompleteData={keywords}/>
                </div>
            </div>
            </div>
        
        </div>
    );
}
