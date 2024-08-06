import { useState } from "react";

export default function Button(props) {
  return (
    <button
      className="button"
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.name}
    </button>
  );
}
