import React from 'react'
import {Jumbotron as Jumbo} from "react-bootstrap"
import styled from "styled-components"
import backgroundImg from '../../assets/background.jpg'

function Jumbotron() {
    return (
        <Styles>
            <Jumbo fluid className='jumbo'>
                <div className="overlay">
                    <div className="container">
                        <h3>Welcome to EdTrum</h3>
                        <h1>
                            We Provide Solutions To Your Learning!
                        </h1>
                    </div>
                </div>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron

const Styles = styled.div`
    .jumbo {
        background: url(${backgroundImg}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 250px;
        position: relative;
        z-index -2;
    }
    .overlay {
        background-color: #000;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0.5;
        z-index: -1;
    }
    .container {
        text-align: center;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`
