import React from 'react'
import PageHero from '../../component/PageHero'
import AboutBg from '../../component/AboutBg'
import { Award, Users, Shield, BarChart3, Rocket, CheckCircle2, HeartHandshake, BadgeCheck, Cpu, Globe, Clock, Sparkles } from 'lucide-react'
import { ICONS } from '../../component/Icons'
import Button from '../../component/Button'
import CTAsection from '../../component/CTAsection'
import Location from '../../component/Location'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'


const About = () => {

  return (
    <>
      <Header />
      <PageHero />

      <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
        {/* Who We Are */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-50 to-white border border-orange-100 p-6 md:p-10 mb-12 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Right: Split image card */}
            <div className="order-2 md:order-2 relative rounded-3xl overflow-hidden bg-white shadow-xl border border-orange-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-[16/10] w-full">
                <img src="/Img/whoimg1.jpg" alt="Who we are" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* Left: Text */}
            <div className="order-1 md:order-1 relative">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white md:text-orange-600">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                <span className="text-gray-900 md:text-[#ff6a21]">Who We</span>
                <br />
                <span className="text-gray-900">Are?</span>
              </h2>
              <p className="mt-4 text-gray-700">At ZeinusHub, we are innovators passionate about transforming the way institutions, educators, and businesses manage their operations. Our mission is to simplify complex processes through smart automation, insightful analytics, and a modern digital experience. With years of expertise in ERP and cloud, we empower schools, colleges, and enterprises to focus on <span className="font-semibold">growth</span> — not paperwork.</p>
              <div className="mt-5 grid grid-cols-2 gap-3 max-w-md">
                {["Innovation", "Automation", "Analytics", "Growth"].map((k) => (
                  <div key={k} className="rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 hover:shadow-md hover:-translate-y-0.5 transition-all">
                    {k}
                  </div>
                ))}
              </div>

              {/* large soft circle background accent */}
              <div className="pointer-events-none absolute -z-10 -left-24 -top-20 w-72 h-72 rounded-full bg-[#ff6a21]/10" />
              <div className="pointer-events-none absolute -z-10 -left-12 top-6 w-40 h-40 rounded-full bg-[#ff6a21]/5" />
            </div>
          </div>
          {/* Background design accents */}
          <div className="pointer-events-none absolute -z-10 -left-40 -top-16 w-[560px] h-[560px] rounded-full bg-[#ff6a21]/12" />
          <div className="pointer-events-none absolute -z-10 -left-10 top-20 w-[260px] h-[260px] rounded-full bg-white/90" />
          <div className="pointer-events-none absolute -z-10 -right-2 -top-16 w-64 h-44 md:w-80 md:h-56 bg-[#ff6a21] rounded-bl-3xl" />
          <div className="pointer-events-none absolute -z-10 right-16 -bottom-10 w-72 md:w-96 h-20 bg-[#ff6a21] rounded-t-2xl" />
          <div className="pointer-events-none absolute -z-10 right-24 -bottom-3 w-60 h-10 bg-white rounded-full shadow" />
        </section>

        {/* Founder / Owner */}
        <section className="section-spacing">
          <div className="rounded-2xl border border-orange-100 bg-white shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Image Section */}
              <div className="flex justify-center md:justify-center">
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#ff6a21]/30 bg-white shadow-md flex items-center justify-center">
                  <img
                    src="/Img/FounderVision.jpg"
                    alt="Founder"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Founder & Vision</h2>
                <p className="mt-3 text-gray-700 leading-relaxed text-base md:text-lg">
                  Guided by a product-first mindset, our founder set out to remove complexity from campus operations. The vision: a unified ERP that blends
                  <span className="font-semibold text-[#ff6a21]"> automation</span>,
                  <span className="font-semibold text-[#ff6a21]"> analytics</span>, and a refined UX for real impact across all stakeholders.
                </p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
                  <li className="flex items-start gap-2 justify-center md:justify-start">
                    <ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5 flex-shrink-0" />
                    <span>Hands-on with schools to shape practical workflows</span>
                  </li>
                  <li className="flex items-start gap-2 justify-center md:justify-start">
                    <ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5 flex-shrink-0" />
                    <span>Focus on security, performance, and scale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>




        {/* Story */}
        <section className="section-spacing">
          <div className="rounded-2xl border border-orange-100 bg-white shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left: Text Section */}
              <div className="order-2 md:order-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#ff6a21]">Our Story</h2>
                <p className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg">
                  Founded with a vision to make school operations seamless, <span className="font-semibold text-[#ff6a21]">Zeniushub</span> combines deep domain understanding with modern engineering. We partner with management, teachers, and parents to deliver a connected learning ecosystem.
                </p>
                <ul className="mt-6 space-y-4 text-gray-800">
                  <li className="flex items-start gap-3 justify-center md:justify-start">
                    <ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5 flex-shrink-0" />
                    <span>Made in India, optimized for Indian school workflows</span>
                  </li>
                  <li className="flex items-start gap-3 justify-center md:justify-start">
                    <ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5 flex-shrink-0" />
                    <span>Rapid onboarding and dedicated support</span>
                  </li>
                  <li className="flex items-start gap-3 justify-center md:justify-start">
                    <ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5 flex-shrink-0" />
                    <span>Scales from single campus to multi-branch groups</span>
                  </li>
                </ul>
              </div>

              {/* Right: Image Section */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-sm md:max-w-md rounded-2xl border border-[#ff6a21]/20 bg-white shadow-md hover:shadow-xl transition-shadow duration-500 p-4 md:p-6">
                  <img
                    src="/Img/OurStory.jpg"
                    alt="Zeniushub"
                    className="w-full h-56 md:h-64 rounded-xl object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl border border-[#ff6a21]/10 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">About Zeniushub</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Zeniushub is a modern School ERP built to simplify every operation across your institution –
              from admissions and attendance to exams, transport, and parent engagement. We bring
              together powerful modules, secure cloud infrastructure, and a delightful user experience so
              schools can focus on what matters most: student outcomes.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3"><ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5" /><span>End‑to‑end workflows for Master, Admin, Instructors, and Students</span></li>
              <li className="flex items-start gap-3"><ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5" /><span>Real‑time notifications, analytics dashboards, and multi‑branch control</span></li>
              <li className="flex items-start gap-3"><ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5" /><span>Parent app, online fee collection, and secure data privacy by design</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                <ICONS.Rocket className="text-[#ff6a21]" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Our Mission</div>
                <div className="font-semibold">Digital transformation for every school</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              We help institutions go paperless, data‑driven, and parent‑friendly with a scalable, secure platform.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 reveal">
          <div className="rounded-xl bg-white shadow border border-orange-100 p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
            <ICONS.Users className="mx-auto text-[#ff6a21]" />
            <div className="mt-2 text-xl font-extrabold">10K+</div>
            <div className="text-xs text-gray-500">Active users</div>
          </div>
          <div className="rounded-xl bg-white shadow border border-orange-100 p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
            <ICONS.shield className="mx-auto text-[#ff6a21]" />
            <div className="mt-2 text-xl font-extrabold">Bank‑grade</div>
            <div className="text-xs text-gray-500">Security</div>
          </div>
          <div className="rounded-xl bg-white shadow border border-orange-100 p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
            <ICONS.barchart3 className="mx-auto text-[#ff6a21]" />
            <div className="mt-2 text-xl font-extrabold">50+</div>
            <div className="text-xs text-gray-500">Smart reports</div>
          </div>
          <div className="rounded-xl bg-white shadow border border-orange-100 p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
            <ICONS.award className="mx-auto text-[#ff6a21]" />
            <div className="mt-2 text-xl font-extrabold">99.9%</div>
            <div className="text-xs text-gray-500">Uptime</div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {[{
            title: 'Admissions & Attendance',
            desc: 'Digitize admissions and track attendance with QR/Biometric and instant alerts.'
          }, {
            title: 'Exams & Results',
            desc: 'Plan exams, publish results, and share report cards securely with parents.'
          }, {
            title: 'Fees & Accounting',
            desc: 'Online fee payments with automated receipts and reconciliations.'
          }, {
            title: 'Transport & Hostel',
            desc: 'GPS bus tracking, hostel room management, fee rules, and safety logs.'
          }, {
            title: 'Library & Inventory',
            desc: 'Catalog, issue/return, and inventory tracking with fine rules.'
          }, {
            title: 'Communication Suite',
            desc: 'SMS, email, push notifications, and parent app engagement.'
          }].map((f) => (
            <div key={f.title} className="rounded-2xl bg-white shadow border border-orange-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center animate-pulse">
                <ICONS.CheckCircle2 className="text-[#ff6a21]" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Panels */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Panels We Support</h2>
          <p className="mt-2 text-gray-700">Purpose-built experiences for each role to keep everyone in sync.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                key: 'master',
                img: '/Img/Master-Panel.png',
                title: 'Master Panel',
                desc: 'Central oversight with branch control and audit logs.',
                hoverDesc: 'Configure multi-branch, roles, and security; monitor system-wide operations.'
              },
              {
                key: 'admin',
                img: '/Img/Admin-Panel.png',
                title: 'Admin Panel',
                desc: 'End-to-end operations, fees, communication, and reports.',
                hoverDesc: 'Automate admissions, fees, and communications with granular permissions.'
              },
              {
                key: 'instructor',
                img: '/Img/InstructorPanel.png',
                title: 'Instructor Panel',
                desc: 'Schedule, attendance, assessments, and parent updates.',
                hoverDesc: 'Plan classes, record attendance, publish results, and notify guardians.'
              },
              {
                key: 'student',
                img: '/Img/StudentPanel.png',
                title: 'Student Panel',
                desc: 'Timetable, results, fees, and communication in one place.',
                hoverDesc: 'View homework, results, dues, and receive real-time announcements.'
              }
            ].map((p) => (
              <div
                key={p.key}
                className="group rounded-2xl bg-white shadow border border-orange-100 overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 reveal"
              >
                <div className="relative h-36 md:h-40 lg:h-44 bg-white flex items-center justify-center p-2">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => { e.currentTarget.src = '/Img/logo.png'; }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 flex items-center justify-center px-4">
                    <p className="text-[#ff6a21] font-semibold text-sm text-center">{p.hoverDesc}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ICONS.user className="text-[#ff6a21]" />
                  </div>
                  <h3 className="mt-3 font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Our Values</h2>
          <p className="mt-2 text-gray-700">Principles that guide how we build, support, and scale Zeniushub.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              icon: <ICONS.hearthandshake className="text-[#ff6a21]" />, title: 'Customer-first', desc: 'We solve real problems and obsess over outcomes.'
            }, {
              icon: <ICONS.badgecheck className="text-[#ff6a21]" />, title: 'Reliability', desc: 'Bank‑grade security, 99.9% uptime, and rigorous QA.'
            }, {
              icon: <ICONS.clock className="text-[#ff6a21]" />, title: 'Speed', desc: 'Fast onboarding, quick support, continuous improvements.'
            }, {
              icon: <ICONS.sparkles className="text-[#ff6a21]" />, title: 'Innovation', desc: 'We constantly refine workflows with modern tech.'
            }].map((v) => (
              <div key={v.title} className="rounded-2xl bg-white shadow border border-orange-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all reveal">
                <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center">{v.icon}</div>
                <h3 className="mt-4 font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Zeniushub */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">Why choose Zeniushub?</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3"><ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5" /><span>Role‑based access for Master, Admin, Instructors, Students with audit logs.</span></li>
              <li className="flex items-start gap-3"><ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5" /><span>Powerful analytics for attendance, performance, fees, and operations.</span></li>
              <li className="flex items-start gap-3"><ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5" /><span>Parent app and omni‑channel communication (SMS, email, push).</span></li>
              <li className="flex items-start gap-3"><ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5" /><span>Scalable for single‑campus to multi‑branch groups with centralized controls.</span></li>
              <li className="flex items-start gap-3"><ICONS.CheckCircle2 className="text-[#ff6a21] mt-0.5" /><span>Rapid deployment and white‑glove onboarding by our support team.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white shadow border border-orange-100 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">Security & Compliance</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3"><ICONS.shield className="text-[#ff6a21] mt-0.5" /><span>Encryption in transit and at rest; strict role permissions.</span></li>
              <li className="flex items-start gap-3"><ICONS.badgecheck className="text-[#ff6a21] mt-0.5" /><span>Regular backups, monitoring, and disaster recovery protocols.</span></li>
              <li className="flex items-start gap-3"><ICONS.cpu className="text-[#ff6a21] mt-0.5" /><span>Hardened cloud infrastructure and periodic security reviews.</span></li>
              <li className="flex items-start gap-3"><ICONS.globe className="text-[#ff6a21] mt-0.5" /><span>Compliant data handling aligned with applicable regulations.</span></li>
            </ul>
          </div>
        </section>

        {/* Trust & Certifications */}
        {/* <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Security • Trust • Reliability</h2>
          <p className="mt-2 text-gray-700">Our platform is engineered with best practices and trusted by institutions.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {[1, 2, 3, 4].map((b) => (
              <div key={b} className="h-16 rounded-xl border border-orange-100 bg-white shadow flex items-center justify-center">
                <img src="/Img/logo.png" alt="Badge" className="h-10 object-contain" />
              </div>
            ))}
          </div>
        </section> */}

        {/* CTA */}
        <CTAsection />

        {/* Location & Connect */}
        <Location />
      </div>
      <Footer />

    </>
  )
}

export default About