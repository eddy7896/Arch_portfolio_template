
import { Link } from "react-router-dom"

import img1 from "../projects/p1.jpg"
import img2 from "../projects/p2.jpg"
import img3 from "../projects/p3.jpg"
import img4 from "../projects/p4.jpg"
import img5 from "../projects/p5.jpg"
import img6 from "../projects/p6.jpg"
import img7 from "../projects/p7.jpg"
import img8 from "../projects/p8.jpg"
import img9 from "../projects/p9.jpg"

const Projects = ({ textEnter, textLeave }) => {
    return (
        <div className="Projects">
            <div className="projects-container">
                <div className="p1">
                    <img loading="lazy" src={img1} alt="photo" />
                    <Link to={'/projects/p1'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className="p1Info">
                            <h2>Project 1 details</h2>
                            <h4>Project 1 details</h4>
                            <p>Project 1 details</p>
                        </div>
                    </Link>
                </div>
                <div className="p2">
                    <img loading="lazy" src={img2} alt="photo" />
                    <Link to={'/projects/p2'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className="p2Info">
                            <h2>Project 2 details</h2>
                            <h4>Project 2 details</h4>
                            <p>Project 2 details</p>
                        </div>
                    </Link>
                </div>
                <div className="p3">
                    <img loading="lazy" src={img3} alt="photo" />
                    <Link to={'/projects/p3'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className="p3Info">
                            <h2>Project 3 details</h2>
                            <h4>Project 3 details</h4>
                        </div>
                    </Link>
                </div>
                <div className="p4">
                    <img loading="lazy" src={img4} alt="photo" />
                    <Link to={'/projects/p4'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className="p4Info">
                            <h2>Project 4 details</h2>
                            <h4>Project 4 details</h4>
                        </div>
                    </Link>
                </div>
                <div className="p5">
                    <img loading="lazy" src={img5} alt="photo" />
                    <Link to={'/projects/p5'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className="p5Info">
                            <h2>Project 5 details</h2>
                            <h4>Project 5 details</h4>
                        </div>
                    </Link>
                </div>
                <div className="p6">
                    <img loading="lazy" src={img6} alt="photo" />
                    <Link to={'/projects/p6'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className="p6Info">
                            <h2>Project 6 details</h2>
                            <h4>Project 6 details</h4>
                        </div>
                    </Link>
                </div>
                <div className="p7">
                    <img loading="lazy" src={img7} alt="photo" />
                    <Link to={'/projects/p7'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className="p7Info">
                            <h2>Project 7 details</h2>
                            <h4>Project 7 details</h4>
                        </div>
                    </Link>
                </div>
                <div className="p8">
                    <img loading="lazy" src={img8} alt="photo" />
                    <Link to={'/projects/p8'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className="p8Info">
                            <h2>Project 8 details</h2>
                            <h4>Project 8 details</h4>
                        </div>
                    </Link>
                </div>
                <div className="p9">
                    <img loading="lazy" src={img9} alt="photo" />
                    <Link to={'/projects/p9'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className="p9Info">
                            <h2>Project 9 details</h2>
                            <h4>Project 9 details</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Projects;