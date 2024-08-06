import React, { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import Nav from "../Nav";


const Information = () => {
    return (
        <>
        <Nav title="Story" navigate={navigate} return_path={"/"} />
        <p className = "appIntroduction">  
        This app is designed for begineer who wants to have more interactive experience when learning more about the stars in the sky while stargazing
        , and also for intermidiate stargazers who want to learn more about the scientific facts of the stars. 
        </p>
        <p className = "storyIntroduction">
        The sotry pages allow you to create your own story based on your personal preference includes
        genre, mood, and language. We also provide different length and reading level for different users 
        based on their age. We believe that the process of creating the story can give you a better learning
        experience and motivation while playing with the setting. We believe this app can help you to learn
        more about the stars youu like in a ,ore intersting and memorizable way. 
        </p>
        <p className = "scienceIntroduction">
        The science pages are designed for users that are more experienced with stargazing but also want to learn 
        more about the scientific facts about the stars. This app will give users access to the information 
        right away with a few clicks, save the users' time to go through the wikipedia and some other websites
        for extra scitific information. Which also gives the users who want to know more about the stars after generating a story of the star.
        </p>
    </>
    );
};

export default Information

