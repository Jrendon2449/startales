import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../Nav';
import SearchButton from '../search/SearchButton';
import GenerateScienceButton from './GenerateScience';
import ScienceOverviewBoard from './ScienceOverviewBoard';

function ScienceOverview() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="page story">
        <Nav title="Science Overview" navigate={navigate} return_path={"/"}/>
        <ScienceOverviewBoard />
    </div>
  );
}

export default ScienceOverview;