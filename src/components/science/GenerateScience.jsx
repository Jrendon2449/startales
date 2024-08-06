import React, { useState } from "react";
import Button from "../Button";
import { useNavigate, useLocation } from "react-router-dom";

const GenerateScienceButton = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonState, setButtonState] = useState("Generate Science");
  const [image, setImage] = React.useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const dummyClick = () => {
    navigate("/science");
  };
  const addToScienceImages = (image) => {
    let scienceImages = JSON.parse(localStorage.getItem("Science Images"));
    if (scienceImages == null) {
      scienceImages = [image];
    } else {
      scienceImages.push(image);
    }
    let myStrImages = JSON.stringify(scienceImages);
    console.log("science images", myStrImages);
    localStorage.setItem("Science Images", myStrImages);
  };
  const handleClick = async () => {
    setIsButtonDisabled(true);
    setButtonState("Generating Science...");
    const response = await fetch("https://noggin.rea.gent/added-hyena-6889", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer rg_v1_hmh52ljrt4pcbw6mzsrczr63fplsl3lh1oc3_ngk",
      },
      body: JSON.stringify({
        object: props.star,
      }),
    }).then((response) => response.text());
    let jsonObject = JSON.parse(response);
    localStorage.setItem("Current Science", jsonObject.article);

    let science = JSON.parse(localStorage.getItem("Science List"));
    if (science == null) {
      science = [response];
    } else {
      science.push(response);
    }

    let myStrScience = JSON.stringify(science);
    localStorage.setItem("Science List", myStrScience);
    if (props.img) {
      console.log(props.img);
      setImage(props.img);
      addToScienceImages(props.img);
      localStorage.setItem("Current Science Image", props.img);
    }
    navigate("/science");
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        name={buttonState}
        disabled={isButtonDisabled}
        style={{
          backgroundColor: isButtonDisabled ? "#ccc" : "#0a0909",
          cursor: isButtonDisabled ? "not-allowed" : "pointer",
        }}
      />
    </div>
  );
};

export default GenerateScienceButton;
