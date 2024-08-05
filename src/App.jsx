// imports
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
// components
import Home from "./components/Home";
import Story from "./components/story/Story";
import Science from "./components/science/Science";
import Archive from "./components/archive/Archive";
import Search from "./components/search/Search";
import Find from "./components/search/Find";
import Found from "./components/search/Found";
import StoryConfig from "./components/storyConfig/storyConfig";
import ScienceOverview from "./components/science/ScienceOverview";
import ArchiveStoryView from "./components/archive/ArchiveStoryView";
// assets
import Background from "./assets/background.svg";
import "./App.css";

// currentState holds the current state of the app: /science or /story or /archive
const currentState = React.createContext();

// App is the main component that holds the router and the main components
function App() {
  const [state, setState] = useState("/");
  return (
    <currentState.Provider value={{ state, setState }}>
      <Router>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/story_config" element={<StoryConfig />} />
            <Route path="/science" element={<Science />} />
            <Route path="/science_overview" element={<ScienceOverview />} />
            <Route path="/search" element={<Search />} />
            <Route path="/find" element={<Find />} />
            <Route path="/found" element={<Found />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/archive_story" element={<ArchiveStoryView />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          <img src={Background} className="background" alt="Background" />
        </div>
      </Router>
    </currentState.Provider>
  );
}

export default App;
export { currentState };
