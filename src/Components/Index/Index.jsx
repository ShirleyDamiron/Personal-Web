import React from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import "./index.css";

function Index() {
  return (
    <>
      <div className="content-wrapper">
        <Nav />
        <div className="aboutMe">
          <div className="imgContainer">
            <img className="imgMe" src="/images/shirley.jpeg" alt="Shirley" />
          </div>
          <p className="aboutMeP">
            {" "}
            Hello, my name is Shirley Damiron, welcome to my Portfolio! I am 
            challenged-driven, excited to explore all about the world.
            A Junior Software Developer craving the learning opportunities that can
            help my growth in the Tech field and sharpen the skills needed to succeed. Looking
            forward to work with amazing people and make the best out of every moment!
          </p>
          <div className="experienceCube">
            <h1 className="experienceTitle">Experience:</h1>
            <ul className="containerList">
              <li className="_li">HTML</li>
              <li className="_li">CSS</li>
              <li className="_li">JavaScript </li>
              <li className="_li">ReactJS</li>
              <li className="_li">NodeJS </li>
              <li className="_li">MySQL </li>
              <li className="_li">MongoDB </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
