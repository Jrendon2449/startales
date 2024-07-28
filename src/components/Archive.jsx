import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

function Archive() {
    const navigate = useNavigate();

    return (
        <div className="page story">
            <Nav navigate={navigate} />
        <h2>Archive Page</h2>
        </div>
    );
}

export default Archive;
