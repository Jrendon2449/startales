import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import SearchButton from '../search/SearchButton';
import GenerateStoryButton from './GenerateStory';

function StoryConfig() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    star_name: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.placeholder]: event.target.value
    });
  }

  return (
    <div className="page story">
        <Nav title="Story Configuration" navigate={navigate} return_path={"/"}/>
        <input type="text" placeholder="star_name" value={formData.star_name} onChange={handleChange}/>
        <GenerateStoryButton
                chapter = "1"
                star = {formData.star_name}
                sentences = "5"
                level = "2"
                words = "Willy, Joshua"
                gen = "science-Fiction"
                mo = "happy"
                lan = "english"
                con = ""
                flag = "CONTINUING"
        />
    </div>
  );
}

export default StoryConfig;