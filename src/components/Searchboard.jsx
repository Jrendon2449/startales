import React from 'react';
import "./Searchboard.css";
import celestialBodiesJSON from '../data.js';

export default function Searchboard(props) {
    const celestialBodies = JSON.parse(celestialBodiesJSON);

    const createCelestialBody = (celestialBody) => {
        return (
            <div className="celestial-body">
                <h2>{celestialBody.name}</h2>
                <p>Location: {celestialBody.location}</p>
                <p>Diameter: {celestialBody.diameter}</p>
                <p>Mass: {celestialBody.mass}</p>
            </div>)
    }
    const celestialBodyElements = celestialBodies.map(createCelestialBody);

    return (
        <div className="searchboard">
            <h1>Science rules!</h1>
            {celestialBodyElements}
        </div>
    )
}