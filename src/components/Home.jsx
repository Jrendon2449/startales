import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Home() {
  function FullscreenButton() {
    const goFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    }
  };
  const goFullScreen = FullscreenButton();
  return (
    <>
      <h1 className="home--title">Star Tales</h1>
      <div className="buttons">
        <Link to="/story">
          <Button name="Story" onClick={goFullScreen}/>
        </Link>
        <Link to="/science_overview">
          <Button name="Science" onClick={goFullScreen}/>
        </Link>
        <Link to="/archive">
          <Button name="Archive" onClick={goFullScreen}/>
        </Link>
      </div>
    </>
  );
}
