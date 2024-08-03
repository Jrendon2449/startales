import React from 'react';
import MagnifyingGlass from '../../assets/magnifying_glass.svg';
import '../css/SearchButton.css';

export default function SearchButton(props) {

    return (
        <>
            <button className="search--button" onClick={props.onClick}>
                <img src={MagnifyingGlass} alt="Search" className="search--icon"/>
            </button>
        </>
    )
}