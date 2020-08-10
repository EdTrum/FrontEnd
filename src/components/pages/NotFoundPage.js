import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../layouts/CustomNavbar";
import CustomFooter from "../layouts/CustomFooter";

const btnStyle = {
  margin: 5,
  minWidth: 100,
  textTransform: "uppercase",
};

function NotFoundPage() {
  return (
    <Container className='pt-5 text-center'>
      <CustomNavbar />
      <h3>Oops!</h3>
      <h3>Error 404 Not Found</h3>
      <p>Sorry, the page you requested was not found</p>
      <Link to='/'>
        <Button variant='outline-primary' style={btnStyle}>
          Home
        </Button>
      </Link>
      <Link to='/contact'>
        <Button variant='outline-info' style={btnStyle}>
          Support
        </Button>
      </Link>
      <CustomFooter />
    </Container>
  );
}

export default NotFoundPage;
