import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import SearchButton from "../search/SearchButton";
import GenerateStoryButton from "../story/GenerateStory";
import "../css/Storyboard.css";
import Select from "react-select";

function StoryConfig() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    star_name: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.placeholder]: event.target.value,
    });
  };

  const genreOptions = [
    { value: "Fantasy", label: "Fantasy" },
    { value: "Comedy", label: "Comedy" },
    { value: "Horror", label: "Horror" },
  ];

  const moodOptions = [
    { value: "Weird", label: "Weird" },
    { value: "Shocking", label: "Shocking" },
    { value: "Exciting", label: "Exciting" },
  ];

  const languageOptions = [
    { value: "English", label: "English" },
    { value: "Mandarin", label: "Mandarin" },
    { value: "Spanish", label: "Spanish" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#d9d9d9",
      borderRadius: "15px",
      fontSize: "0.8rem",
      width: "30vw",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "gray" : "white",
    }),
  };
  return (
    <div className="page story">
      <Nav title="Story Configuration" navigate={navigate} return_path={"/"} />
      <span>Generating Chapter 1 for:</span>
      <div className="storyConfigboard">
        {/** 
        <input
          type="text"
          placeholder="star_name"
          value={formData.star_name}
          onChange={handleChange}
        />
        */}

        <p className="starTitle">Star Name</p>
        <span>Configure Story</span>
        <div className="slider-container">
          <p className="sliderTitle">Length of Story:</p>
          <input type="range" min="0" max="100" className="slider" />
          <p className="sliderTitle">Reading Level:</p>
          <input type="range" min="0" max="100" className="slider" />
        </div>
        <div className="keywordInput-container">
          <p className="keywordTitle">Include Specific Words:</p>
          <input
            className="keywordInput"
            type="text"
            placeholder="example: Joshy, Willy"
          />
        </div>

        <div className="Selector-container">
          <div className="genreSelector">
            <p className="genreTitle">Genre:</p>
            <Select options={genreOptions} styles={customStyles} />
          </div>
          <div className="genreSelector">
            <p className="genreTitle">Mood:</p>
            <Select options={moodOptions} styles={customStyles} />
          </div>
          <div className="genreSelector">
            <p className="genreTitle">Language:</p>
            <Select options={languageOptions} styles={customStyles} />
          </div>
        </div>
      </div>
      <GenerateStoryButton
        chapter="1"
        star={formData.star_name}
        sentences="5"
        level="2"
        words="Willy, Joshua"
        gen="science-Fiction"
        mo="happy"
        lan="english"
        con=""
        flag="CONTINUING"
      />
    </div>
  );
}

export default StoryConfig;
