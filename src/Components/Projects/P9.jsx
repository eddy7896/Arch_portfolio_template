import { useState, useEffect } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import img1 from "../../projects/p9/1.jpg"
import img2 from "../../projects/p9/2.jpg"
import img3 from "../../projects/p9/3.jpg"

const P9 = ({ textEnter, textLeave }) => {
    const images = [img1, img2, img3];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage(prev => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage(prev => (prev - 1 + images.length) % images.length);
    };
    useEffect(() => {
        textLeave()
    }, [])
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
 
export default P9;