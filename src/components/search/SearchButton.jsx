import React from "react";
import MagnifyingGlass from "../../assets/magnifying_glass.svg";
import "../css/SearchButton.css";

export default function SearchButton(props) {
  return (
    <button className="search--button" onClick={props.onClick}>
      <h3>Search For</h3>
      <img src={MagnifyingGlass} alt="Search" className="search--icon" />
      <h3>More Stars!</h3>
    </button>
  );
}
