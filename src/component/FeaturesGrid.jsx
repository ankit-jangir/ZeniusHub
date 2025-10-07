import React from "react";
import { motion } from "framer-motion";

const FeaturesGrid = ({ features = [] }) => {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {features.map((f, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="p-5 rounded-xl shadow-md bg-white flex gap-4 items-start"
                >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl" style={{ background: "linear-gradient(135deg,#ffd7b5,#ff7a00)" }}>
                        <span aria-hidden>{f.icon}</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg text-[#001F3F]">{f.title}</h4>
                        <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default FeaturesGrid;
