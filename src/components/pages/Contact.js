import React from "react";
import { Button, Container } from "react-bootstrap";
import CustomNavbar from "../layouts/CustomNavbar";
import CustomFooter from "../layouts/CustomFooter";

function Contact() {
  return (
    <Container>
      <CustomNavbar />
      <div className='row pt-5'>
        <div className='col-sm-6'>
          <h4>Lorem ipsum dolor.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea
            error facilis provident tempora? Consequatur culpa eum excepturi
            laudantium libero quia quo repellat saepe ullam? Atque autem cum
            iure laboriosam laudantium omnis quod. Adipisci aliquam, inventore
            iure laudantium, magni maxime minus molestias necessitatibus neque
            obcaecati odit porro quod soluta suscipit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum
            deserunt dignissimos dolor ducimus est ex expedita fuga id impedit
            inventore ipsa modi nisi, nostrum obcaecati porro repellat sapiente
            similique soluta voluptatem? Ab alias aspernatur, consectetur ea
            eligendi enim eveniet exercitationem in molestias mollitia
            necessitatibus placeat porro ratione recusandae unde?
          </p>
        </div>
        <div className='col-sm-6'>
          <h4>Contact Us</h4>
          <form>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Name' />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
              />
            </div>
            <textarea
              className='form-control'
              name='message'
              id='message'
              cols='30'
              rows='4'
              placeholder='Message'
            />
            <Button
              className='form-control mt-3 text-uppercase'
              variant='outline-success'
              onClick={() => console.log("Sending...")}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
      <CustomFooter />
    </Container>
  );
}

export default Contact;
