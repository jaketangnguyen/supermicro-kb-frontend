import React from "react"
import "../style.css"
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
//import ReactPlayer from 'react-player/youtube'
//ReactPlayer url='https://www.youtube.com/watch?v=6BtF7iICA5I' autoPlay loop muted
//<video src='https://www.youtube.com/watch?v=6BtF7iICA5I' autoPlay loop muted /> (meant to go above header under hero-container)

export default function HeroSection()
{
    const navigate = useNavigate();

    const navigateResult = () => {
        navigate('/Search');
    };

    return(
        <div>
            <div className="hero-container">
                <h1>Supermicro FAQ</h1>
                
                <div className="search_wrap search_wrap_5">
                <div className="search_box">
                    <input type="text" className="input" placeholder="Enter SKU, Components ..." />
                    <Button variant="primary" onClick={navigateResult}>Search</Button>
                </div>
            </div>
            </div>
        
        </div>
    );
}
