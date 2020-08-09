import React, { useState } from "react";
import loginImg from "../../assets/pics/login.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => <Link to='/home' />;

  return (
    <Styles>
      <div className='base-container'>
        <div className='header'>Sign Up and Start Learning!</div>
        <hr
          className='teal accent-3 mb-4 mt-0 d-inline-block mx-auto'
          style={{ width: "300px" }}
        />
        <div className='content'>
          <div className='image'>
            <img src={loginImg} />
          </div>
          <form className='form'>
            <input
              type='text'
              name='Full Name'
              placeholder='Full Name'
              className='form-control'
            />
            <br />
            <input
              type='email'
              name='Email Address'
              placeholder='Email Address'
              className='form-control'
            />
            <br />
            <input
              type='password'
              name='Password'
              placeholder='Password'
              className='form-control'
            />
            <br />
            <input
              type='password'
              name='Confrim Password'
              placeholder='Confrim Password'
              className='form-control'
            />
            <br />
            <button type='submit' className='btn btn-success form-control'>
              Sign Up
            </button>
            <span className='p-3 text-muted text-sm'>or</span>
            <button
              type='submit'
              className='btn btn-default border-dark form-control'
            >
              <FaGoogle
                style={{ color: "rgb(66,133,244)", fontSize: "15px" }}
              />{" "}
              Sign Up with Google
            </button>
            <br />
            <button
              type='submit'
              className='btn btn-default border-dark form-control'
            >
              <FaFacebookSquare
                style={{ color: "rgb(66,103,178)", fontSize: "20px" }}
              />{" "}
              Sign Up with Facebook
            </button>
            <br />
            <p>
              Have an account?{" "}
              <Link to='/login' style={{ color: "blue" }}>
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </Styles>
  );
}

export default Login;

const Styles = styled.div`
  .base-container {
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;

    .header {
      font-size: 24px;
      padding: 10px;
    }

    .content {
      display: flex;
      flex-direction: column;

      .image {
        width: 21em;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .form {
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;

        .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: fit-content;
          label {
            font-size: 20px;
          }
          input {
            margin-top: 2px;
            min-width: 18em;
            height: 37px;
            padding: 0px 10px;
            font-size: 16px;
            font-family: sans-serif;
            background-color: #f3f3f3;
            border: 0;
            border-radius: 4px;
            margin-bottom: 31px;
            transition: all 250ms ease-in-out;
            &:focus {
              outline: none;
              box-shadow: 0px 0px 12px 0.8px #0e81ce;
            }
          }
        }
      }
    }
    .footer {
      margin-top: 3em;
    }
  }
`;
