import React from 'react'
import PageHero from '../../component/PageHero'
import Button from '../../component/Button'
import { ICONS } from '../../component/Icons'
import TechProcessCard from '../../component/TechProcessCard'

const WhoWeAre = () => {


  const modernizationRoadmap = [
    {
      icon:  <ICONS.shield  />,
      title: "Secure by design",
      desc: "Role-based access, encryption and backups."
    },
    {
      icon: <ICONS.barchart3  />,
      title: "Analytics-first",
      desc: "Dashboards and insights for action."
    },
    {
      icon: <ICONS.hearthandshake  />,
      title: "Human UX",
      desc: "Clean flows for teachers and parents."
    },
    {
      icon: <ICONS.Rocket  />,
      title: "Scalable Cloud",
      desc: "Built to grow with your institution."
    },
  ];
  return (
    <>
      <PageHero title="Who We Are" />
      {/* Layout 1: Mission + Image */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-gray-800 section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image first on small screens */}
          <div className="rounded-2xl overflow-hidden border border-orange-100 bg-white shadow-lg reveal order-1 md:order-2 animated-gradient">
            <img loading="lazy" src="/Img/Building.jpg" alt="Zeniushub team" className="w-full h-72 md:h-96 object-cover" />
          </div>
          <div className="reveal order-2 md:order-1 rounded-2xl border border-orange-100 bg-white shadow p-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Building a modern digital school</h2>
            <p className="mt-3 text-gray-700">Zeniushub is a professional digital‑school platform focused on outcomes: simpler operations, better coordination, and improved parent engagement. We blend secure cloud infrastructure with user‑friendly design to help institutions move faster.</p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Automation across admissions, attendance, exams, transport and fees',
                'Live analytics dashboards for leaders and administrators',
                'Parent app for real‑time updates and two‑way communication',
                'Secure, scalable cloud infrastructure and backups'
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 rounded-xl border border-orange-100 bg-orange-50/30 px-3 py-2">
                  <ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 px-4 md:px-10">
  {[
    { k: "Schools", v: "75+" },
    { k: "Users", v: "10k+" },
    { k: "Uptime", v: "99.9%" },
    { k: "Reports", v: "50+" },
  ].map((s, i) => (
    <div
      key={s.k}
      className={`rounded-2xl bg-white border border-[#ff6a21]/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out text-center p-6 reveal reveal-delay-${i + 1}`}
    >
      <div className="text-3xl md:text-4xl font-extrabold text-[#ff6a21] drop-shadow-sm">
        {s.v}
      </div>
      <div className="text-sm md:text-base text-gray-600 mt-1 tracking-wide font-medium">
        {s.k}
      </div>
    </div>
  ))}
</div>

      </section>

     

      {/* Layout 2: Experience & impact with progress rings */}
      <section className="max-w-7xl mx-auto px-6 pb-14 text-gray-800 section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl overflow-hidden bg-white border border-orange-100 shadow-xl reveal animated-gradient">
            <div className="relative aspect-[16/10] w-full">
              <img loading="lazy" src="/Img/OurStory.jpg" alt="Experience in education" className="absolute inset-0 w-full h-full object-cover" />
              {/* <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-1.5 bg-[#ff6a21] rounded-full" /> */}
            </div>
          </div>
          <div className="reveal reveal-delay-2 rounded-2xl border border-orange-100 bg-white shadow p-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Experience in Education</h3>
            <p className="mt-3 text-gray-700">Our team brings hands‑on experience building school systems at scale. We focus on usability for teachers and measurable outcomes for management.</p>
            <p className="mt-3 text-gray-700">From data migration to training, we ensure a smooth rollout and continuous improvements based on feedback.</p>
            <div className="mt-6 grid grid-cols-2 gap-8">
              {[{p:80,label:'Faster Operations'},{p:70,label:'Parent Engagement'}].map((d,i)=> (
                <div key={d.label} className={`reveal reveal-delay-${i+1}`}>
                  <div className="w-28 h-28 rounded-full bg-[conic-gradient(#ff6a21_0deg,#ff6a21_${d.p*3.6}deg,#ffe1cf_${d.p*3.6}deg,#ffe1cf_360deg)] relative mx-auto">
                    <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center text-lg font-extrabold">{d.p}%</div>
                  </div>
                  <div className="mt-3 text-center font-semibold">{d.label}</div>
                  <p className="text-xs text-gray-500 text-center mt-1">Estimated improvement based on recent deployments.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16 text-gray-800 section-spacing">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modernizationRoadmap.map(({ icon, title, desc }, idx) => (
            <TechProcessCard step={icon} title={title} desc={desc} />

          ))}
        </div>
      </section>

       {/* About, Vision, Mission + CTA (placed at page end) */}
      <section className="max-w-7xl mx-auto px-6 pb-16 text-gray-800 section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-10 reveal">
            <div className="rounded-2xl border border-orange-100 bg-white shadow-sm p-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">About Zeniushub</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                With the core team behind Zeniushub involved in digital products for years, our focus is
                to provide a complete and bespoke solution for every educational institution. From
                domain registration and hosting to website content and parent communication, we build
                fast, secure and delightful experiences that reflect your institution’s identity.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We assure you a professional web presence with strong UI/UX and performance so that the
                experience for students and parents remains smooth across devices.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white shadow-sm p-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Our Vision</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                To be the most trusted digital‑school platform—known for beautiful design, robust
                engineering and measurable outcomes for academic institutions.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white shadow-sm p-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Our Mission</h3>
              <ul className="mt-3 space-y-3 text-gray-700">
                <li>• Help institutions launch unique, modern websites in a cost‑effective manner.</li>
                <li>• Support every stage—from domain & hosting to content and parent communication.</li>
                <li>• Ensure brand consistency, accessibility and performance across devices.</li>
                <li>• Provide a smooth viewing experience with error‑free, updated and secure pages.</li>
              </ul>
            </div>
          </div>

          {/* Right: Distinct CTA card */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white shadow-lg p-6 flex flex-col gap-3">
              <h4 className="text-lg font-extrabold text-gray-900">Let’s Build Your Digital School</h4>
              <p className="text-sm text-gray-700">Need a fast, secure and beautiful experience for students and parents? Our team can help you plan and launch quickly.</p>
        <Button text='Contact Us'  onClick={() => {
                                const ev = new Event('open-lead-form')
                                window.dispatchEvent(ev)
                            }}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoWeAre


