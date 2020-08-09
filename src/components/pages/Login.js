import React, { useState } from "react";
import loginImg from "../../assets/pics/login.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => <Link to='/home' />;

  return (
    // <div className='text-center bg-dark'>
    //   <div className='container'>
    //     <div className='row justify-content-center' style={{ height: "100vh" }}>
    //       <div className='col-sm-5'>
    //         <div className='card login-card'>
    //           <div className='card-body'>
    //             <h3 className='text-bold'>Sign In</h3>
    //             <br />
    //             <form>
    //               <label htmlFor='Email'>EMAIL</label>
    //               <input
    //                 type='email'
    //                 className='form-control'
    //                 placeholder='Email'
    //                 name='email'
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //               />
    //               <br />
    //               <label htmlFor='Email'>PASSWORD</label>
    //               <input
    //                 type='password'
    //                 className='form-control'
    //                 placeholder='Password'
    //                 value={password}
    //                 name='password'
    //                 onChange={(e) => setPassword(e.target.value)}
    //               />
    //               <br />
    //               <button
    //                 type='submit'
    //                 className='btn btn-success form-control'
    //                 onClick={handleClick}
    //               >
    //                 Log in
    //               </button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Styles>
      <div className='base-container'>
        <div className='header'>Sign Up and Start Learning!</div>
        <div className='content'>
          <div className='image'>
            <img src={loginImg} />
          </div>
          <form className='form'>
            <label htmlFor='Full Name'>Full Name</label>
            <input type='text' name='Full Name' placeholder='Full Name' />
            <br />
            <label htmlFor='Email Address'>Email Address</label>
            <input
              type='email'
              name='Email Address'
              placeholder='Email Address'
            />
            <br />
            <label htmlFor='Password'>Password</label>
            <input type='password' name='Password' placeholder='Password' />
            <br />
            <label htmlFor='Confrim Password'>Confrim Password</label>
            <input
              type='password'
              name='Confrim Password'
              placeholder='Confrim Password'
            />
            <br />
            <button type='submit' className='btn btn-success form-control'>
              Login
            </button>
          </form>
        </div>
        <div className='footer'>
          <button type='button' className='btn'>
            Sign Up
          </button>
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
      font-family: sans-serif, "Open Sans";
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
