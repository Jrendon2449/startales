import React, { useEffect } from 'react';
import './Storyboard.css';

export default function Scienceboard() {

    const [scienceText, setScienceText] = React.useState('');
    const [starText, setStarText] = React.useState('');
    useEffect(() => {
        if (localStorage.getItem("Current Science") != null) {
            let arr = localStorage.getItem("Current Science").split("\n\n");
            setStarText(arr[0]);
            let originalText = arr[arr.length - 1];
            let htmlText = originalText.replace(/\n/g, "<br>");
            setScienceText(htmlText);
            document.getElementById("text").innerHTML = htmlText;
        }
    }, []); // Empty dependency array ensures this runs only once
    
    return (
        <div className="storyboard">
            <h1>{starText}</h1>
            <p id="text"></p>
        </div>
    )
}