import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import SearchButton from '../search/SearchButton';
import GenerateScienceButton from './GenerateScience';
import ScienceOverviewBoard from './ScienceOverviewBoard';

function ScienceOverview() {
  const navigate = useNavigate();

  return (
    <div className="page story">
        <Nav title="Science Overview" navigate={navigate} return_path={"/"}/>
        <ScienceOverviewBoard />
    </div>
  );
}

export default ScienceOverview;