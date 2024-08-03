import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../Nav';
import { currentState } from '../../App';
import Button from '../Button';
import GenerateScienceButton from '../science/GenerateScience';
export default function Found() {
    const {state, setState} = React.useContext(currentState);

    const navigate = useNavigate();
    const location = useLocation();
    const celestialBody = location.state.celestialBody;

    const handleReturn = () => {
        navigate('/find', { state: { celestialBody } });
    }
    
    const generateStory = () => {
        let nextDest = state === "/story" ? "/story_config" : "/science_overview";
        navigate(nextDest, { state: { celestialBody } });
    }
    const generateScience = () => {
        let nextDest = state === "/story" ? "/story_config" : "/science_overview";
        navigate(nextDest, { state: { celestialBody } });
    }

    return (
        <div className="find page">
            <Nav title="You found:" navigate={handleReturn} return_path={"/find"}/>
            <h1>{celestialBody.name}</h1>
            {state === "/story" ? <Button onClick={generateStory} name="Add Story"/> 
                                : <GenerateScienceButton star={celestialBody.name} name="Add Science"/>}
        </div>
    )
}