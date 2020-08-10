import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import UserPage from "./components/pages/UserPage";

function App() {
  return (
    <Router>
      <div className='main-content'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/userpage' component={UserPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
