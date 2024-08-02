import React, { useEffect } from 'react';
import './Storyboard.css';

export default function Storyboard() {

    const [storyText, setStoryText] = React.useState('');
    const [chapterText, setChapterText] = React.useState('');
    useEffect(() => {
        if (localStorage.getItem("Current Story") != null) {
            let arr = localStorage.getItem("Current Story").split("\n");
            setChapterText(arr[0]);
            setStoryText(arr[arr.length - 1]);
        }
    }, []); // Empty dependency array ensures this runs only once
    
    return (
        <div className="storyboard">
            <h1>{chapterText}</h1>
            <p>{storyText}</p>
        </div>
    )
}