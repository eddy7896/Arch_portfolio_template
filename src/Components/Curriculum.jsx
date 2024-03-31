import { useEffect } from "react";
import img1 from "../cv/cv1.jpg"
import img2 from "../cv/cv2.jpg"
const Curriculum = () => {


    return (
        <div className="curriculum">
            <div className="cv-container">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
        </div>
    );
}

export default Curriculum;