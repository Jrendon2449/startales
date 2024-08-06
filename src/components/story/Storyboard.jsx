import React, { useState, useEffect } from 'react';
import back_button from '../../assets/back_button.svg';
import rightArrow from '../../assets/right_arrow.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import '../css/Storyboard.css';
import Button from '../Button';

export default function Storyboard() {
    const navigate = useNavigate();
    const [storyText, setStoryText] = React.useState('');
    const [chapterText, setChapterText] = React.useState('');
    const [storyImage, setStoryImage] = React.useState('');
    const [storyLength, setStoryLength] = React.useState(0);
    const [index, setIndex] = React.useState(storyLength);

    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        if (storyImage) {
            const img = new Image();
            img.src = storyImage;
            img.onload = () => setImageLoaded(true);
            img.onerror = () => setImageLoaded(false);
        }
    }, [storyImage]);

    useEffect(() => {
        if (localStorage.getItem("Current Story") != null) {
            let myArrayString = localStorage.getItem('Current Story');
            let myArray = JSON.parse(myArrayString);
            
            
            setStoryLength(myArray.length);
            setIndex(myArray.length-1);
            
        }
    },[]);
    useEffect(() => {
        if (localStorage.getItem("Story Images") != null) {
            let myArrayString = localStorage.getItem('Story Images');
            let myArray = JSON.parse(myArrayString);
            let arr = myArray[index];
            
            
            
            setStoryImage(arr);
        }
        if (localStorage.getItem("Current Story") != null) {
            let myArrayString = localStorage.getItem('Current Story');
            let myArray = JSON.parse(myArrayString);
            let arr = myArray[index].split("\n");
            
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
            if (array && index < array.length - 1) {
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

    const finishClick = () => {
        let archiveMetaData = [];
        let archiveStory = [];
        let archiveImage = [];

        if (localStorage.getItem("Archive Metadata List")) {
            archiveMetaData = JSON.parse(localStorage.getItem("Archive Metadata List"));
        }
        let curDate = new Date();
        let currentMetaData = [];
        if (localStorage.getItem("Current Metadata")) {
            currentMetaData = JSON.parse(localStorage.getItem("Current Metadata"));
        }
        let currentData = {
            "date": curDate.toLocaleDateString(),
            "stars": currentMetaData
        };
        archiveMetaData.push(currentData);
        localStorage.setItem("Archive Metadata List", JSON.stringify(archiveMetaData));
         

        if (localStorage.getItem("Archive Story List")) {
            archiveStory = JSON.parse(localStorage.getItem("Archive Story List"));
        }
        archiveStory.push(localStorage.getItem("Current Story"));
        localStorage.setItem("Archive Story List", JSON.stringify(archiveStory));
        
        if (localStorage.getItem("Archive Image List")) {
            archiveImage = JSON.parse(localStorage.getItem("Archive Image List"));
        }
        archiveImage.push(localStorage.getItem("Story Images"));
        localStorage.setItem("Archive Image List", JSON.stringify(archiveImage));

        localStorage.removeItem("Current Metadata");
        localStorage.removeItem("Current Story");
        localStorage.removeItem("Story Images");
        navigate('/archive');
    }
    const shareClick = () => {
    if (navigator.share) {
        let story = storyText.map((paragraph) => paragraph.props.children).join('\n');
        navigator.share({
        title: 'Check out this cool story I made with Star Tales!',
        text: story,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
        console.log('Share not supported on this browser, do it the old way.');
    }
    };
    return (
        <>
            <div className="storyboard">
                <h1>{chapterText}</h1>
                {storyImage ? (
                    <img src={storyImage} alt="Story Image" id="story--image"/>
                ) : (
                    <p></p>
                )}
                {/* <img src={storyImage} alt="Story Image" id="story--image"/> */}
                <p>{storyText}</p>
            </div>
            <div className="storyboard--nav">
                <button className="button2" onClick={shareClick} >Share</button>
                <img src={back_button} alt="Back" onClick={decrement} className="nav--icon"/>
                <img src={rightArrow} alt="Next" onClick={increment} className="nav--icon"/>
                <button className="button2" onClick={finishClick}>Finish</button>
            </div>
        </>
    )
}