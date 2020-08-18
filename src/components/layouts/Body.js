import React from "react";
import "../../assets/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import bdImg from "../../assets/pics/about-extra-2.svg";
import bdImg2 from "../../assets/pics/about-extra-1.svg";
import imgTwo from "../../assets/pics/slide1.jpg";
import backImg from "../../assets/pics/intro-bg.png";
import cardPic from "../../assets/pics/slide1.jpg";
import {
  faLaptopCode,
  faCertificate,
  faUserClock,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function LandBody() {
  const info = [
    {
      theme: "Access to Popular Courses",
      icon: faLaptopCode,
      reason:
        "Access a catalogue of on demand courses like Python, Data Science, Machine Learning, and AI",
    },
    {
      theme: "Aquire Certified Content",
      icon: faCertificate,
      reason:
        "Browse for certified learning programs provided by reputable institutions",
    },
    {
      theme: "Schedule your Learning",
      icon: faUserClock,
      reason: "Study and stream recorded content at your own pace",
    },
    {
      theme: "Personalized Recommendations",
      icon: faArrowAltCircleRight,
      reason: "Get notified on courses and skills based on your current path",
    },
  ];

  const cardInfo = [
    {
      course: "An Entire MBA in 1 Course:Award Winning...",
      provider: "Chris Haroun, Complete Business...",
      tag: "CERTIFIED",
      rating: "4.5 (18,560)",
      source: "Coursera",
    },
    {
      course: "An Entire MBA in 1 Course:Award Winning...",
      provider: "Chris Haroun, Complete Business...",
      tag: "CERTIFIED",
      rating: "4.5 (18,560)",
      source: "Udemy",
    },
    {
      course: "An Entire MBA in 1 Course:Award Winning...",
      provider: "Chris Haroun, Complete Business...",
      tag: "CERTIFIED",
      rating: "4.5 (18,560)",
      source: "Udacity",
    },
    {
      course: "An Entire MBA in 1 Course:Award Winning...",
      provider: "Chris Haroun, Complete Business...",
      tag: "CERTIFIED",
      rating: "4.5 (18,560)",
      source: "Khan Academy",
    },
    {
      course: "An Entire MBA in 1 Course:Award Winning...",
      provider: "Chris Haroun, Complete Business...",
      tag: "CERTIFIED",
      rating: "4.5 (18,560)",
      source: "MIT",
    },
    {
      course: "An Entire MBA in 1 Course:Award Winning...",
      provider: "Chris Haroun, Complete Business...",
      tag: "FREE",
      rating: "4.5 (18,560)",
      source: "FreeCodeCamp",
    },
  ];

  const topics = [
    "Machine Learning",
    "Artificial Intelligence",
    "Android Development",
    "Java",
    "C++",
    "Data Science",
    "Python",
    "MongoDB",
  ];

  return (
    <Styles>
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

      <div className='main-body m-auto' style={{ maxWidth: "85%" }}>
        <section className='section' style={{ marginTop: "60px" }}>
          <div className='container-body'>
            <div
              className='row justify-content-center text-center mb-4'
              style={{ padding: "30px" }}
            >
              <div className='col-12'>
                <h3
                  className='h3 heading'
                  style={{ fontWeight: "bold", fontSize: "30px" }}
                >
                  Start your learning track with EdTrum
                </h3>
              </div>
            </div>
            <div className='row'>
              {info.map((content, index) => (
                <div
                  key={index}
                  className='col-12 col-sm-6 col-md-6 col-lg-3 text-center'
                >
                  <span className='mb-4 '>
                    <FontAwesomeIcon icon={content.icon} size='3x' />
                  </span>
                  <h4 className='h4 mb-2'>{content.theme}</h4>
                  <p>{content.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* card images */}
        <div className='courses-body mt-5'>
          <h3>
            <small className='text-muted'>
              Top Courses in Computer Science
            </small>
          </h3>
          <div className='card-deck'>
            {cardInfo.map((data, index) => (
              <NavLink
                className='card mx-1 shadow-sm'
                key={index}
                to='/'
                style={{ color: "black" }}
              >
                <span
                  className='badge badge-warning w-50 mt-2'
                  style={{ position: "absolute", zIndex: "3" }}
                >
                  {data.tag}
                </span>
                <img
                  className='card-img-top h-50'
                  src={cardPic}
                  alt='Card image cap'
                />
                <div className='card-body px-2'>
                  <p className='card-text' style={{ fontSize: "18px" }}>
                    {data.provider}
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>
                      <FaStar className='text-warning' />
                      <FaStar className='text-warning' />
                      <FaStar className='text-warning' />
                      <FaStar className='text-warning' />
                      <FaStarHalf className='text-warning' />
                      {data.rating}
                    </small>
                    <span className='d-block'></span>
                    <span className='float-right'>{data.source}</span>
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* topics buttons */}
        <div className='container mt-5'>
          <h3>
            <small className='text-muted'>Featured Topics</small>
          </h3>
          {topics.map((topic) => (
            <Link to='/' className='btn btn-light shadow mx-1'>
              {topic}
            </Link>
          ))}
        </div>

        {/* extra information page */}
        <section id='about'>
          <div className='container' style={{ marginTop: "80px" }}>
            <div className='row about-extra'>
              <div className='col-lg-6 wow fadeInUp'>
                <img src={bdImg} className='img-fluid' alt='#' />
              </div>
              <div className='col-lg-6 wow fadeInUp pt-5 pt-lg-0'>
                <h4 style={{ marginTop: "70px" }}>Start Your Learning Path</h4>
                <p>
                  Get access to recorded videos, guided projects, and tutorials
                  from established online providers and instructors
                </p>
              </div>
            </div>

            <div
              className='row about-extra'
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <div className='col-lg-6 wow fadeInUp order-1 order-lg-2'>
                <img src={bdImg2} className='img-fluid' alt='' />
              </div>

              <div className='col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1'>
                <h4 style={{ marginTop: "40px" }}>
                  Earn career-developing skills
                </h4>
                <p>
                  Choose from the many options available to gain high-demand
                  skills and earn industry-recognized credentials
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Styles>
  );
}

export default LandBody;

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
