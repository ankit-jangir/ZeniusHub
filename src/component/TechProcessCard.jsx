import { motion } from "framer-motion";

export default function TechProcessCard({ step, title, desc, delay = 0 }) {
    return (
        <motion.div
            className="
        group flex flex-col items-start 
        bg-white rounded-2xl shadow-md 
        py-6 px-5 sm:py-8 sm:px-6 
        w-full 
        cursor-default 
        hover:shadow-2xl transition-all duration-300 
        relative overflow-hidden 
        min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px]
      "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
        >
            {/* Expanding orange background layer */}
            <span
                className="
          absolute left-4 top-4 w-10 h-10 sm:w-12 sm:h-12 
          bg-orange-500 rounded-full 
          transition-all duration-500 
          group-hover:w-full group-hover:h-full 
          group-hover:left-0 group-hover:top-0 
          group-hover:rounded-2xl 
          z-0
        "
            ></span>

            {/* Step Circle */}
            <div
                className="
          relative z-10 
          bg-orange-100 text-orange-600 
          rounded-full border-2 border-orange-400 
          w-10 h-10 sm:w-12 sm:h-12 
          flex items-center justify-center 
          font-semibold text-lg sm:text-xl mb-3 sm:mb-4 select-none 
          group-hover:bg-transparent group-hover:text-white 
          group-hover:border-orange-500 
          transition-all duration-300
        "
            >
                {step}
            </div>

            {/* Title */}
            <h3
                className="
          text-lg sm:text-xl md:text-2xl 
          text-gray-900 mb-1 sm:mb-2 font-semibold relative z-10 
          group-hover:text-white transition-colors duration-300
        "
            >
                {title}
            </h3>

            {/* Description */}
            <p
                className="
          text-sm sm:text-base md:text-[1rem] 
          text-gray-600 leading-relaxed relative z-10 
          group-hover:text-white transition-colors duration-300
        "
            >
                {desc}
            </p>
        </motion.div>
    );
}
