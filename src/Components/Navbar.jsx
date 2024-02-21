import logo from "../images/logo.png"
import { useState } from 'react'
import { Link } from "react-router-dom"


const NavBar = ({textEnter, textLeave}) => {

    const [contact, setContact] = useState("Contact")
    
    const handleClick = () => {
        setContact("amcasep@gmail.com")
    }

    return (
        <div className="NavBar">
            <img src={logo} />
            <Link to="/" className="home"><h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>Home</h5></Link>
            <Link to="/projects"><h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>Projects</h5></Link>
            <Link to="/curriculum"><h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>Curriculum</h5></Link>
            <Link to="/fotography"><h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>Fotography</h5></Link>
            <h5 className="contact" onClick={handleClick} onMouseEnter={textEnter} onMouseLeave={textLeave}>{contact}</h5>
        </div>
    );
}

export default NavBar;