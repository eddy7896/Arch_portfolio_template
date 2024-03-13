import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"

import { useEffect, useState } from "react"

const HomePage = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const images = [img1, img2, img3, img4, img5];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
            console.log(currentSlide);
        },5000);

        return () => clearInterval(interval);
    }, [images.length]); 

    return (
        <>
            <div className="img-container">
                <div className="carousel-container">
                
                    {images.map((image, index) => (
                
                    <img
                        key={index}
                        className={index === currentSlide ? 'active' : 'image'}
                        src={image}
                        alt={`Slide ${index}`}
                    />
                ))}
                </div>
            </div>
        </>
    );
}

export default HomePage;