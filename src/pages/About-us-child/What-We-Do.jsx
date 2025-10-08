import React from 'react'
import PageHero from '../../component/PageHero'
import Button from '../../component/Button'
import { ICONS } from '../../component/Icons'
import { useNavigate } from 'react-router-dom'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const WhatWeDo = () => {
  const Navigate = useNavigate()
  const modules = [
    { title: 'Admissions & Onboarding', desc: 'Digital forms, approvals, document capture, status tracking.' },
    { title: 'Attendance & Academics', desc: 'QR/biometric attendance, timetable, assessments, results.' },
    { title: 'Fee Management', desc: 'Online fee collection, instalments, concessions, invoicing.' },
    { title: 'Transport & Hostel', desc: 'GPS bus tracking, routes, room allocation, rules & logs.' },
    { title: 'Library & Inventory', desc: 'Catalog, issue/return, fines and stock audits.' },
    { title: 'Communication Suite', desc: 'SMS, email, push notifications and announcements.' },
  ]
  return (
    <>
      <Header />
      <PageHero title="What We Do" />
      {/* Platform Highlights (moved to top) */}
      <section className="max-w-7xl mx-auto px-6 pb-8 pt-10 text-gray-800">
        <h3 className="text-xl md:text-2xl font-extrabold text-[#ff6a21] mb-4">Platform Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl overflow-hidden bg-white border border-orange-100 shadow reveal hover:shadow-xl transition-all">
            <img loading="lazy" src="/Img/Master-Panel.png" alt="Platform modules" className="w-full h-80 object-contain" />
          </div>
          <div className="reveal reveal-delay-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Unified platform, modular by design</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Role‑based portals for master, admin, instructors, students and parents</li>
              <li>• Custom workflows, approvals, and policy‑driven controls</li>
              <li>• Exportable reports, APIs and secure integrations</li>
              <li>• Mobile‑first experience and notifications</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Layout 0: Services overview grid with CTA */}
      <section className="max-w-7xl mx-auto px-6 pt-10 text-gray-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#ff6a21] flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ff6a21]"></span>
              WHAT WE DO
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900 max-w-3xl">
              We power modern, online school systems end‑to‑end
            </h2>
          </div>

          <Button variant='back' onClick={() => (Navigate('/contact-us'))} text='Contact Us' icon={<ICONS.arrowright />} />
        </div>

        <div id="services" className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'Admissions', img: '/Img/admission.jpg' },
            { label: 'Attendance', img: '/Img/attendance.jpg' },
            { label: 'Exams & Results', img: '/Img/Exam.jpg' },
            { label: 'Fee Management', img: '/Img/Fee-Management.jpg' },
            { label: 'Timetable', img: '/Img/Timetable.jpg' },
            { label: 'Transport', img: '/Img/Transport.jpg' },
            { label: 'Hostel', img: '/Img/Hostel.jpg' },
            { label: 'Library', img: '/Img/Libraries.jpg' },
            { label: 'Communication', img: '/Img/Communication.jpg' },
            { label: 'Parent App', img: '/Img/Parent-App.png' },
            { label: 'Analytics & Reports', img: '/Img/Analytics.jpg' },
            { label: 'Website & CMS', img: '/Img/Website-CMS.png' },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`group reveal reveal-delay-${(i % 4) + 1} rounded-2xl border border-orange-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-4 flex items-center gap-3`}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                  <img
                    loading="lazy"
                    src={item.img}
                    onError={(e) => { e.currentTarget.src = '/Img/logo.png' }}
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-semibold text-gray-900 group-hover:text-[#ff6a21]">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Layout 1: Modules grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
        <h3 className="text-xl md:text-2xl font-extrabold text-[#ff6a21] mb-4">Core ERP Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={m.title} className={`group rounded-2xl bg-white shadow border border-orange-100 p-6 reveal reveal-delay-${(i % 4) + 1} hover:shadow-xl hover:-translate-y-1 transition-all`}>
              <h3 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#ff6a21]">{m.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default WhatWeDo


