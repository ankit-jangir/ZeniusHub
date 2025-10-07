import React from 'react'

const AboutBg = ({ children }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Global About decorative accents */}
      <div className="pointer-events-none absolute -z-10 -left-40 top-24 w-[560px] h-[560px] rounded-full bg-[#ff6a21]/10" />
      <div className="pointer-events-none absolute -z-10 right-[-120px] top-10 w-80 h-80 rounded-full bg-[#ff6a21]/5" />
      <div className="pointer-events-none absolute -z-10 left-10 bottom-32 w-56 h-56 rounded-full bg-[#ff6a21]/5" />
      <div className="pointer-events-none absolute -z-10 right-8 bottom-8 w-72 md:w-96 h-16 bg-[#ff6a21]/10 rounded-t-2xl" />
      <div className="relative">
        {children}
      </div>
    </section>
  )
}

export default AboutBg


