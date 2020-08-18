import React from "react";
import Jumbotron from "../layouts/Jumbotron";
import Layout from "../layouts/Layout";
import courses from "../../assets/mocks/courses";
import dummyImg from "../../assets/dummy.png";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../layouts/CustomNavbar";
import CustomFooter from "../layouts/CustomFooter";

const cardStyle = {
  maxWidth: "14rem",
  minWidth: "14rem",
  margin: 8,
  maxHeight: "17rem",
  minHeight: "17rem",
  cursor: "pointer",
};

function Home() {
  //should be in it's own component
  const renderCourses = courses.map((course, index) => (
    <Link
      to={`/course/${course.title.toLowerCase()}`}
      style={{ color: "black" }}
      key={index}
    >
      <Card tag='a' style={cardStyle}>
        <img
          src={dummyImg}
          alt={course.title}
          className='card-img-top'
          style={{ height: "120px", width: "100%" }}
        />
        <div className='card-body'>
          <h6 className='card-title'>{course.title}</h6>
          <p className='card-title'>{course.publisher}</p>
          <p className='card-title' style={{ fontSize: "10px" }}>
            {course.category}
          </p>
          <p className='card-title' style={{ fontSize: "12px" }}>
            Rating {course.rating} ({course.ratingNo})
          </p>
        </div>
      </Card>
    </Link>
  ));
  //should be in it's own component

  return (
    <div>
      <CustomNavbar />
      <Jumbotron />
      <Layout>
        <h4>Web Development</h4>
        <div className='row flex-row flex-nowrap overflow-auto'>
          {renderCourses}
        </div>
        <h4 className='pt-2'>Mobile Development</h4>
        <div className='row flex-row flex-nowrap overflow-auto'>
          {renderCourses}
        </div>
        <h5 className='pt-2'>Categories</h5>
        <p>(render category tags here)</p>
      </Layout>
      <CustomFooter />
    </div>
  );
}

export default Home;
