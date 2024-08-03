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


    return (
        <>
            <div className="searchboard">
                <p>science stuffs</p>
            </div>
            <SearchButton onClick={handleSearchClick} />    
        </>
    )
}