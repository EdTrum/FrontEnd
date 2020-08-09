import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Body from "../layouts/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

function LandingPage() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' />
          <Route exact path='/register' component={Home} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </Router>
      <Body />
      <Footer />
    </div>
  );
}

export default LandingPage;
