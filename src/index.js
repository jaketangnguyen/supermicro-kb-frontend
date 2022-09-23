import React from "react"
import "./style.css"
import ReactDOM from "react-dom/client"
import Header from "./pages/Header"
import Search from './pages/Search'
import SearchResult from './pages/searchResults';
import Footer from "./pages/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CommonQuestions from "./pages/CommonQuestions";
import Components from "./pages/Components";
import ProductFamily from "./pages/ProductFamily";

export default function App() {
  
  return (
    <BrowserRouter>
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"/>
    </div>

        <Header />
        <Routes>
          <Route path="/" element={<Search />}> </Route>
          <Route path="/search" element={<SearchResult />}> </Route>
          <Route path="/Components" element={<Components />}> </Route>
          <Route path="/ProductFamily" element={<ProductFamily />}> </Route>
          <Route path="/CommonQuestions" element={<CommonQuestions />}> </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
