import React from 'react';
import "../css/Searchboard.css";
import rightArrow from '../../assets/right_arrow.svg';
import { useNavigate } from 'react-router-dom';
import SearchButton from '../search/SearchButton';
import { currentState } from '../../App';
import { useEffect } from 'react';

export default function ArchiveBoard(props) {
    
    const navigate = useNavigate();
    const handleSearchClick = () => {
        navigate('/search');
    };
    const archiveMetaData = localStorage.getItem("Archive Metadata List") ? JSON.parse(localStorage.getItem("Archive Metadata List")) : [];
    const archiveStoryList = localStorage.getItem("Archive Story List") ? JSON.parse(localStorage.getItem("Archive Story List")) : [];
    const archiveImageList = localStorage.getItem("Archive Image List") ? JSON.parse(localStorage.getItem("Archive Image List")) : [];
    
    const createArchiveList = (currentMetaData, currentStoryString, currentImageString) => {
        const currentStory = JSON.parse(currentStoryString);
        const currentImage = JSON.parse(currentImageString);
        const handleSearchClick = () => {
            localStorage.setItem("Current Archive Story", currentStoryString);
            localStorage.setItem("Current Archive Image", currentImageString);
            navigate('/archive_story');
        };
        

        return (
            <div className="search-celestial-body">
                <div className="search-celestial-body-text">
                    <h2>Story {currentMetaData["date"]}</h2>
                    <p>Number of Chapters: {currentStory.length}</p>
                    <p>Stars Visited: {currentMetaData["stars"].join(', ')}</p>
                </div>
                <button 
                    className="search-celestial-body--button" 
                    onClick={handleSearchClick}
                >
                    <img src={rightArrow} alt="next" className="nav--icon"/>
                </button>
            </div>)
    }

    let archiveListElements = [];
    for (let i = 0; i < archiveMetaData.length; i++) {
        archiveListElements.push(createArchiveList(archiveMetaData[i], archiveStoryList[i], archiveImageList[i]));
    }
    
    return (
        <>
            <div className="searchboard">
            {archiveMetaData.length > 0 ? archiveListElements : <h1>Click Button Below to learn more!</h1>}
            </div>
        </>
    )
}