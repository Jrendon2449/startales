import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../Nav';
import Button from '../Button';

export default function Find() {
    const navigate = useNavigate();
    const location = useLocation();
    const celestialBody = location.state.celestialBody;
    const handleReturn = () => {
        navigate('/search');
    }

    const foundClick = () => {
        navigate('/found', { state: { celestialBody } });
    }

    return (
        <div className="find page">
            <Nav title="Find" navigate={navigate} return_path={"/search"}/>
            <h1>Find {celestialBody.name}</h1>
            <Button onClick={foundClick} name="Found"/>
        </div>
    )
}