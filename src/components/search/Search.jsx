import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import Searchboard from './Searchboard';
import { currentState } from '../../App';

function Search() {
  const {state, setState} = React.useContext(currentState);
  const location = useLocation();
  const navigate = useNavigate();

  const handleReturn = () => {
    
    navigate(state);
  };

  return (
    <div className="page search">
      <Nav title="Search" navigate={handleReturn}/>
      <Searchboard />
    </div>
  );
}

export default Search;