import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import SearchButton from './SearchButton';
import GenerateStoryButton from './GenerateStory';

function StoryConfig() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search', { state: { previousPage: 'Story' } });
  };
  const testingClick = () => {
    console.log("clicked");
  };

  return (
    <div className="page story">
        <Nav title="Story Configuration" navigate={navigate} return_path={"/"}/>
        <GenerateStoryButton
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
                onClick = {testingClick}
        />
    </div>
  );
}

export default StoryConfig;