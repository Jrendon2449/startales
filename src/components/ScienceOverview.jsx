import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import SearchButton from './SearchButton';
import GenerateScienceButton from './GenerateScience';

function ScienceOverview() {
  const navigate = useNavigate();

  return (
    <div className="page story">
        <Nav title="Science Overview" navigate={navigate} return_path={"/"}/>
        <GenerateScienceButton
            star = "Sirius"
        />
    </div>
  );
}

export default ScienceOverview;