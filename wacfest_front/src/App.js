import './App.css';
import Home from "./components/Home";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Ticketing from "./components/Ticketing";
import FormValidate from "./components/FormPay";

function App() {
  return (
          <Router>
              <Header/>

              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route path="/ticket" element={<Ticketing/>}/>
                  <Route path="/ticket/standard/payment" element={<FormValidate/>}/>
                  <Route path="/ticket/premium/payment" element={<FormValidate/>}/>
              </Routes>

              <Footer/>
          </Router>
  );
}

export default App;
