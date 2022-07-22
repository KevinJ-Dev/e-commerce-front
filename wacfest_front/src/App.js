import './App.css';
import Home from "./components/Home";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
          <Router>
              <Header/>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  {/*<Route path="/about" component={About} />*/}
                  {/*<Route path="/topics" component={Topics} />*/}
              </Routes>
          </Router>
  );
}

export default App;
