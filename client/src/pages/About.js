import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            My name is Mohd Sameer. I am from siddharta nagar, Uttar pradsh. I
            am currently pursuing MCA from Manipal University, Jaipur. I secured
            71% in BCA from chatrapati sahuji maharaj university, Kanpur and 84%
            in 10th stander and 62% in 12th stander from UP board. I have
            actively participated in various technical events and competitions,
            which have enhanced my problem-solving abilities and developed my
            skills in programming languages such as C, Java javascript, and
            React. My goal is to continuously learn and grow in the field of
            technology, contributing to innovative solutions and making a
            positive impact.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
