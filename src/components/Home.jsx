import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="home--title">Star Tales</h1>
      <div className="buttons">
        <Link to="/story">
          <Button name="Story" />
        </Link>
        <Link to="/science_overview">
          <Button name="Science" />
        </Link>
        <Link to="/archive">
          <Button name="Archive" />
        </Link>
      </div>
    </>
  );
}
