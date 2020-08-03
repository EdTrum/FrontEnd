import React from "react";
import "../../assets/fontawesome";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

function LandFooter() {
  return (
    <div className='page-footer font-small blue-grey lighten-5'>
      <div style={{ backgroundColor: "lightgrey" }}>
        <div className='container'>
          <div className='row py-4 d-flex align-items-center'>
            <div className='col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0'>
              <h6 className='mb-0'>Start learning with us today!</h6>
            </div>
          </div>
        </div>
      </div>

      <div className='container text-center text-md-left mt-5'>
        <div className='row mt-3 dark-grey-text'>
          <div className='col-md-3 col-lg-4 col-xl-3 mb-4'>
            <h6 className='text-uppercase font-weight-bold'>Company mission</h6>
            <hr
              className='teal accent-3 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: "60px" }}
            />
            <p>
              Our mission is to provide world-class education from reputable
              organizations. Learn anywhere, anytime, and anyplace. EdTrum is a
              non-profit organization. Learn more about the team!
            </p>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase font-weight-bold'>Useful Links</h6>
            <hr
              className='teal accent-3 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: "60px" }}
            />
            <p>
              <NavLink to='/!' style={{ color: "blue" }}>
                Your Account
              </NavLink>
            </p>
            <p>
              <NavLink to='/!' style={{ color: "blue" }}>
                Android App
              </NavLink>
            </p>
            <p>
              <NavLink to='/!' style={{ color: "blue" }}>
                About Us
              </NavLink>
            </p>
            <p>
              <NavLink to='/!' style={{ color: "blue" }}>
                Help
              </NavLink>
            </p>
          </div>

          <div
            className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'
            style={{ textAlign: "center" }}
          >
            <h6 className='text-uppercase font-weight-bold'>Connect with Us</h6>
            <hr
              className='teal accent-3 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: "60px" }}
            />
            <p>
              <NavLink to='/facebook'>
                <FaFacebookSquare
                  style={{ color: "rgb(66,103,178)", fontSize: "20px" }}
                />
              </NavLink>
            </p>
            <p>
              <NavLink to='/twitter'>
                <FaTwitter
                  style={{ color: "rgb(0, 123, 255)", fontSize: "20px" }}
                />
              </NavLink>
            </p>
            <p>
              <NavLink to='/linkedIn'>
                <FaLinkedin
                  style={{ color: "rgb(40,103,178)", fontSize: "20px" }}
                />
              </NavLink>
            </p>
            <p>
              <NavLink to='/instagram'>
                <FaInstagram
                  style={{ color: "rgb(193,53,132)", fontSize: "20px" }}
                />
              </NavLink>
            </p>
          </div>

          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase font-weight-bold'>Contact Us</h6>
            <hr
              className='teal accent-3 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: "60px" }}
            />
            <p>
              <FontAwesomeIcon
                icon={["fas", "home"]}
                style={{ marginRight: "5px" }}
              />
              New York, NY 10012, US
            </p>
            <p>
              <FontAwesomeIcon
                icon={["fas", "envelope"]}
                style={{ marginRight: "5px" }}
              />{" "}
              info@example.com
            </p>
            <p>
              <FontAwesomeIcon
                icon={["fas", "phone"]}
                style={{ marginRight: "5px" }}
              />{" "}
              + 01 234 567 88
            </p>
            <p>
              <FontAwesomeIcon
                icon={["fas", "phone"]}
                style={{ marginRight: "5px" }}
              />{" "}
              + 01 234 567 88
            </p>
          </div>
        </div>
      </div>

      <div className='footer-copyright text-center text-black-50 py-3'>
        © 2020 Copyright:
        <Link to='https://edtrum.com' style={{ color: "blue" }}>
          {" "}
          EdTrum.com
        </Link>
      </div>
    </div>
  );
}

export default LandFooter;
