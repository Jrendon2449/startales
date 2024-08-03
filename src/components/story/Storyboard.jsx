import React, { useEffect } from 'react';
import back_button from '../../assets/back_button.svg';
import rightArrow from '../../assets/right_arrow.svg';

import '../css/Storyboard.css';

export default function Storyboard() {
    const [storyText, setStoryText] = React.useState('');
    const [chapterText, setChapterText] = React.useState('');
    const [index, setIndex] = React.useState(JSON.parse(localStorage.getItem('Current Story')).length - 1);    
    useEffect(() => {
        if (localStorage.getItem("Current Story") != null) {
            let myArrayString = localStorage.getItem('Current Story');
            let myArray = JSON.parse(myArrayString);
            let arr = myArray[index].split("\n");
            setChapterText(arr[0]);
            setStoryText(arr[arr.length - 1]);
        }
        else {
            setChapterText("No Story Yet, Start Exploring!");
        }
    }, [index]); // Empty dependency array ensures this runs only once
    
    const increment = () => {
        setIndex(index => {
            let array = JSON.parse(localStorage.getItem('Current Story'));
            if (index < array.length - 1) {
                return index + 1;
            }
            return index;
        });
    }
    const decrement = () => {
        setIndex(index => {
            if (index > 0) {
                return index - 1;
            }
            return index;
        });
    }

    return (
        <>
            <div className="storyboard">
                <h1>{chapterText}</h1>
                <p>{storyText}</p>
            </div>
            <div className="storyboard--nav">
                <img src={back_button} alt="Back" onClick={decrement} className="nav--icon"/>
                <img src={rightArrow} alt="Next" onClick={increment} className="nav--icon"/>
            </div>
        </>
    )
}