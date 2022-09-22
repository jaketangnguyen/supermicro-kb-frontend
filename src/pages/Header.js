import React from "react"
import { Link, Routes, Route } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="brand">
                    <img className="logo" src={require("../Photos/smc.png")} /> 
                    <div className="site-id">KnowledgeBase</div>
                </div>

                <ul>
                    <li className="nav-items">
                        <Link to="/ProductFamily" className="nav-items">
                            Product Family
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/CommonQuestions" className="nav-items">
                            Common Questions
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/Components" className="nav-items">
                            Components
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}