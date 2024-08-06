import React, { useState, useEffect } from 'react';
import '../css/Storyboard.css';

export default function Scienceboard() {

    const [scienceImage, setScienceImage] = React.useState('');
    const [scienceText, setScienceText] = React.useState('');
    const [starText, setStarText] = React.useState('');

    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        if (scienceImage) {
            const img = new Image();
            img.src = scienceImage;
            img.onload = () => setImageLoaded(true);
            img.onerror = () => setImageLoaded(false);
        }
    }, [scienceImage]);

    useEffect(() => {
        if (localStorage.getItem("Current Science Image") != null) {
            let imageString = localStorage.getItem('Current Science Image');
            
            setScienceImage(imageString);
            console.log(scienceImage);
        }
    }, []); // Empty dependency array ensures this runs only once

    useEffect(() => {
        if (localStorage.getItem("Current Science") != null) {
            let arr = localStorage.getItem("Current Science").split("\n\n");
            setStarText(arr[0]);
            let originalText = arr[arr.length - 1];
            let splitText = originalText.split("Description:");
            let combinedText = splitText[0] + '\nDescription:' + splitText[1];
            let htmlText = combinedText.replace(/\n/g, "<br>");
            setScienceText(htmlText);
            document.getElementById("text").innerHTML = htmlText;
        }
    }, []); // Empty dependency array ensures this runs only once
    return (
        <div className="scienceboard">
            <h1>{starText}</h1>
            {imageLoaded ? (
                <img src={scienceImage} style= {{ "margin-bottom": "20px" }} alt="Science Image" id="story--image"/>
            ) : (
                <p></p>
            )}
            <p id="text"></p>
        </div>
    )
}