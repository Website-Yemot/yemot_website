import React, { useEffect, useState } from 'react';
// import Lottie from 'lottie-react';
// import supportAnimation from './support-animation.json'; 

import './SupportIntro.css';
import '@fontsource/poppins/600.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

export const SupportIntro = () => {
//    const [rotation, setRotation] = useState(0);
//   const [lastX, setLastX] = useState(null);
//    const [animationDone, setAnimationDone] = useState(false);
//   const maxRotation = 180; // אפשר לשנות לזווית אחרת


//    useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (animationDone) return;

//       if (lastX !== null) {
//         const dx = e.clientX - lastX;
//         const newRotation = rotation + dx * 0.5; // מהירות סיבוב
//         if (newRotation >= maxRotation) {
//           setRotation(maxRotation);
//           setAnimationDone(true);
//         } else {
//           setRotation(newRotation);
//         }
//       }
//       setLastX(e.clientX);
//     };

//     const stopTracking = () => {
//       setLastX(null);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', stopTracking);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', stopTracking);
//     };
//   }, [lastX, rotation, animationDone]);


    return (
        <div className="support">
            <div className="support-intro">

                <h5 className="support-subtitle">10+ hours a day</h5>
                <h1 className="support-title">We are here to help.</h1>

                {/* <motion.div
                    animate={{ rotate: rotation }}
                    transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
                    style={{ display: 'inline-block' }}
                > */}
                    <DotLottieReact
                        className="phones"
                        src="https://lottie.host/169704cf-584b-4837-96de-aa660075cff3/dwu9cESGBI.lottie"
                        loop
                        autoplay
                    />
                {/* </motion.div> */}
            </div>
        </div>
    );
}