import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import "../css/information.css";

const Information = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav title="Information" navigate={navigate} return_path={"/"} />
      <div className="information-container">
        <div className="information-wrapper">
          <b>Introduction to the app: </b> <br />
          <br></br>
          <p className="appIntroduction">
            We designed this app for stargazers to learn more about the scientific
            facts of the stars and for them to have more interactive, engaging
            experiences when stargazing.
          </p>
          <br />
          <b>Introduction to Story Page: </b> <br />
          <br></br>
          <p className="storyIntroduction">
            The story page allows users to create their own story of a star based
            on their personal preference for genre, mood, and language. We also 
            provide different length and reading levels for users across various 
            age range. We believe that the process of creating the story can give 
            the users a better learning experience and motivation for stargazing
          </p>
          <br />
          <b>Introduction to Science Page: </b> <br />
          <br></br>
          <p className="scienceIntroduction">
            The science page allows users to learn interesting, unique facts
            about the stars with a click of a button! This app will give users 
            access to the information immediately, instead of having to search
            through online websites for extra scientific information.
          </p>
          <br />
          <b>We hope you enjoy our app!</b> <br />
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Information;
