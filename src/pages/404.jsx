import React from "react";
import Lottie from "lottie-react";
import noDataAnimation from "../assets/video/not-found.json";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

const NoDataFound = ({ message = "No data found!" }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 px-4 sm:px-6 py-6 sm:py-10 text-center">

            {/* Lottie Animation */}
            <div className="w-full max-w-2xl h-[35vh] sm:h-[45vh] md:h-[55vh] mb-1 sm:mb-2">
                <Lottie
                    animationData={noDataAnimation}
                    loop
                    className="drop-shadow-md"
                />
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                {message}
            </h1>

            {/* Subtext */}
            <p className="text-gray-600 max-w-sm sm:max-w-md mx-auto mb-4 text-xs sm:text-sm md:text-base leading-relaxed px-2">
                We couldn’t find any information to display right now. Try adjusting your filters or check back later.
            </p>

            {/* Button */}
            <div className="flex justify-center">
                <Button
                    text=" Back to Home"
                    onClick={() => navigate("/")}
                    className="!bg-gradient-to-r !from-orange-400 !to-pink-500 !text-white !px-5 !py-1.5 sm:!py-2 !rounded-full !shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                />
            </div>


        </div>
    );
};

export default NoDataFound;
