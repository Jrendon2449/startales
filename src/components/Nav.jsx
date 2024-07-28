import React from 'react';
import './Nav.css';

export default function Nav(props) {
    return (
        <nav className="nav">
            <button 
                className="nav--button" 
                onClick={() => props.navigate('/')}
            >back </button>
        </nav>
    )
}