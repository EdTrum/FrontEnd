import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Body from "../layouts/Body";
import { Login } from "../login";

function LandingPage() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/login'component={Login} />
      </Switch>
      <Body />
      <Footer />
    </div>
    </Router>
  );
}

export default LandingPage;
