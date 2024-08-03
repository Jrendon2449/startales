import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import SearchButton from '../search/SearchButton';
import Scienceboard from './Scienceboard';
import { currentState } from '../../App';
import { useEffect } from 'react';


function Science() {
  const navigate = useNavigate();

  const { state, setState } = React.useContext(currentState);

  useEffect(() => {
      setState('/science');
    }, [setState]);
  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className="page science">
      <Nav title="Science" navigate={navigate} return_path={"/science_overview"}/>
      <Scienceboard />
      <SearchButton onClick={handleSearchClick} />
    </div>
  );
}

export default Science;