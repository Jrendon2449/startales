import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

function Story() {
  const navigate = useNavigate();

  return (
    <div className="page story">
        <Nav title="Story" navigate={navigate} return_path={"/"}/>
    </div>
  );
}

export default Story;