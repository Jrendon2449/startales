import React, { useState } from 'react';
import Button from './Button';

const GenerateStoryButton = (props) => {

    const handleClick = async () => {

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
                context: props.con,
                final_flag: props.flag,
            }),
            }
        ).then(response => response.text());
        localStorage.setItem("Current Story", response);
    };

    return (
        <div>
            <Button onClick={handleClick} name="Generate"/>
        </div>
    );
};

export default GenerateStoryButton;