// SectionWrapper.jsx
import React from "react";

const SectionWrapper = ({ title, bgColor = "white", desc, children }) => {
    return (
        <section className={`font-sans py-12 sm:py-16`} style={{ backgroundColor: bgColor }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-[#001F3F]">
                    {title}
                </h2>
                {children}
                {desc}

            </div>
        </section>
    );
};

export default SectionWrapper;
