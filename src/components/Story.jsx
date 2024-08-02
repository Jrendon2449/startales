import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import SearchButton from './SearchButton';
import Storyboard from './Storyboard';

function Story() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search', { state: { previousPage: 'story' } });
  };

  return (
    <div className="page story">
      <Nav title="Story" navigate={navigate} return_path={"/story_config"}/>
      <Storyboard />
      <SearchButton onClick={handleSearchClick} />
    </div>
  );
}

export default Story;