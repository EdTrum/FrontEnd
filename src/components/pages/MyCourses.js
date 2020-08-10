import React from "react";
import Layout from "../layouts/Layout";
import CustomNavbar from "../layouts/CustomNavbar";
import CustomFooter from "../layouts/CustomFooter";

function MyCourses() {
  return (
    <div>
      <CustomNavbar />
      <Layout>
        <h3>My Courses Page</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          alias explicabo facilis incidunt nemo porro quaerat sit! Aliquid autem
          deserunt harum ipsam iusto libero natus neque nihil officiis, qui quo
          quod sed. Asperiores, at cumque doloremque hic inventore ipsum
          laudantium molestias numquam possimus, quam reiciendis, vel
          voluptatibus voluptatum. Animi at corporis culpa, cumque excepturi
          modi molestias mollitia quasi repellat veritatis.
        </p>
      </Layout>
      <CustomFooter />
    </div>
  );
}

export default MyCourses;
