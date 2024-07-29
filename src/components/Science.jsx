import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

function Science() {
    const navigate = useNavigate();

    return (
        <div className="page science">
            <Nav title="Science" navigate={navigate} return_path={"/"}/>
        </div>
    );
}

export default Science;
