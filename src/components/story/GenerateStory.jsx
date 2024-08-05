import React, { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const GenerateStoryButton = (props) => {
    const navigate = useNavigate();
    const [story, setStory] = useState([]);
    const [buttonState, setButtonState] = useState("Generate Story"); 
    const [image, setImage] = React.useState(null);    
    const api_private = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDYtx1O+pbphTzvuZg6SC/e2v+kt9t1l4jFOp//6aRZ0b8DwJ3Pge2XKD1VDGrzLFQVB21mKM8dP6wsJOYUvuabUpbLUk+durHGmfpunDOMVMRKhXRUAsLIPCD3UdbjhL0NjoysOHveHB0651YZbD5qoXWK1EfCw0jcegk33h9kj8QlCONxXu9QjWZ47mFuBGwDXVGu5/TSk54JZLra+7Gd5BM8WrLCqPgMcQBKtVp/WH3pcNEt4NTW9fE+brAnuXgMMJSB0UvxU+3vYpZ4eI+lzZ9UVaMnV2mulGUf4Z3g/EHft0LXQJue6nXL9sOoVVKCz0e4uxk06DWrPPbvlZHfAgMBAAECggEACsuARb1cxBATe3t6tjh/TfIJtupDn8VnFi/35Vb9jU3R3n17PulhbNyfxXtDXo6QN6XxkJuqyXGxAVfrMBBcS1NfWIxmk9xHW7Wy0EyukqhsSKwCIecrTa8VE0y70AR+KE03+6IqpWMwH42Db+vA5i3ZvYsacfypRfY8PFCvrqIVLWUJNfYsTX8MC/Gdn/3NQ8Mn2Co9JjleZzpntN7EY4wuWTErT0HwgzesGgm8oT+8rCwOiyYgEhJi8tdNij4Qcfc+JOyQoVXAXsgwJ4LQ5GEqPehiirZAxG+S7MhKETHyLQlWtYz5nCGSIw07QGaIQxTo+vSbzaj6Y8da71d7tQKBgQD2W/Mtb0YoGuitStWVezaMl553EoCpAE4eBpjpJRGgxuqwhyTsQg8zFsEZrx0S6TlT+RPpdGse7eHcRqnuIqb6RVGQ8vodzyLubg8uwWPKWvgy4G1zklMMuUE/BjcuNA70TH6CDFKomKzZQD0IgOK/+m/NfpR949y+Lm92jrcZQwKBgQDhMjBxlmWbwH8oOPwC6XpgEBRcpPHWqm7bNH1nqoGhTX/iCBkS43fK6ENN3p3ppCFJjI5o+43YtpRp4M+q4e6jkpcELBgbcDpaY/4M9+Wl8s2wl+5Ebx4MDc3Yyj/WP84uP3f6ormhidBuRM42xZjeFLDfM97LIZ5DjcLl6oBdNQKBgDsV1n7hHyxjN8bIGe2d/Xk+q+zW7TCbOCEPaAESuOWcj5EC+KIJPef83xcv3oM4mF1BcbseBssGNpNEB2FrwixoD6X6AG7BzRjuIIoQK8TOiJR7KwT65Rw6GiHpdbaJGcURy42ZMwHojBwWwgyWDMwKXmIkp6yBx+F89ZKzq8pNAoGBAL1iYwEzlTH+GjHucmnUhlkBTM543PVGEcKBizFCYJARyAmD++o5qAXZfLihDjZuFJxw+1borurg6UF9kcfJB9NCNYSJvKBeqoRX8VBgrh34auknbHba5+8FMOcvd64rrK6SK8l5Thm+9620aaQAW0XxKqobSjOUiy+OqaiHpPo9AoGBAPD7hxfNOsp6lu7SMuahzqyCGErPrGsJlRrikhpkT4i1ncByOv91qhirJMfFnLO5c+BRyYddfTvONoXd/9GfMbG5JFL1t9a7dl7KiOFfMN6K4hqB0LlbMcTXTXrtDvGbJfzgDHn7N05dcHScHsfL0VopibmqpCaM7INxPLpjF7y0"
    const api_actual ="AIzaSyA8CKVgIfnRhNMEQDpoPOetMzavqA2MjUQ"
    const searchID = "80fd241a6e7334a4c"
    let loading = false;
    const addToStoryImages = (image) => {
        let storyImages = JSON.parse(localStorage.getItem("Story Images"));
        if (storyImages == null) {
            storyImages = [image];
        }
        else {
            storyImages.push(image);
        }
        let myStrImages = JSON.stringify(storyImages);
        console.log(myStrImages);
        localStorage.setItem("Story Images", myStrImages);      
    }

    const addToMetaData = () => {
        let metaData = JSON.parse(localStorage.getItem("Current Metadata"));
        if (metaData == null) {
            metaData = [];
        }
        if (!metaData.includes(props.star)) {
            metaData.push(props.star);
        }
        console.log(metaData);

        let myStrMetaData = JSON.stringify(metaData);
        localStorage.setItem("Current Metadata", myStrMetaData);
    }

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

        addToMetaData();

        const fetchResults = async () => {
            try {
              const query = `${props.star} space object image`
              const response = await fetch(
                `https://www.googleapis.com/customsearch/v1?key=${api_actual}&cx=${searchID}&q=${props.star}&searchType=image`
              );
              const data = await response.json();
              if (data.items && data.items.length > 0) {
                  setImage(data.items[0].link);
                  addToStoryImages(data.items[0].link);
              }
            } catch (error) {
              console.error('Error fetching results:', error);
            }
          };
          fetchResults();
        navigate('/story');
    };

    
    return (
        <div>
            <Button id="story--button" onClick={handleClick} name={buttonState}/>
        </div>
    );
};

export default GenerateStoryButton;