import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Herohome.css";
import ai_video from '../assets/video/ai_video.mp4';
import heroimg from '../assets/images/hero_image.png';

const HeroSection = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Show hero content after 3 seconds (adjust as needed)
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="hero">
            {/* Background Video */}
            <video
                className="hero-bg-video"
                autoPlay
                loop
                muted
                playsInline
                src={ai_video}
            />

            {/* Animated background circles */}
            <motion.div
                className="bg-circle circle1"
                animate={{ y: [0, 30, 0], x: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div
                className="bg-circle circle2"
                animate={{ y: [0, -40, 0], x: [0, -50, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />
            <motion.div
                className="bg-circle circle3"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />

            {showContent && (
                <motion.div
                    className="hero-container"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    {/* Text Section */}
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1>
                            Empowering <span>Education</span> Through Innovation
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            Zeniushub connects Students, Instructors, Admins, and Super Admins — creating a smart learning ecosystem where knowledge meets technology.
                        </motion.p>

                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 0 25px rgba(255,111,0,0.6)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="hero-btn"
                            onClick={() => {
                                const ev = new Event('open-lead-form')
                                window.dispatchEvent(ev)
                            }}
                        >
                            Explore Platform
                        </motion.button>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                    >
                        <motion.img
                            src={heroimg}
                            alt="Education Portal"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            draggable={false}
                        />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default HeroSection;
