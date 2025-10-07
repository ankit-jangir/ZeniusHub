import React from "react";
import PageHero from "../component/PageHero";
import CTAsection from "../component/CTAsection";
import { ICONS } from "../component/Icons";

const steps = [
  {
    title: "Discover & Plan",
    img: "/Img/icons/work-plan.png",
    desc: "We map your institution’s goals and processes, define success metrics, and finalize an implementation plan for Zeniushub.",
  },
  {
    title: "Configure Modules",
    img: "/Img/icons/design.png",
    desc: "Admissions, Fees, Attendance, Exams and Communication are tailored to your rules, roles and academic calendar.",
  },
  {
    title: "Data Import",
    img: "/Img/icons/personal-information.png",
    desc: "We migrate students, staff, master data and fee structures securely with validation and trial runs.",
  },
  {
    title: "Branding & Content",
    img: "/Img/icons/web-design.png",
    desc: "App labels, notifications and UI accents are aligned with your institution’s identity for a delightful experience.",
  },
  {
    title: "Training",
    img: "/Img/icons/sync.png",
    desc: "Role‑based training for Admins, Instructors and Accounts teams with quick reference guides and videos.",
  },
  {
    title: "Go‑Live & Support",
    img: "/Img/icons/confirmation.png",
    desc: "We monitor first fee cycles, attendance and exams, resolve issues rapidly, and hand over with best practices.",
  },
];

const OurProcess = () => {
  return (
    <>
      <PageHero />
      <div className="py-16 bg-gradient-to-b from-orange-50 to-white px-3 md:px-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21] text-center mb-10">How we launch your school platform</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-orange-100 shadow p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    height: "60px",
                    width: "60px",
                  }}
                />
                <h3 className="text-xl font-bold mb-2 text-gray-900 transition-colors duration-300 group-hover:text-[#ff6a21]">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Additional process details - themed split cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white shadow p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <ICONS.clipboardcheck className="text-[#ff6a21]" />
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">Data migration & onboarding</h3>
              </div>
              <p className="mt-3 text-gray-700 text-sm">Secure and structured migration with validations and pilots.</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Import students, staff, master data and fee rules</li>
                <li>• Trial runs with reconciliation reports</li>
                <li>• Rollback plan and encrypted backups</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white shadow p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <ICONS.badgecheck className="text-[#ff6a21]" />
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">Training & go‑live support</h3>
              </div>
              <p className="mt-3 text-gray-700 text-sm">Hands‑on sessions and hyper‑care for the first operational cycles.</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Role‑based sessions for Admin, Instructor, Accounts</li>
                <li>• Quick reference guides and videos</li>
                <li>• On‑call support during fee/attendance/exam cycles</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Security & Backups", icon: <ICONS.shield className="text-[#ff6a21]" /> },
              { title: "Parent App Setup", icon: <ICONS.phone className="text-[#ff6a21]" /> },
              { title: "Reports & Analytics", icon: <ICONS.barchart3 className="text-[#ff6a21]" /> },
              { title: "User Management & Roles", icon: <ICONS.Users className="text-[#ff6a21]" /> },
              { title: "SMS / Email Channels", icon: <ICONS.mail className="text-[#ff6a21]" /> },
              { title: "Compliance & Audit", icon: <ICONS.award className="text-[#ff6a21]" /> },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-white border border-orange-100 shadow p-5 text-center hover:shadow-xl transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-orange-50 mx-auto mb-2 flex items-center justify-center">{c.icon}</div>
                <div className="font-semibold text-gray-900">{c.title}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CTAsection />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
