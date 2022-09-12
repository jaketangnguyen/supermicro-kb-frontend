import React from "react"

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="brand">
                    {/* <img className="logo" src={require("../Photos/smc.png")} /> */}
                    <div className="site-id">KnowledgeBase</div>
                </div>

                <ul>
                    <li className="nav-items">
                        <Link to="ProductFamily" className="nav-items">
                            Product Family
                        </Link>
                    </li>
                </ul>

                {/* <ul className="nav-items">
                    <li className="nav-link"><a href="./families.html">Product Families</a></li>
                    <li className="nav-link"><a href="#">Components</a></li>
                    <li className="nav-link"><a href="#">Common Questions</a></li>
                </ul> */}
            </nav>
        </header>
    )
}