import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Nav from '../Nav';
import SearchButton from '../search/SearchButton';
import Storyboard from './Storyboard';
import { currentState } from '../../App';

function Story() {
  const navigate = useNavigate();

  const { state, setState } = React.useContext(currentState);

  useEffect(() => {
    setState('/story');
  }, [setState]);

  const handleSearchClick = () => {
    navigate('/search', { state: { previousPage: 'story' } });
  };

  return (
    <div className="page story">
      <Nav title="Story" navigate={navigate} return_path={"/"}/>
      <Storyboard />
      <SearchButton onClick={handleSearchClick} />
    </div>
  );
}

export default Story;