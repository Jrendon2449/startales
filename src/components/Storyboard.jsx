import React from 'react';
import './Storyboard.css';
import StoryTextGenerator from './StoryTextGenerator';
import GenerateStoryButton from './GenerateStory';

export default function Storyboard() {
    const handleSearchClick = () => {
        navigate('/search', { state: { previousPage: 'science' } });
      };
    const [storyText, setStoryText] = React.useState('');
    
    return (
        <div className="storyboard">
            <h1> The story </h1>
            <p>{storyText}</p>
            <Generate
                chapter = "1"
                star = "Arcturus"
                sentences = "5"
                level = "2"
                words = "Willy, Joshua"
                gen = "science-Fiction"
                mo = "happy"
                lan = "english"
                con = ""
                flag = "CONTINUING"
            />
        </div>
    )
}