import React from "react";
import Lottie from "lottie-react";
import noDataAnimation from "../assets/video/not-found.json";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

const NoDataFound = ({ message = "No data found!" }) => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 ">

            {/* Lottie Animation - full page focus */}
            <div className="w-full max-w-4xl h-[60vh] sm:h-[70vh] md:h-[75vh] mb-4">
                <Lottie animationData={noDataAnimation} loop={true} />
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 text-center">
                {message}
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-center max-w-lg mb-4 text-sm sm:text-base">
                We couldn’t find any data to display here. Try adjusting your filters or check back later.
            </p>

            {/*  Button */}
            <Button text="Back to home" onClick={() => navigate('/')} />

            {/* Optional hint */}
            <p className="text-gray-400 mt-3 text-xs text-center">
                If the issue persists, contact support.
            </p>
        </div>
    );
};

export default NoDataFound;
