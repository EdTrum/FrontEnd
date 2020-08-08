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
import { Login } from "./components/login/login"
import { Link } from "react-router-dom"




function App() {
  return (
    <Router>
      <LandingPage />
    
    </Router>
  );
}

export default App;
