import React, { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const GenerateStoryButton = (props) => {
  const navigate = useNavigate();
  const [story, setStory] = useState([]);
  const [buttonState, setButtonState] = useState("Generate Story");
  const [image, setImage] = React.useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  let loading = false;
  const addToStoryImages = (image) => {
    let storyImages = JSON.parse(localStorage.getItem("Story Images"));
    if (storyImages == null) {
      storyImages = [image];
    } else {
      storyImages.push(image);
    }
    let myStrImages = JSON.stringify(storyImages);

    localStorage.setItem("Story Images", myStrImages);
  };

  const addToMetaData = () => {
    let metaData = JSON.parse(localStorage.getItem("Current Metadata"));
    if (metaData == null) {
      metaData = [];
    }
    if (!metaData.includes(props.star)) {
      metaData.push(props.star);
    }

    let myStrMetaData = JSON.stringify(metaData);
    localStorage.setItem("Current Metadata", myStrMetaData);
  };

  const dummyClick = () => {
    navigate("/story");
  };

  const handleClick = async () => {
    setIsButtonDisabled(true);
    console.log("test");
    let storedStory = localStorage.getItem("Current Story");
    if (storedStory) {
      storedStory = JSON.stringify(JSON.parse(storedStory));
    }
    setButtonState("Generating Story...");
    const response = await fetch(
      "https://noggin.rea.gent/architectural-gerbil-4359",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer rg_v1_jgqdhorjipcg39we4ugyuhskn6f4a7976qns_ngk",
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
    ).then((response) => response.text());

    let story = JSON.parse(localStorage.getItem("Current Story")); //existing story
    if (story == null) {
      story = [response];
    } else {
      story.push(response);
    }

    let myStrStory = JSON.stringify(story);
    localStorage.setItem("Current Story", myStrStory);

    addToMetaData();

    if (props.img) {
      console.log(props.img);
      setImage(props.img);
      addToStoryImages(props.img);
    }
    navigate("/story");
  };

  return (
    <div>
      <Button
        id="story--button"
        onClick={handleClick}
        name={buttonState}
        disabled={isButtonDisabled}
        style={{
          backgroundColor: isButtonDisabled ? "#ccc" : "#0a0909",
          cursor: isButtonDisabled ? "not-allowed" : "",
        }}
      />
    </div>
  );
};

export default GenerateStoryButton;
