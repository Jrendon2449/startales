import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../Nav";
import SearchButton from "../search/SearchButton";
import GenerateStoryButton from "../story/GenerateStory";
import "../css/Storyboard.css";
import Select from "react-select";
import { genreOptions, moodOptions, languageOptions } from "../story/StoryParams";

function StoryConfig() {
  const navigate = useNavigate();
  const location = useLocation();
  const celestialBody = location.state.celestialBody;
  const file = location.state.file;
  const [listLength, setListLength] = React.useState(0);

  React.useEffect(() => {
    const currentStory = JSON.parse(localStorage.getItem("Current Story"));
    setListLength(currentStory ? currentStory.length : 0);
  }, []);

  const handleReturn = () => {
    navigate("/found", { state: { celestialBody } });
  };

  const [formData, setFormData] = React.useState({
    star_name: celestialBody.name,
    story_length: 10,
    reading_level: 5,
    specific_words: "",
    genre: null,
    mood: null,
    language: null,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSelectChange = (name) => (selectedOption) => {
    
    setFormData({
      ...formData,
      [name]: selectedOption.value,
    });
  };
  

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
      <Nav title="Story Configuration" navigate={handleReturn} return_path={"/found"} />
      <span>Generating Chapter for:</span>
      <div className="storyConfigboard">
        <p className="starTitle">{celestialBody.name}</p>
        <span>Configure Story</span>
        <div className="slider-container">
        <p className="sliderTitle">Length of Chapter (sentences): {formData.story_length}</p>
        <input
          type="range"
          min="1"
          max="20"
          name="story_length"
          value={formData.story_length}
          onChange={handleInputChange}
          className="slider"
        />
        <p className="sliderTitle">Reading Level (grade): {formData.reading_level}</p>
        <input
          type="range"
          min="1"
          max="13"
          name="reading_level"
          value={formData.reading_level}
          onChange={handleInputChange}
          className="slider"
        />
      </div>
      <div className="keywordInput-container">
        <p className="keywordTitle">Include Specific Words:</p>
        <input
          className="keywordInput"
          type="text"
          name="specific_words"
          value={formData.specific_words}
          onChange={handleInputChange}
          placeholder="example: Joshy, Willy"
        />
      </div>

      <div className="Selector-container">
        <div className="genreSelector">
          <p className="genreTitle">Genre:</p>
          <Select
            options={genreOptions}
            styles={customStyles}
            value={formData.genre ? formData.genre.value : ""}
            onChange={handleSelectChange('genre')}
            menuPlacement="top"
            isSearchable={false}
          />
        </div>
        <div className="genreSelector">
          <p className="genreTitle">Mood:</p>
          <Select
            options={moodOptions}
            styles={customStyles}
            value={formData.mood ? formData.mood.value : ""}
            onChange={handleSelectChange('mood')}
            menuPlacement="top"
            isSearchable={false}
          />
        </div>
        <div className="genreSelector">
          <p className="genreTitle">Language:</p>
          <Select
            options={languageOptions}
            styles={customStyles}
            value={formData.language ? formData.language.value : ""}
            onChange={handleSelectChange('language')}
            menuPlacement="top"
            isSearchable={false}
          />
        </div>
      </div>
      </div>
      <GenerateStoryButton
        chapter={listLength + 1}
        star={formData.star_name}
        sentences= {formData.story_length}
        level= {formData.reading_level}
        words= {formData.specific_words}
        gen= {formData.genre}
        mo= {formData.mood}
        lan= {formData.language}
        con= "" 
        flag= "CONTINUING"
        img= {file}
      />
    </div>
  );
}

export default StoryConfig;
