import React from "react";

const Button = ({
    text = "",
    type = "button",
    variant = "normal", // normal | back
    icon = null,
    onClick,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`relative flex items-center justify-center rounded-md  font-semibold text-md 
        ${variant === "normal"
                    ? "w-40 h-12 px-6 bg-[#FF4500] overflow-hidden text-white"
                    : text
                        ? "w-48 h-14 px-6 bg-white border-2 border-[#FF4500]"
                        : "w-14 h-14 px-0 bg-white border-2 border-[#FF4500]"
                }
        group`}
        >
            {/* Icon */}
            {icon && (
                <span
                    className={`relative z-10 flex items-center justify-center transition-colors duration-300 ${text ? "mr-2 group-hover:text-white" : "text-black group-hover:text-white"
                        }`}
                >
                    {icon}
                </span>
            )}

            {/* Text */}
            {text && (
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {text}
                </span>
            )}

            {/* Overlay for normal button */}
            {variant === "normal" && (
                <span className="absolute inset-0 bg-[#001F54] scale-0 group-hover:scale-100 origin-bottom transition-transform duration-500 rounded-md z-0 text-white"></span>
            )}

            {/* Back variant */}
            {variant === "back" && (
                <span className="absolute left-0 top-0 w-0 h-full bg-[#FF4500] rounded-md group-hover:w-full transition-all duration-500 z-0  text-black"></span>
            )}
        </button>
    );
};

export default Button;
