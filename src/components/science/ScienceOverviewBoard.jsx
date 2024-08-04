import React from 'react';
import "../css/Searchboard.css";
import rightArrow from '../../assets/right_arrow.svg';
import { useNavigate } from 'react-router-dom';
import SearchButton from '../search/SearchButton';
import { currentState } from '../../App';
import { useEffect } from 'react';

export default function ScienceOverviewBoard(props) {
    const { state, setState } = React.useContext(currentState);

    useEffect(() => {
        setState('/science');
    }, [setState]);
    const navigate = useNavigate();
    const handleSearchClick = () => {
        navigate('/search');
    };
    const scienceList = localStorage.getItem("Science List") ? JSON.parse(localStorage.getItem("Science List")) : [];
    
    const createScienceList = (celestialBodyString) => {
        const celestialBody = JSON.parse(celestialBodyString);
        if (!localStorage.getItem(celestialBody.name)) {
            localStorage.setItem(celestialBody.name, celestialBody.article);
        }
        const handleSearchClick = () => {
            localStorage.setItem("Current Science", localStorage.getItem(celestialBody.name));
            navigate('/science');
        };
        return (
            <div className="search-celestial-body">
                <div className="search-celestial-body-text">
                    <h2>{celestialBody.name}</h2>
                    <p>Distance: {celestialBody.distance_from_earth}</p>
                    <p>Apparent Magnitude: {celestialBody.apparent_magnitude}</p>
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

    const scienceListElements = scienceList.map(createScienceList);
    
    return (
        <>
            <div className="searchboard">
            {scienceList.length > 0 ? scienceListElements : <h1>Click Button Below to learn more!</h1>}
            </div>
            <SearchButton onClick={handleSearchClick} />
        </>
    )
}