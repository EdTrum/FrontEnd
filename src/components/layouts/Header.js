import React, { useState } from "react";
import imgOne from "../../assets/pics/logo.png";
import Home from "../pages/Home";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function LandHeader() {
  const [expanded, setExpanded] = useState("false");

  return (
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
                to='/register'
                className='btn btn-primary active mr-2'
                role='button'
                aria-pressed='true'
              >
                Sign Up
              </Link>
              <Link
                // onClick={() => setExpanded(false)}
                to='/login'
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
    </div>
  );
}

export default LandHeader;
