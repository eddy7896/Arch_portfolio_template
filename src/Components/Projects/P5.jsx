import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import img1 from "../../projects/p5/1.jpg"
import img2 from "../../projects/p5/2.jpg"
import img3 from "../../projects/p5/3.jpg"
import img4 from "../../projects/p5/4.jpg"
import img5 from "../../projects/p5/5.jpg"
import img6 from "../../projects/p5/6.jpg"
import img7 from "../../projects/p5/7.jpg"
import img8 from "../../projects/p5/8.jpg"
import img9 from "../../projects/p5/9.jpg"
import img10 from "../../projects/p5/10.jpg"

const P5 = ({ textEnter, textLeave }) => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage(prev => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage(prev => (prev - 1 + images.length) % images.length);
    };
    return (
        <div className="singleProject">
        <div className="wrapper">
             <button onClick={prevImage}>
                 <IoIosArrowBack onMouseEnter={textEnter} onMouseLeave={textLeave} />
             </button>
             <img loading="lazy" src={images[currentImage]} alt="picture" />
             <button onClick={nextImage}>
                 <IoIosArrowForward onMouseEnter={textEnter} onMouseLeave={textLeave} />
             </button>
         </div>
     </div>
    );
}
 
export default P5;