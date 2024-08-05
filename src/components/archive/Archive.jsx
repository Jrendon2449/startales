import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import ArchiveBoard from './ArchiveBoard';

function Archive() {
    const navigate = useNavigate();

    return (
        <div className="page story">
            <Nav title="Archive" navigate={navigate} return_path={"/"}/>
            <ArchiveBoard />
        </div>
    );
}

export default Archive;
