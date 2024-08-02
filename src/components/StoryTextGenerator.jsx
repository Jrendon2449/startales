import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function StoryTextGenerator(props) {
    const [response, setResponse] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch(
    //             'https://noggin.rea.gent/architectural-gerbil-4359',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     Authorization: 'Bearer rg_v1_jgqdhorjipcg39we4ugyuhskn6f4a7976qns_ngk',
    //                 },
    //                 body: JSON.stringify({
    //                     // fill variables here.
    //                     chapter_number: props.chapter,
    //                     star_name: props.star,
    //                     number_of_sentences: props.sentences,
    //                     reading_level: props.level,
    //                     key_words: props.words,
    //                     genre: props.gen,
    //                     mood: props.mo,
    //                     language: props.lan,
    //                     context: props.con,
    //                     final_flag: props.flag,
    //                 }),
    //             }
    //         ).then(response => response.text());

    //         setResponse(result);
    //     };

    //     fetchData();
    // }, []); // dependencies

    return (
        <>
            <Button name="Generate Story" />
            {response}
        </>
    );
}