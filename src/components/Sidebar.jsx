import React from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';
import right_arrow from '../assets/right_arrow.svg';

export default function Sidebar({ isOpen, closeSidebar }) {
    const sidebarRef = React.useRef();
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeSidebar();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef, closeSidebar]);
    return (
        <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar--close" onClick={closeSidebar}><img src={right_arrow} /></button>
            <div className="sidebar--button"><Link to="/" onClick={closeSidebar} className="sidebar--text">Home</Link></div>
            <div className="sidebar--button"><Link to="/story" onClick={closeSidebar} className="sidebar--text">Story</Link></div>
            <div className="sidebar--button"><Link to="/science" onClick={closeSidebar} className="sidebar--text">Science</Link></div>
            <div className="sidebar--button"><Link to="/archive" onClick={closeSidebar} className="sidebar--text">Archive</Link></div>
        </div>
    )
}