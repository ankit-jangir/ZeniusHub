import React from "react";
import { motion } from "framer-motion";

const RoleCard = ({ title, desc, imageSrc, accent = "#FF7A00", reverse = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.06)] overflow-hidden`}
        >
            <div
                className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-stretch`}
            >
                {/* Left: Image */}
                <div className="md:w-1/2 relative">
                    <div
                        className="h-56 md:h-full bg-gradient-to-br from-orange-400 to-red-400"
                        style={{
                            backgroundImage: `url(${imageSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    {/* accent floating panel */}
                    <div
                        className="absolute left-6 top-6 md:left-8 md:top-8 rounded-lg p-3 text-white font-semibold"
                        style={{
                            background: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0))`,
                            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        }}
                    >
                        {title}
                    </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#001F3F]">{title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>

                    <div className="mt-6 flex gap-3 items-center">
                        <button
                            className="px-5 py-2 rounded-full font-semibold shadow-md"
                            style={{
                                background: `linear-gradient(90deg, ${accent}, #ff4b2b)`,
                                color: "#fff",
                            }}
                        >
                            Learn More
                        </button>

                        <button className="px-5 py-2 rounded-full border border-gray-200 text-gray-700">
                            View Demo
                        </button>
                    </div>

                    <div className="mt-6 text-sm text-gray-400">Tip: Scroll to see subtle entry animation.</div>
                </div>
            </div>
        </motion.div>
    );
};

export default RoleCard;
