import React from 'react';
import "../css/Searchboard.css";
import celestialBodiesJSON from '../../data.js'; // this is fake data for now by the way
import rightArrow from '../../assets/right_arrow.svg';
import { useNavigate } from 'react-router-dom';

export default function Searchboard(props) {
    const celestialBodies = JSON.parse(celestialBodiesJSON);
    const navigate = useNavigate();
    
    const createCelestialBody = (celestialBody) => {
        const handleSearchClick = () => {
            navigate('/find', { state: { celestialBody} });
        };
        return (
            <div className="search-celestial-body">
                <div className="search-celestial-body-text">
                    <h2>{celestialBody.name}</h2>
                    <p>Distance: {celestialBody.distanceFromEarth}</p>
                    <p>Apparent Magnitude: {celestialBody.apparentMagnitude}</p>
                    <p>Type: {celestialBody.type}</p>
                </div>
                <button 
                    className="search-celestial-body--button" 
                    onClick={handleSearchClick}
                >
                    <img src={rightArrow} alt="next" className="nav--icon"/>
                </button>
            </div>)
    }
    const celestialBodyElements = celestialBodies.map(createCelestialBody);

    return (
        <div className="searchboard">
            {celestialBodyElements}
        </div>
    )
}