import { Route, Routes } from 'react-router-dom'
import img1 from "./images/img1.jpg"
import NavBar from './Components/Navbar'
import './App.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HomePage from './Components/HomePage'
import Curriculum from './Components/Curriculum'
import LoadingScreen from './Components/LoadingScreen'
import Projects from './Components/Projects'
import Fotography from './Components/Fotography'

import P1 from './Components/Projects/P1'
import P2 from './Components/Projects/P2'
import P3 from './Components/Projects/P3'
import P4 from './Components/Projects/P4'
import P5 from './Components/Projects/P5'
import P6 from './Components/Projects/P6'
import P7 from './Components/Projects/P7'
import P8 from './Components/Projects/P8'
import P9 from './Components/Projects/P9'


function App() {

  const [mousePosition, setMousePosition] = useState ({ x: 0, y: 0  });
  const [laggedPosition, setLaggedPosition] = useState({ x: 0, y: 0 });

  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
      setLaggedPosition({
        x: e.clientX,
        y: e.clientY
      });
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }

  }, [])


  const variantsLagged = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30
    },
    text: {
      height: 0,
      width: 0,
      x: mousePosition.x,
      y: mousePosition.y
    }, 
    click: {
      height: 3000,
      width: 3000,
      x: mousePosition.x - 1500,
      y: mousePosition.y - 1500
    }
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")
  
  // const textClick = () => {
  //   setCursorVariant("click")
  //   return  setTimeout(()=>setCursorVariant("default"), 700);
  // }

  return (
    <>
    <LoadingScreen />
      <div className="cursor" style={{ left: mousePosition.x - 2.5, top: mousePosition.y - 2.5 }}></div>
      <motion.div
        className='laggedCursor'
        variants={variantsLagged}
        animate={cursorVariant}
        transition={{
          // type: "spring",
          stiffness: 60,
          restDelta: 0.001
        }}
      />
       <main className='container'>
      <NavBar textEnter={textEnter} textLeave={textLeave}/>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/p1" element={<P1 textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/projects/p2" element={<P2 textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/projects/p3" element={<P3 textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/projects/p4" element={<P4 textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/projects/p5" element={<P5 textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/projects/p6" element={<P6 textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/projects/p7" element={<P7 textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/projects/p8" element={<P8 textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/projects/p9" element={<P9 textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/fotography" element={<Fotography/>} />
          <Route path="/curriculum" element={<Curriculum/>} />
        </Routes>
       
      </main> 
    </>
  )
}

export default App
