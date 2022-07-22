import './App.css';
import Home from "./components/Home";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Ticketing from "./components/Ticketing";
import LineUp from "./components/LineUp";

function App() {
  return (
          <Router>
              <Header/>

              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route path="/ticket" element={<Ticketing/>}/>
                  <Route path="/program" element={<LineUp/>}/>
              </Routes>

              <Footer/>
          </Router>
  );
}
export default App;
