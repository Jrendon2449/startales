import React from 'react';
import back_button from '../assets/back_button.svg';
import menu_burger from '../assets/menu_burger.svg';
import Sidebar from './Sidebar';
import './Nav.css';

export default function Nav(props) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    return (
        <nav className="nav">
            <button 
                className="nav--button" 
                onClick={() => props.navigate(props.return_path)}
            >
                <img src={back_button} alt="Back" className="nav--icon"/>
            </button>
            <h1 className="nav--title">{props.title}</h1>
            <img src={menu_burger} alt="Menu" className="nav--icon" onClick={openSidebar}/>
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </nav>
    )
}