import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const GenerateScienceButton = (props) => {
    const navigate = useNavigate();

    const dummyClick = () => {
        console.log("clicked");
        navigate('/science', { state: { previousPage: 'ScienceOverview' } });
    }
    const handleClick = async () => {
        const response = await fetch(
            'https://noggin.rea.gent/added-hyena-6889',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer rg_v1_hmh52ljrt4pcbw6mzsrczr63fplsl3lh1oc3_ngk',
            },
            body: JSON.stringify({
                object: props.star,
            }),
            }
        ).then(response => response.text());
        let jsonObject = JSON.parse(response);
        localStorage.setItem("Current Science", jsonObject.article);

        navigate('/science', { state: { previousPage: 'ScienceOverview' } });
    };

    return (
        <div>
            <Button onClick={handleClick} name="Generate Science"/>
        </div>
    );
};

export default GenerateScienceButton;