import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Searchboard from './Searchboard';

function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const previousPage = location.state?.previousPage || '/';

  const handleReturn = () => {
    console.log(previousPage);
    navigate(previousPage === 'science' ? '/science' : '/story');
  };

  return (
    <div className="page search">
      <Nav title="Search" navigate={handleReturn} return_path={previousPage}/>
      <Searchboard />
    </div>
  );
}

export default Search;