import React from "react"

export default function Header() {
    return (
            <header className="header">
                <nav className="nav">
                    <img className="logo" src={require("./Photos/smc.png")} />
                    <ul className="nav-items">
                        <li className="nav-link"><a href="#">Product Families123</a></li>
                        <li className="nav-link"><a href="#">Components</a></li>
                        <li className="nav-link"><a href="#">Common Questions</a></li>
                    </ul>
                </nav>
            </header>
    )
  }