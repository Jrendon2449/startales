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
          <p className="appIntroduction">
            This app is designed for begineer who wants to have more interactive
            experience when learning more about the stars in the sky while
            stargazing , and also for intermidiate stargazers who want to learn
            more about the scientific facts of the stars.
          </p>
          <br />
          <b>Introduction to Story Pages: </b> <br />
          <p className="storyIntroduction">
            The sotry pages allow you to create your own story of a star based
            on your personal preference includes genre, mood, and language. We
            also provide different length and reading level for different users
            based on their age. We believe that the process of creating the
            story can give the users a better learning experience and motivation
            while playing with the configuration of the story
          </p>
          <br />
          <b>Introduction to Science Pages: </b> <br />
          <p className="scienceIntroduction">
            The science pages are designed for users that are more experienced
            with stargazing those want to learn more about the scientific facts
            about the stars. This app will give users access to the information
            right away with a few clicks, save the users' time to go through the
            wikipedia and some other websites for extra scitific information.
          </p>
        </div>
      </div>
    </>
  );
};

export default Information;
