import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  //localStorage.clear();
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate("/information");
  };
  return (
    <>
      <h1 className="home--title">Star Tales</h1>
      <div className="buttons">
        <h2>
          <em>Today let's...</em>
        </h2>
        <Link to="/story">
          <Button name="Write a Story" onClick={props.fullscreen} />
        </Link>
        <Link to="/science_overview">
          <Button name="Learn Science" onClick={props.fullscreen} />
        </Link>
        <Link to="/archive">
          <Button name="Archive" onClick={props.fullscreen} />
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
