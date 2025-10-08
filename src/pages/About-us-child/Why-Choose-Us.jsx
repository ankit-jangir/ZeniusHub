import React from 'react'
import PageHero from '../../component/PageHero'
import TechProcessCard from '../../component/TechProcessCard';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const WhyChooseUs = () => {
  const points = [
    { title: 'Security by Design', desc: 'Encryption in transit & at rest, role-based access, SSO-ready, audit logs.' },
    { title: 'Performance & Uptime', desc: 'Optimized infrastructure with CDN and caching for fast, reliable access.' },
    { title: 'Scalable & Modular', desc: 'Works for single-campus and multi-branch institutions with centralized control.' },
    { title: 'Support You Can Trust', desc: 'Rapid onboarding, 24x7 support and dedicated customer success.' }
  ];



  const modernizationRoadmap = [
    {
      step: 1,
      title: "Proven Track Record",
      desc: "Our parent company has over a decade in the industry with sustainable growth and minimal attrition. The portfolio and results we have delivered for 1000+ customers speak for themselves."
    },
    {
      step: 2,
      title: "We listen to you",
      desc: "We are open‑minded and start by understanding your requirements. Your ideas guide the solution and we convert them into a practical, launched product you envisioned."
    },
    {
      step: 3,
      title: "Post‑launch updates",
      desc: "Engagement does not end at launch. Websites and apps evolve, especially across academic years. We support change requests, enhancements, and integrations whenever you need them."
    },
    {
      step: 4,
      title: "Rich Experience",
      desc: "Zeniushub leverages 10+ years of multi‑industry experience to bring best practices to education. We translate those principles into a delightful digital experience for your institution."
    },
    {
      step: 5,
      title: "Professional Team",
      desc: "Our experts convert traffic into outcomes. With strengths in UX, information architecture, usage patterns and content psychology, we increase engagement that leads to better results."
    },
    {
      step: 6,
      title: "Total Solutions",
      desc: "From domain & hosting to CMS, content and digital marketing—we partner with trusted providers so everything lives under one roof and fits your budget."
    },
  ];
  return (
    <>
      <Header />
      <PageHero title="Why Choose Us" />
      <section className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text block - second on small, first on md+ */}
          <div className="reveal order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Secure. Fast. Reliable.</h2>
            <p className="mt-3 text-gray-700">We prioritize security and performance at every layer, from data handling and access controls to continuous monitoring and backups.</p>
            <ul className="mt-4 space-y-2">
              {points.map(p => (
                <li key={p.title} className="text-gray-700"><span className="font-semibold">{p.title}:</span> {p.desc}</li>
              ))}
            </ul>
          </div>
          {/* Image block - first on small, second on md+ */}
          <div className="rounded-2xl border border-orange-100 bg-white shadow reveal reveal-delay-2 order-1 md:order-2 p-3 flex items-center justify-center">
            <img loading="lazy" src="/Img/Secure.png" alt="Security" className="max-h-80 md:max-h-96 w-full object-contain" />
          </div>
        </div>
      </section>

      {/* Layout 2: Assurance cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              t: "Data Protection",
              d: "Encryption, backups, and strict data residency policies.",
            },
            {
              t: "Access Control",
              d: "Fine-grained roles, SSO, and audit logs reduce risk.",
            },
            {
              t: "Reliability",
              d: "Multi-AZ infrastructure, proactive monitoring & alerts.",
            },
            {
              t: "Compliance",
              d: "Best-practice handling aligned with applicable regulations.",
            },
          ].map((c, i) => (
            <div
              key={c.t}
              className={`relative rounded-2xl bg-white border border-orange-100 p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 reveal reveal-delay-${(i % 4) + 1}`}
            >
              {/* Decorative Border Accent */}
              <div className="absolute inset-0 rounded-2xl border-r-2 border-b-2 border-[#ff6a21] opacity-60 pointer-events-none"></div>

              {/* Content */}
              <h4 className="font-semibold text-gray-900 text-lg md:text-xl">
                {c.t}
              </h4>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Layout 3: Why Choose Us details */}
      <section className="max-w-7xl mx-auto px-6 pb-16 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21] mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modernizationRoadmap.map(({ step, title, desc }, idx) => (
            <TechProcessCard step={step} title={title} desc={desc} />

          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default WhyChooseUs


