import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from './Nav';


export default function Find() {
    const navigate = useNavigate();
    const location = useLocation();
    const celestialBody = location.state.celestialBody;

    return (
        <div class="find page">
            <Nav title="Find" navigate={navigate} return_path={"/search"}/>
            <h1>Find {celestialBody.name}</h1>
        </div>
    )
}