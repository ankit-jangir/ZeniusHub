import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Herohome from "../component/Herohome";
import { ICONS } from "../component/Icons";
import role_img from "../assets/images/hero_image.png";
import CTAsection from "../component/CTAsection";
import PromoModal from "../component/PromoModal";
import Button from "../component/Button";
import { useNavigate } from 'react-router-dom';
import TechProcessCard from "../component/TechProcessCard";
const Homepage = () => {
  const data = [
    {
      date: "Zeniushub ERP",
      title: "Master Panel",
      desc: "Define structure, permissions, and academic sessions. Keep every module aligned to your institution’s blueprint."
    },
    {
      date: "Zeniushub ERP",
      title: "Admin Panel",
      desc: "Run day‑to‑day operations with ease — admissions, fees, reports, and communication in one smart workspace."
    },
    {
      date: "Zeniushub ERP",
      title: "Teacher Panel",
      desc: "Plan lessons, record attendance, publish results, and engage every learner with meaningful insights."
    },
    {
      date: "Zeniushub ERP",
      title: "Parent App",
      desc: "Stay connected in real time — track fees, attendance, timetable, transport, and progress with full transparency."
    },
    {
      date: "Zeniushub ERP",
      title: "Student App",
      desc: "A modern learning space — access classes, assignments, exams, and updates from anywhere."
    },
  ];

  const features = [
    {
      title: "LearnFlow",
      desc: "Organize classes and timelines effortlessly, so educators and learners stay aligned at every step.",
      image: "https://api.time.com/wp-content/uploads/2022/11/GettyImages-1358149692.jpg"
    },
    {
      title: "QuizPulse",
      desc: "Create engaging assessments that motivate progress and track real learning outcomes easily.",
      image: "https://api.time.com/wp-content/uploads/2022/11/GettyImages-1358149692.jpg"
    },
    {
      title: "TrackEase",
      desc: "Monitor attendance, growth, and engagement with just one click — intelligent and effortless.",
      image: "https://api.time.com/wp-content/uploads/2022/11/GettyImages-1358149692.jpg"
    },
    {
      title: "ContentSphere",
      desc: "Build learning resources quickly with drag‑and‑drop simplicity — creativity meets productivity.",
      image: "https://api.time.com/wp-content/uploads/2022/11/GettyImages-1358149692.jpg"
    },
  ];

  const modernizationRoadmap = [
    {
      step: 1,
      title: "Explore & Understand",
      desc: "Every school has a story — we begin by understanding yours and shaping technology that fits naturally."
    },
    {
      step: 2,
      title: "Connect Systems",
      desc: "Integrate learning, teaching, and management into one intuitive environment that flows together beautifully."
    },
    {
      step: 3,
      title: "Empower Growth",
      desc: "Give teachers, students, and parents tools that amplify creativity, accountability, and connection."
    },
    {
      step: 4,
      title: "Evolve with Insight",
      desc: "Use smart analytics to adapt, reflect, and continually enhance learning impact and institutional excellence."
    },
  ];

  const stats = [
    {
      icon: <ICONS.building className="text-white" size={32} />,
      value: 1200,
      label: "Connected Institutions",
      desc: "Schools and colleges trusting our platform to reimagine their academic journeys."
    },
    {
      icon: <ICONS.cube className="text-white" size={32} />,
      value: 85,
      label: "Smart Modules",
      desc: "Every feature designed to simplify, connect, and strengthen education processes."
    },
    {
      icon: <ICONS.circlecheck className="text-white" size={32} />,
      value: 5400,
      label: "Learning Milestones",
      desc: "Thousands of success stories powered by a unified digital ecosystem."
    },
    {
      icon: <ICONS.chart className="text-white" size={32} />,
      value: 300,
      label: "Success Stories",
      desc: "Institutions flourishing through inspired digital transformation."
    },
  ];

  const navigate = useNavigate();
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [index, setIndex] = useState(0);
  const autoScrollRef = useRef();

  useEffect(() => {
    autoScrollRef.current = () => {
      setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      autoScrollRef.current();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((val, i) => (val < stats[i].value ? val + Math.ceil(stats[i].value / 100) : val))
      );
    }, 20);
    return () => clearInterval(interval);
  }, [stats]);

  const formatNumber = (num) => num.toLocaleString();

  return (
    <>
      <PromoModal delayMs={8000} />
      {/* Main Background with Elegant Gradients */}
      <div className="fixed inset-0 -z-10">
        <svg width="100vw" height="100vh" style={{ position: "absolute", width: "100vw", height: "100vh" }}>
          <circle cx="20%" cy="20%" r="240" fill="#FF4500" opacity="0.06" />
          <circle cx="90%" cy="80%" r="220" fill="#FF6347" opacity="0.07" />
          <circle cx="70%" cy="10%" r="140" fill="#FF4500" opacity="0.04" />
        </svg>
      </div>

      {/* Hero Section */}
      <Herohome />

      {/* Roles Overview Slider - desktop/tablet */}
      <section className="relative bg-gradient-to-r from-white to-orange-50 py-16 md:py-24 overflow-hidden px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,69,0,0.06)_0,transparent_80%)] z-0"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-10 md:mb-16 text-[#FF4500] tracking-tight drop-shadow">
            Roles Overview
          </h2>
          <div className="w-full max-w-5xl bg-white rounded-[30px] shadow-2xl mx-auto flex flex-col md:flex-row overflow-hidden relative">


            {/* Image Section */}
            <motion.div
              key={data[index].title + "-img"}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 w-full flex justify-center items-center bg-gradient-to-br from-[#FF6347] to-[#FF4500] p-4 md:p-6 rounded-[25px] overflow-hidden"
            >
              <img
                src={role_img}
                alt={data[index].title}
                className="w-full h-auto max-h-[220px] object-contain rounded-[20px]"
              />
            </motion.div>

            {/* Text & Navigation */}
            <motion.div
              key={data[index].title + "-text"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center"
            >
              <p className="text-orange-400 mb-2">{data[index].date}</p>
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-[#FF4500]">{data[index].title}</h2>
              <p className="text-gray-600 mb-4 md:mb-6">{data[index].desc}</p>
              <Button text="Read More" onClick={() => navigate('/About-Us')} />
            </motion.div>
            {/* Navigation Dots */}
            {/* Navigation Dots - Vertical for md+ */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex-col space-y-3 z-20 hidden md:flex">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-8 rounded-full transition-colors duration-300 ${i === index ? "bg-[#FF4500]" : "bg-gray-300 hover:bg-[#FF6347]"}`}
                  aria-label={`Go to role ${i + 1}`}
                />
              ))}
            </div>

            {/* Navigation Dots - Horizontal for small screens */}
            <div className="flex md:hidden justify-center mt-4 space-x-3">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-3 w-8 rounded-full transition-colors duration-300 ${i === index ? "bg-[#FF4500]" : "bg-gray-300 hover:bg-[#FF6347]"}`}
                  aria-label={`Go to role ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Roles Overview Slider - mobile only (moved under content) */}
      <section className="relative bg-gradient-to-r from-white to-orange-50 py-12 overflow-hidden px-4 sm:px-6 lg:px-8 md:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,69,0,0.06)_0,transparent_80%)] z-0"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-[#FF4500] tracking-tight drop-shadow">
            Roles Overview
          </h2>
          <div className="w-full bg-white rounded-[24px] shadow-2xl mx-auto flex flex-col overflow-hidden relative p-4">
            {/* Image */}
            <motion.div
              key={data[index].title + "-img-m"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="w-full flex justify-center items-center bg-gradient-to-br from-[#FF6347] to-[#FF4500] rounded-[16px] overflow-hidden"
            >
              <img src={role_img} alt={data[index].title} className="object-cover w-full max-h-56" />
            </motion.div>
            {/* Text */}
            <motion.div
              key={data[index].title + "-text-m"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="w-full pt-4"
            >
              <p className="text-orange-400 mb-2 text-sm text-center">{data[index].date}</p>
              <h3 className="text-xl font-bold mb-2 text-[#FF4500] text-center">{data[index].title}</h3>
              <p className="text-gray-600 text-center mb-4">{data[index].desc}</p>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white px-5 py-2 rounded-full font-semibold shadow">
                  READ MORE
                </button>
              </div>
            </motion.div>
            {/* Dots */}
            <div className="mt-4 flex justify-center space-x-2 z-20">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${i === index ? "bg-[#FF4500]" : "bg-gray-300"}`}
                  aria-label={`Go to role ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section with Elegant UI */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20 px-6 max-w-7xl mx-auto">
        {/* Left: Heading and text */}
        <div className="flex-1 w-full max-w-lg md:max-w-none">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-orange-500">Our </span>
            <span className="text-gray-900">Facilities</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>

        {/* Right: Cards with image and text */}
        <div className="flex flex-wrap gap-6 md:gap-8 flex-1 justify-center md:justify-start">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex items-center gap-5 rounded-2xl overflow-hidden
  bg-white text-dark shadow-[0_4px_20px_rgba(255,122,0,0.3)]
  transition-all duration-500 ease-in-out
  hover:scale-105 hover:bg-orange-600 hover:text-white
  p-5 w-full max-w-md"
            >

              {/* Orange animated overlay */}
              <div
                className="
          absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700
          opacity-0 [transform:translate(100%,-100%)]
          hover:opacity-100 hover:[transform:translate(0,0)]
          transition-all duration-500 ease-in-out
          rounded-2xl blur-[1px]
        "
              ></div>

              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0 relative z-10"
              />
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-1 transition-colors duration-500 hover:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-500 hover:text-orange-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Impact & Stats Section */}
      <section className="relative bg-white py-20 px-6 max-w-7xl mx-auto">
        {/* Background gold circle like your image */}
        <div className="absolute -top-24 left-0 w-72 h-72 rounded-full bg-orange-400 opacity-10 -z-10"></div>

        <div className="max-w-2xl mb-14 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-orange-500">Our </span>
            <span className="text-gray-900">Impact</span>
          </h2>
          <p className="mt-4 max-w-md text-gray-600 leading-relaxed mx-auto">
            We track our progress visually and transparently to ensure quality education combined with a modern and vibrant experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {stats.map(({ icon, label, value }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center w-full max-w-[14rem] p-4">
              <div className="bg-orange-500 rounded-xl p-5 mb-4 flex items-center justify-center shadow-lg ">
                {icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">{label}</h3>
              <p className="text-gray-600 text-sm">{formatNumber(value)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="relative bg-gradient-to-r from-white via-orange-50 to-white py-16 px-4 sm:py-20 md:py-24 lg:px-16 overflow-hidden">
        {/* Background blurred circles */}
        <div className="absolute top-24 left-[-100px] w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-orange-400 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute bottom-24 right-[-80px] w-48 sm:w-60 md:w-80 h-48 sm:h-60 md:h-80 bg-orange-300 rounded-full opacity-30 blur-2xl -z-10"></div>

        {/* Subtle diagonal stripes */}
        <svg
          className="absolute inset-0 w-full h-full -z-20 opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonalLines"
              patternUnits="userSpaceOnUse"
              width="30"
              height="30"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="30" stroke="#FF4500" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-14 lg:gap-20 relative z-10">
          {/* Left Text */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FF4500] mb-6 sm:mb-8 leading-tight">
              About <span className="text-gray-900">Us</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              We’re passionate about transforming education through innovation. Our team brings together creative thinkers, educators, and technology experts working with one mission — to make learning simpler, smarter, and more connected.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              From classrooms to campuses, we design digital experiences that empower teachers, inspire students, and help institutions grow with confidence. Every feature, every idea, and every update is built with purpose — to shape the future of learning.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                text="Learn More"
                variant="back"
                className="text-black"
                onClick={() => navigate('/About-Us/Who-We-Are')}
              />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-300 hover:scale-105 transform transition-transform duration-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2024/05/16/19/29/ai-generated-8766874_960_720.jpg"
              alt="Our Team Vision"
              className="w-full h-auto max-h-[450px] sm:max-h-[500px] object-cover"
            />
          </motion.div>
    </div>
      </section>


      {/* Our Process / Roadmap */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto bg-gradient-to-tr from-orange-50 via-white to-orange-100 rounded-3xl shadow-lg overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 rounded-full bg-orange-300 opacity-10 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-60 md:w-80 h-60 md:h-80 rounded-full bg-orange-400 opacity-10 blur-3xl -z-10"></div>

        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#FF4500] mb-12 drop-shadow-lg">
          Modern Technology Process for Education
        </h2>

        <div className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4
          gap-6 
          sm:gap-8 
          justify-items-center
">
          {modernizationRoadmap.map(({ step, title, desc }, idx) => (
            <TechProcessCard step={step} title={title} desc={desc} />

          ))}
    </div>
      </section>

      {/* Call To Action */}
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <CTAsection />
      </section>
    </>
  );
};

export default Homepage;
