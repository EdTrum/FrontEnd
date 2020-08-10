import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage";
import Home from "../pages/Home";
import MyCourses from "../pages/MyCourses";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";
import CustomNavbar from "../layouts/CustomNavbar";
import CustomFooter from "../layouts/CustomFooter";
import Course from "../course/Course";

function UserPage() {
  return (
    <Router>
      <div className='main-content' style={{ minHeight: "59vh" }}>
        <Switch>
          <Route exact path='/userpage' component={Home} />
          <Route path='/my-courses' component={MyCourses} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/course/:title' component={Course} />
          <Route exact path='/' component={LandingPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <br />
      </div>
    </Router>
  );
}

export default UserPage;
