import { useState, useEffect } from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter"

const LoadingScreen = () => {
const [typeEffect] = useTypewriter({
    words: ['An Architectural Portfolio'],
    typeSpeed:100,
    deleteSpeed:100,
})
const [typeEffect2] = useTypewriter({
    words: ['Developed by Faheem'],
    typeSpeed:100,
})
    return (
        <div className="loading-page">
            <h1 className="loading-message"><span>{typeEffect}</span></h1> 
            <span><Cursor></Cursor></span>
            <footer className="loading-footer"><span>{typeEffect2}</span></footer>
        </div>
    );
}
 
export default LoadingScreen;