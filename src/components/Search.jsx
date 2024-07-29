import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';

function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const previousPage = location.state?.previousPage || '/';

  const handleReturn = () => {
    navigate(previousPage === 'Science' ? '/science' : '/story');
  };

  return (
    <div className="page search">
      <Nav title="Search" navigate={handleReturn} return_path={previousPage}/>
    </div>
  );
}

export default Search;