import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

function Science() {
    const navigate = useNavigate();

    return (
        <div className="page science">
            <Nav navigate={navigate} />
        <h2>Science Page</h2>
        </div>
    );
}

export default Science;
