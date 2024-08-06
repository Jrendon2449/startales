import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate("/information");
  };

  const handleFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
    if (props.fullscreen) {
      props.fullscreen();
    }
  };

  return (
    <>
      <h1 className="home--title">Star Tales</h1>
      <div className="buttons">
        <h2>
          <em>Today let's...</em>
        </h2>
        <Link to="/story">
          <Button name="Write a Story" onClick={handleFullscreen} />
        </Link>
        <Link to="/science_overview">
          <Button name="Learn Science" onClick={handleFullscreen} />
        </Link>
        <Link to="/archive">
          <Button name="Archive" onClick={handleFullscreen} />
        </Link>
        <IoMdInformationCircleOutline
          size="35px"
          onClick={handleIconClick}
          className="informationIcon"
        />
      </div>
    </>
  );
}