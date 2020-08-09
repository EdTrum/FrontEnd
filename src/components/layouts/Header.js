import React, { useState } from "react";
import imgOne from "../../assets/pics/logo.png";
import imgTwo from "../../assets/pics/slide1.jpg";
import backImg from "../../assets/pics/intro-bg.png";
import styled from "styled-components";
import Home from "../pages/Home";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function LandHeader() {
  const [expanded, setExpanded] = useState("false");

  return (
    <Styles>
      <div>
        <div>
          <Nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
            <NavLink style={{ width: "130px" }} to='/'>
              <img src={imgOne} alt='/' />
            </NavLink>
            <button
              expanded={expanded}
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded={expanded}
              aria-label='Toggle navigation'
              onClick={() => setExpanded(expanded ? "false" : "expanded")}
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
              onClick={() => setExpanded(false)}
            >
              <ul
                className='navbar-nav mr-auto'
                onClick={() => setExpanded(false)}
              >
                <li className='nav-item dropdown'>
                  <NavDropdown
                    title='Courses'
                    id='basic-nav-dropdown'
                    style={{ marginTop: "5px" }}
                  >
                    <NavDropdown.Item href='#action/3.1'>
                      Computer Science
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>
                      Machine Learning
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>
                      Web Development
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.4'>
                      Data Science
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                {/* <!-- search bar and search button --> */}
                <form
                  className='form-inline my-2 my-lg-0'
                  onClick={() => setExpanded(false)}
                >
                  <div className='input-group' style={{ width: "50vw" }}>
                    <input
                      className='form-control mr-sm-2'
                      type='search'
                      placeholder='Search'
                      aria-label='Search'
                    />
                    <button
                      className='btn btn-primary my-2 my-sm-0'
                      type='submit'
                    >
                      Search
                    </button>
                  </div>
                </form>
              </ul>
              {/* <!-- log in and sign up buttons --> */}
              <form
                className='form-inline my-2 my-lg-0'
                onClick={() => setExpanded(false)}
              >
                <Link
                  // onClick={() => setExpanded(false)}
                  to='/'
                  className='btn btn-primary active mr-2'
                  role='button'
                  aria-pressed='true'
                >
                  Sign Up
                </Link>
                <Link
                  // onClick={() => setExpanded(false)}
                  to='/home'
                  // component={Home}
                  className='btn btn-primary active'
                  role='button'
                  aria-pressed='true'
                >
                  Log In
                </Link>
              </form>
            </div>
          </Nav>
        </div>

        {/* <!-- body page --> */}
        <div className='container-fluid p-0'>
          <section id='intro' className='clearfix'>
            <div className='container-bg'>
              <div>
                <div className='intro-img'>
                  <img
                    src={imgTwo}
                    alt='/'
                    className='img-fluid'
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div className='intro-info contain'>
                  <div className='align-content-start'>
                    <h2>
                      We provide
                      <br />
                      <span>solutions</span>
                      <br />
                      for your learning!
                    </h2>
                  </div>
                  <div>
                    <Link to='/about' className='btn-get-started scrollto'>
                      Get Started
                    </Link>
                    <Link to='/services' className='btn-services scrollto'>
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Styles>
  );
}

export default LandHeader;

const Styles = styled.div`
  #intro {
    width: 100%;
    position: relative;
    background: url(${backImg}) center bottom no-repeat;
    background-size: cover;
    padding: 200px 0 120px 0;
  }
  @media (max-width: 991px) {
    #intro {
      padding: 140px 0 60px 0;
    }
  }
  @media (max-width: 574px) {
    #intro {
      padding: 100px 0 20px 0;
    }
  }
  #intro .intro-img {
    width: 50%;
    float: right;
  }
  @media (max-width: 991px) {
    #intro .intro-img {
      width: 80%;
      float: none;
      margin: 0 auto 25px auto;
    }
  }
  #intro .intro-info {
    width: 50%;
    float: left;
  }
  @media (max-width: 991px) {
    #intro .intro-info {
      width: 80%;
      float: none;
      margin: auto;
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    #intro .intro-info {
      width: 100%;
    }
  }
  #intro .intro-info h2 {
    color: #fff;
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 700;
  }
  #intro .intro-info h2 span {
    color: #74b5fc;
    text-decoration: underline;
  }
  @media (max-width: 767px) {
    #intro .intro-info h2 {
      font-size: 34px;
      margin-bottom: 30px;
    }
  }

  #intro .intro-info .btn-get-started,
  #intro .intro-info .btn-services {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 32px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 0 20px 20px 0;
    color: #fff;
  }
  #intro .intro-info .btn-get-started {
    background: #007bff;
    border: 2px solid #007bff;
    color: #fff;
  }
  #intro .intro-info .btn-get-started:hover {
    background: none;
    border-color: #fff;
    color: #fff;
  }
  #intro .intro-info .btn-services {
    border: 2px solid #fff;
  }
  #intro .intro-info .btn-services:hover {
    background: #007bff;
    border-color: #007bff;
    color: #fff;
  }
`;
