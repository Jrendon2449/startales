import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Star from './assets/Star.svg'
import Story from './components/Story';
import Science from './components/Science';
import Archive from './components/Archive';
import Search from './components/Search'; // Import the Search component
import Background from './assets/background.svg'
import Find from './components/Find'
import './App.css'
import StoryConfig from './components/StoryConfig';

function App() {

  return ( // router specifies what path each component is rendered on
    <Router>
      <div className="main">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="home--title">Star Tales</h1>
              <div className="buttons">
                <Link to="/story_config"><Button name="Story" /></Link>
                <Link to="/science"><Button name="Science" /></Link>
                <Link to="/archive"><Button name="Archive" /></Link>
              </div>
            </>
          } />
          <Route path="/story" element={<Story />} />
          <Route path="/story_config" element={<StoryConfig />} />
          <Route path="/science" element={<Science />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/find" element={<Find />} />
        </Routes>
        <img src={Background} className="background" alt="Background" />
      </div>
    </Router>
  )
}

export default App