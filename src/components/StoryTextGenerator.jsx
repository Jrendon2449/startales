import React from 'react';

export default async function StoryTextGenerator(chapter, star, sentences, level, words, gen, mo, lan, con, flag) {
    // import fetch from 'node-fetch'; // for node.js

    const response = await fetch(
        'https://noggin.rea.gent/architectural-gerbil-4359',
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer rg_v1_jgqdhorjipcg39we4ugyuhskn6f4a7976qns_ngk',
        },
        body: JSON.stringify({
            // fill variables here.
            chapter_number: chapter,
            star_name: star,
            number_of_sentences: sentences,
            reading_level: level,
            key_words: words,
            genre: gen,
            mood: mo,
            language: lan,
            context: con,
            final_flag: flag,
        }),
        }
    ).then(response => response.text());

    return (
        <>
            response
        </>
    )
}