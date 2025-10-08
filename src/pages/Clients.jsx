import React, { useState } from "react";
import PageHero from "../component/PageHero";
import CounterCard from "../component/counter";
import CTAsection from "../component/CTAsection";
import { ICONS } from "../component/Icons";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Clients = () => {
  const [activeCard, setActiveCard] = useState(null)
  return (
    <>
      <Header />
      <PageHero />
      {/* Top: Zeniushub impact with counters + icons */}
      <div className="py-14 md:py-20 px-4 sm:px-8 md:px-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/Img/about-us.png"
              alt="Zeniushub clients"
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full h-64 sm:h-80 md:h-96 object-cover object-center"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#ff6a21] mb-3">
              Trusted by Modern Schools
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Zeniushub digitizes daily operations for schools — admissions, fees,
              attendance, exams and parent communication — on a secure, scalable
              platform.
            </p>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { n: 80, t: "Happy Clients", Icon: ICONS.Users },
                { n: 50, t: "Institutions", Icon: ICONS.award },
                { n: 230, t: "Projects", Icon: ICONS.barchart3 },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-[#ff6a21]/20 shadow-md hover:shadow-lg transition-all p-4 flex flex-col items-center justify-center min-h-[130px] sm:min-h-[150px]"
                >
                  <div className=" h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center">
                    <c.Icon className="text-[#ff6a21] text-xl sm:text-2xl" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#ff6a21]">
                    <CounterCard
                      number={c.n}
                      duration={4000}
                      title=""
                      bgColor="bg-transparent"
                      textColor="text-[#ff6a21]"
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700">
                    {c.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Testimonials: image + quote cards */}
      <div className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">What Our Clients Say</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="h-full">
            <img src="/Img/Whatour.png" alt="Testimonials" className="rounded-2xl shadow-lg w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {[
              { q: '“Rollout was smooth – teachers adopted Zeniushub in days.”', n: 'Principal, Delhi' },
              { q: '“Fees and reports are finally in one place. Huge time saver.”', n: 'Admin Head, Pune' },
              { q: '“Parents love the app – communication is instant and clear.”', n: 'Coordinator, Jaipur' },
              { q: '“Support team hand‑held us through first exam cycle.”', n: 'Director, Indore' },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-orange-100 bg-orange-50/40 shadow p-5 h-full">
                <p className="text-gray-800">{t.q}</p>
                <div className="mt-2 text-sm text-[#ff6a21] font-semibold">{t.n}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10 bg-gray-100 px-5 md:px-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                img: "/Img/Admissions-Enrollment.jpg",
                heading: "Admissions & Enrollment",
                text: "Streamlined online applications, approvals and seat allocation tailored for schools.",
              },
              {
                img: "/Img/Fees-Accounting.jpg",
                heading: "Fees & Accounting",
                text: "Automated fee rules, reminders and reconciliations reduce manual work.",
              },
              {
                img: "/Img/Attendance-Timetable.png",
                heading: "Attendance & Timetable",
                text: "QR/biometric attendance with instant notifications and flexible timetables.",
              },
              {
                img: "/Img/Exam.jpg",
                heading: "Exams & Results",
                text: "Plan exams, publish report cards and share securely with parents.",
              },
              {
                img: "/Img/Parent-App.png",
                heading: "Parent App & Communication",
                text: "Broadcasts, circulars and two-way updates keep everyone aligned.",
              },
              {
                img: "/Img/Multi-branch.jpg",
                heading: "Multi-branch Control",
                text: "Central oversight for groups with branch-wise permissions and audit.",
              },
            ].map((client, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-black flex flex-col"
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <img
                  src={client.img}
                  alt={`Client ${index + 1}`}
                  className="w-full h-52 sm:h-56 lg:h-60 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
                {/* Always-visible heading overlay with arrow (theme) */}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute left-4 right-4 top-4 text-left">
                  <div className="inline-flex items-center gap-2 text-white font-extrabold text-lg md:text-2xl">
                    <span>{client.heading}</span>
                    <ICONS.arrowright className="text-white" />
                  </div>
                </div>
                {/* Hover Text Overlay expands with full description */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-[#ff6a21]/90 flex items-end px-5 py-4 transition-all duration-500 ease-out ${activeCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full md:opacity-0 md:translate-y-full md:group-hover:opacity-100 md:group-hover:translate-y-0'}`}>
                  <div className="text-left text-white">
                    <h3 className="text-xl md:text-2xl font-extrabold">{client.heading}</h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed">{client.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-5 md:px-20">
        <CTAsection />
      </div>
      <Footer />
    </>
  );
};

export default Clients;
