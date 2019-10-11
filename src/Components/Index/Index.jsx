import React from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer"
import "./index.css";

function Index() {
  return (
    <>
      <div className="content-wrapper">
        <Nav />
      <div className="aboutMe">
        <p className="aboutMeP">
          {" "}
          Hello, my name is Shirley Damiron, Welcome to my Portfolio! A
          challenge-driven young adult excited to explore all about the world. A
          Junior Software Developer craving learning opportunities that can help
          my growth and sharpen my skills. A friendly Latina looking forward to
          work with amazing people!
        </p>
        <div className="experienceCube">
          <h1>Experience:</h1>
          <ul className="containerList">
              <li className="_li">HTML <img className="logoImg" src="/logos/htmlLogo.svg"></img></li>
              <li className="_li">CSS <img className="logoImg" src="/logos/cssLogo.png"></img></li>
              <li className="_li">Javascript <img className="logoImg" src="/logos/javascriptLogo.png"></img></li>
              <li className="_li">React <img className="logoImg" src="/logos/reactLogo.svg"></img></li>
              <li className="_li">NodeJS <img className="logoImg" src="/logos/nodejsLogo.png"></img></li>
              <li className="_li">MySQL <img className="logoImg" src="/logos/mysql_PNG9.png"></img></li>
          </ul>
          </div>
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
