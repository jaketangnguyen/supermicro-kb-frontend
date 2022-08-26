import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Search from "./Search"
import Footer from "./Footer"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Results() {

  return (
    <Router>
      <div className="page">
          <Header />
          
          <Search /> 
          <Footer />
      </div>
    </Router>
  )
  
}

ReactDOM.render(<Results />, document.getElementById("root"))