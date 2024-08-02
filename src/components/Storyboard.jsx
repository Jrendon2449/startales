import React, { useEffect } from 'react';
import './Storyboard.css';

export default function Storyboard() {

    const [storyText, setStoryText] = React.useState('');
    useEffect(() => {
        if (localStorage.getItem("Current Story") != null) {
            setStoryText(localStorage.getItem("Current Story"));
        }
    }, []); // Empty dependency array ensures this runs only once
    
    return (
        <div className="storyboard">
            <h1> The story </h1>
            <p>{storyText}</p>
        </div>
    )
}