import React, { useEffect } from 'react';
import back_button from '../../assets/back_button.svg';
import rightArrow from '../../assets/right_arrow.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import '../css/Storyboard.css';

export default function Storyboard() {
    const navigate = useNavigate();
    const [storyText, setStoryText] = React.useState('');
    const [chapterText, setChapterText] = React.useState('');
    const [storyImage, setStoryImage] = React.useState('');
    const [index, setIndex] = React.useState(() => {
        const storedStory = localStorage.getItem('Current Story');
        if (storedStory) {
            const parsedStory = JSON.parse(storedStory);
            return parsedStory.length - 1;
        }
        return 0;
    });
    useEffect(() => {
        if (localStorage.getItem("Story Images") != null) {
            let myArrayString = localStorage.getItem('Story Images');
            let myArray = JSON.parse(myArrayString);
            let arr = myArray[index];
            console.log(myArray);
            console.log("YOOOHOOOOO");
            console.log(index);
            setStoryImage(arr);
        }
        if (localStorage.getItem("Current Story") != null) {
            let myArrayString = localStorage.getItem('Current Story');
            let myArray = JSON.parse(myArrayString);
            let arr = myArray[index].split("\n");
            console.log(arr);
            setChapterText(arr[0]);
            setStoryText(arr.slice(1).map((text) => <p className="story--paragraph">{text}</p>));
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
                <img src={storyImage} alt="Story Image" id="story--image"/>
                <p>{storyText}</p>
            </div>
            <div className="storyboard--nav">
                <img src={back_button} alt="Back" onClick={decrement} className="nav--icon"/>
                <img src={rightArrow} alt="Next" onClick={increment} className="nav--icon"/>
            </div>
        </>
    )
}