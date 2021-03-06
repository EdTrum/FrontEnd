import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Body from "../layouts/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "./Login";
import Register from "./Register";

function LandingPage() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Body} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default LandingPage;
