// import { useState, useEffect } from 'react'
// import './CustomCursor.css'; // Import your CSS file for custom cursor styles

// const CustomCursor = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const updateCursorPosition = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener('mousemove', updateCursorPosition);

//     return () => {
//         document.removeEventListener('mousemove', updateCursorPosition);
//     };
//   }, []);

//   return (
//     <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
//   );
// };

// export default CustomCursor;

// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'

// const Cursor = () => {
//     return (
//         <>
           
//         </>
//     );
// }

// export default Cursor;