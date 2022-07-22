import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

function Page() {
  return (
      <div className="page">
          <Header />
          <Body />
          <Footer />
      </div>
  )
}
ReactDOM.render(<Page />, document.getElementById("root"))