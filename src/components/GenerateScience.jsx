import React, { useState } from 'react';
import Button from './Button';

const GenerateScienceButton = (props) => {

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
        localStorage.setItem("Current Science", response);
    };

    return (
        <div>
            <Button onClick={handleClick} name="Generate"/>
        </div>
    );
};

export default GenerateScienceButton;