import img1 from "../projects/p1.jpg"
import img2 from "../projects/p2.jpg"
import img3 from "../projects/p3.jpg"
import img4 from "../projects/p4.jpg"
import img5 from "../projects/p5.jpg"
import img6 from "../projects/p6.jpg"
import img7 from "../projects/p7.jpg"
import img8 from "../projects/p8.jpg"
import img9 from "../projects/p9.jpg"

const Projects = () => {
    return (
        <div className="Projects">
            <div className="projects-container">
            <img loading="lazy" decoding="async" src={img1} alt="photo"/>
            <img loading="lazy" decoding="async" src={img2} alt="photo"/>
            <img loading="lazy" decoding="async" src={img3} alt="photo"/>
            <img loading="lazy" decoding="async" src={img4} alt="photo"/>
            <img loading="lazy" decoding="async" src={img5} alt="photo"/>
            <img loading="lazy" decoding="async" src={img6} alt="photo"/>
            <img loading="lazy" decoding="async" src={img7} alt="photo"/>
            <img loading="lazy" decoding="async" src={img8} alt="photo"/>
            <img loading="lazy" decoding="async" src={img9} alt="photo"/>
            </div>
        </div>
    );
}

export default Projects;