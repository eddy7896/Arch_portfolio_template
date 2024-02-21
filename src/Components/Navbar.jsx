import logo from "../images/logo.png"
import { useState } from 'react'


const NavBar = ({textEnter, textLeave}) => {

    const [contact, setContact] = useState("Contact")
    
    const handleClick = () => {
        setContact("amcasep@gmail.com")
    }

    return (
        <div className="NavBar">
            <img src={logo} />
            <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>Projects</h5>
            <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>Curriculum</h5>
            <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>Fotography</h5>
            <h5 className="contact" onClick={handleClick} onMouseEnter={textEnter} onMouseLeave={textLeave}>{contact}</h5>
        </div>
    );
}

export default NavBar;