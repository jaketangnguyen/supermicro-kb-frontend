import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./pages/Header"
import Search from './pages/Search'
import SearchResult from './pages/searchResults';
import Footer from "./pages/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Search />}> </Route>
          <Route path="/search" element={<SearchResult />}> </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
