import React from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
