import Home from "./components/Home";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Ticketing from "./components/Ticketing";
import TicketingStandard from "./components/TicketingStandard";
import TicketingPremium from "./components/TicketingPremium";
import FormValidate from "./components/FormPay";
import LineUp from "./components/LineUp";

function App() {
  return (
          <Router>
              <Header/>

              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route path="/ticket" element={<Ticketing/>}/>
                  <Route path="/ticket/standard/payment" element={<FormValidate/>}/>
                  <Route path="/ticket/premium/payment" element={<FormValidate/>}/>
                  <Route path="/ticket/standard" element={<TicketingStandard/>}/>
                  <Route path="/ticket/premium" element={<TicketingPremium/>}/>
                  <Route path="/program" element={<LineUp/>}/>
              </Routes>

              <Footer/>
          </Router>
  );
}
export default App;
