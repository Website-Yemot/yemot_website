import React, { useEffect, useRef, useState } from 'react';
import './SupportIntro.css';
import '@fontsource/poppins/600.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useAnimation } from "framer-motion";
export const SupportIntro = () => {
    const ref = useRef(null);
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    controls.start("visible");
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [controls, hasAnimated]);

    const halfSpinFrom180 = {
        hidden: {
            rotate: 180,
            opacity: 0,
            y: 100,
            x: -80,
            scale: 0.9,
        },
        visible: {
            rotate: 360,
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        },
    };
    return (
        <div className="support" ref={ref}>
            <div className="support-intro">

                <h5 className="support-subtitle">10+ hours a day</h5>
                <h1 className="support-title">We are here to help.</h1>

                <motion.div
                    className="phones"
                    initial="hidden"
                    animate={controls}
                    variants={halfSpinFrom180}
                >
                    <DotLottieReact
                        src="https://lottie.host/169704cf-584b-4837-96de-aa660075cff3/dwu9cESGBI.lottie"
                        loop
                        autoplay
                    />
                </motion.div>
            </div>
        </div>
    );
}