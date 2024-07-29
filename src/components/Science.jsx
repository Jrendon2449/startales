import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import SearchButton from './SearchButton';

function Science() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search', { state: { previousPage: 'science' } });
  };

  return (
    <div className="page science">
      <Nav title="Science" navigate={navigate} return_path={"/"}/>
      <SearchButton onClick={handleSearchClick} />
    </div>
  );
}

export default Science;