import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import MyCourses from "./components/pages/MyCourses";
import Contact from "./components/pages/Contact";
import NotFoundPage from "./components/pages/NotFoundPage";
import CustomNavbar from "./components/layouts/CustomNavbar";
import CustomFooter from "./components/layouts/CustomFooter";
import Course from "./components/course/Course";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <Login />
      {/* <CustomNavbar />
      <div className='main-content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/my-courses' component={MyCourses} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/course/:title' component={Course} />
          <Route component={NotFoundPage} /> */}
      {/* <Route path='/landing-page' component={LandingPage} /> */}
      {/* </Switch>
        <br />
      </div>
      <CustomFooter /> */}
    </Router>
  );
}

export default App;
