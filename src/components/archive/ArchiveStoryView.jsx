import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Nav from "../Nav";
import Button from "../Button";
import SearchButton from "../search/SearchButton";
import ArchiveStoryViewBoard from "./ArchiveStoryViewBoard";
import { currentState } from "../../App";

function ArchiveStoryView() {
  const navigate = useNavigate();

  return (
    <div className="page story">
      <Nav title="Past Story" navigate={navigate} return_path={"/"} />
      <ArchiveStoryViewBoard />
    </div>
  );
}

export default ArchiveStoryView;
