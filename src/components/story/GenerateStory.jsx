import React, { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const GenerateStoryButton = (props) => {
    const navigate = useNavigate();
    const [story, setStory] = useState([]);
    const [buttonState, setButtonState] = useState("Generate Story");
    let loading = false;
    React.useEffect(() => {
        
    }, []);

    const dummyClick = () => {
        console.log("clicked");
        navigate('/story');
    }
    const handleClick = async () => {
        
        let storedStory = localStorage.getItem("Current Story");
        if (storedStory) {
            storedStory = JSON.stringify(JSON.parse(storedStory));
        }
        setButtonState("Generating Story...");
        const response = await fetch(
            'https://noggin.rea.gent/architectural-gerbil-4359',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer rg_v1_jgqdhorjipcg39we4ugyuhskn6f4a7976qns_ngk',
            },
            body: JSON.stringify({
                chapter_number: props.chapter,
                star_name: props.star,
                number_of_sentences: props.sentences,
                reading_level: props.level,
                key_words: props.words,
                genre: props.gen,
                mood: props.mo,
                language: props.lan,
                context: storedStory,
                final_flag: props.flag,
            }),
            }
        ).then(response => response.text());
        
        let story = JSON.parse(localStorage.getItem("Current Story")); //existing story
        if (story == null) {
            story = [response];
        }
        else {
            story.push(response);
        }

        let myStrStory = JSON.stringify(story);
        localStorage.setItem("Current Story", myStrStory);
        navigate('/story');
    };

    return (
        <div>
            <Button onClick={handleClick} name={buttonState}/>
        </div>
    );
};

export default GenerateStoryButton;