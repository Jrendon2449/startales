import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import SearchButton from './SearchButton';

function Story() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search', { state: { previousPage: 'Story' } });
  };

  return (
    <div className="page story">
      <Nav title="Story" navigate={navigate} return_path={"/"}/>
      <SearchButton onClick={handleSearchClick} />
    </div>
  );
}

export default Story;