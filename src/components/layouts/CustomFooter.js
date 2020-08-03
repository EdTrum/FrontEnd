import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import { Link } from "react-router-dom";

function CustomFooter() {
  return (
    <Styles className='main-footer'>
      <div className='footer-middle'>
        <Layout>
          <div className='row'>
            {/*Column One*/}
            <div className='col-md-3 col-sm-6'>
              <h4>Contact Us</h4>
              <ul className='list-unstyled'>
                <li>United States</li>
                <li>Main Street</li>
                <li>(+1) 111 111 1111</li>
              </ul>
            </div>
            {/*Column Two*/}
            <div className='col-md-3 col-sm-6'>
              <h4>Lorem ipsum.</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/'>Lorem ipsum dolor.</Link>
                </li>
                <li>
                  <Link to='/'>Lorem ipsum dolor.</Link>
                </li>
                <li>
                  <Link to='/'>Lorem ipsum dolor.</Link>
                </li>
              </ul>
            </div>
            {/*Column Three*/}
            <div className='col-md-3 col-sm-6'>
              <h4>Lorem ipsum.</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/'>Lorem ipsum dolor.</Link>
                </li>
                <li>
                  <Link to='/'>Lorem ipsum dolor.</Link>
                </li>
                <li>
                  <Link to='/'>Lorem ipsum dolor.</Link>
                </li>
              </ul>
            </div>
            {/*Column Four*/}
            <div className='col-md-3 col-sm-6'>
              <h4>Lorem ipsum.</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/'>Lorem ipsum dolor.</Link>
                </li>
                <li>
                  <Link to='/'>Lorem ipsum dolor.</Link>
                </li>
                <li>
                  <Link to='/'>Lorem ipsum dolor.</Link>
                </li>
              </ul>
            </div>
          </div>
          {/*Footer Bottom*/}
          <div className='footer-bottom'>
            <p className='text-xs-center'>
              &copy;{new Date().getFullYear()} Education Spectrum - All Rights
              Reserved
            </p>
          </div>
        </Layout>
      </div>
    </Styles>
  );
}

export default CustomFooter;

const Styles = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    text-align: center;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
