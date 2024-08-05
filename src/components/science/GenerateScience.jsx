import React, { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const GenerateScienceButton = (props) => {
    const navigate = useNavigate();
    const [buttonState, setButtonState] = useState("Generate Science");

    const dummyClick = () => {
        
        navigate('/science');
    }
    const handleClick = async () => {
        setButtonState("Generating Science...");
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
        
        let science = JSON.parse(localStorage.getItem("Science List"));
        if (science == null) {
            science = [response];
        }
        else {
            science.push(response);
        }

        let myStrScience = JSON.stringify(science);
        localStorage.setItem("Science List", myStrScience);

        navigate('/science');
    };

    return (
        <div>
            <Button onClick={handleClick} name={buttonState}/>
        </div>
    );
};

export default GenerateScienceButton;