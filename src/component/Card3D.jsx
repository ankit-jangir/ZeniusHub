import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card3D = ({ title, desc }) => {
    const cardRef = useRef(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (cardRef.current) {
            setDimensions({
                width: cardRef.current.offsetWidth,
                height: cardRef.current.offsetHeight,
            });
        }
    }, []);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - dimensions.width / 2;
        const y = e.clientY - rect.top - dimensions.height / 2;
        setCoords({ x, y });
    };

    const handleMouseLeave = () => {
        setCoords({ x: 0, y: 0 });
        setHovered(false);
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const rX = (coords.x / dimensions.width) * 15; // rotate limits
    const rY = (coords.y / dimensions.height) * -15;
    const tX = (coords.x / dimensions.width) * -20; // parallax translation
    const tY = (coords.y / dimensions.height) * -20;

    return (
        <div
            ref={cardRef}
            className="w-60 h-80 m-4 perspective cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <motion.div
                className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden"
                style={{
                    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
                    transition: "transform 0.1s ease-out",
                }}
            >
                {/* Background Gradient */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    style={{
                        background: "linear-gradient(135deg, #FFD7A1, #FFB347)", // lightest orange gradient
                        transform: `translateX(${tX}px) translateY(${tY}px)`,
                        transition: "transform 0.1s ease-out",
                    }}
                ></motion.div>

                {/* Overlay for hover effect */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-0 left-0 w-full h-full bg-black/40 flex flex-col justify-end p-4 rounded-2xl text-white"
                        >
                            <h3 className="text-xl font-bold">{title}</h3>
                            <p className="text-sm mt-1">{desc}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Card3D;
