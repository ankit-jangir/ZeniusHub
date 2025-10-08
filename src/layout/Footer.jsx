import React from "react";
import deco from "../../public/Img/QR_code.png";
import { MapPin, Mail, Phone } from "lucide-react";
import { ICONS } from "../component/Icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-50 to-white text-gray-700 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span className="absolute left-10 top-10 text-orange-200 text-5xl font-bold float-up-down" style={{ animationDelay: '0s' }}>+</span>
        <span className="absolute left-20 top-24 text-orange-200 text-4xl font-bold float-up-down" style={{ animationDelay: '0.8s' }}>+</span>
        <span className="absolute left-6 top-32 text-orange-200 text-3xl font-bold float-up-down" style={{ animationDelay: '1.6s' }}>+</span>

        <span className="hidden md:block absolute right-16 bottom-36 text-orange-200 text-5xl font-extrabold float-up-down" style={{ animationDelay: '0.4s' }}>›</span>
        <span className="hidden md:block absolute right-10 bottom-28 text-orange-200 text-5xl font-extrabold float-up-down" style={{ animationDelay: '1.2s' }}>›</span>
        <span className="hidden md:block absolute right-4 bottom-20 text-orange-200 text-5xl font-extrabold float-up-down" style={{ animationDelay: '2s' }}>›</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#ff6a21] leading-tight">
              Zeniushub
            </h2>
            <p className="text-gray-700 max-w-md">
              With educational institutions galore, the students and their parents are increasingly
              finding it a daunting task to select from among them the best one so that they can
              take informed decisions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Links</h3>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-14 h-1 bg-[#ff6a21] rounded"></span>
              <span className="w-6 h-1 bg-[#ff6a21] rounded"></span>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><a className="hover:text-[#ff6a21] underline decoration-dotted underline-offset-4" href="/">Home</a></li>
              <li><a className="hover:text-[#ff6a21] underline decoration-dotted underline-offset-4" href="/About-Us">About Us</a></li>
              <li><a className="hover:text-[#ff6a21] underline decoration-dotted underline-offset-4" href="/Solutions">Solutions</a></li>
              <li><a className="hover:text-[#ff6a21] underline decoration-dotted underline-offset-4" href="/Our-Process">Our Process</a></li>
              <li><a className="hover:text-[#ff6a21] underline decoration-dotted underline-offset-4" href="/Clients">Clients</a></li>

            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">UseFull Links</h3>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-14 h-1 bg-[#ff6a21] rounded"></span>
              <span className="w-6 h-1 bg-[#ff6a21] rounded"></span>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-700">

              <li><a className="hover:text-[#ff6a21] underline decoration-dotted underline-offset-4" href="/Talk-To-Us">Talk To Us</a></li>

              <li><a className="hover:text-[#ff6a21] underline decoration-dotted underline-offset-4" href="/Help-Feedback">Help & Feedback</a></li>
            </ul>
          </div>

          {/* <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-3">QR Code</h3>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-14 h-1 bg-[#ff6a21] rounded"></span>
              <span className="w-6 h-1 bg-[#ff6a21] rounded"></span>
            </div>
            <div className="w-72 h-72 p-2 bg-white rounded shadow-lg flex items-center justify-center">
              <img src={deco} alt="QR code" className="w-full h-full object-contain" />
            </div>
          </div> */}

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Get in touch!</h3>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-14 h-1 bg-[#ff6a21] rounded"></span>
              <span className="w-6 h-1 bg-[#ff6a21] rounded"></span>
            </div>
            <p className="text-gray-700 mb-6">Zeniushub</p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <ICONS.MapPin className="text-[#ff6a21] mr-3 mt-1" size={24} />
                <div>
                  d-153, hanuman nagar, amerpali circle ,veshali nagar, (Opposite INOX Complex & Near Amerpali circle)
                </div>
              </li>

              <li className="flex items-center">
                <ICONS.mail className="text-[#ff6a21] mr-3" size={24} />
                <a className="hover:text-[#ff6a21]" href="mailto:info@Zeniushub.co.in">info@Zeniushub.co.in</a>
              </li>

              <li className="flex items-center">
                <ICONS.phone className="text-[#ff6a21] mr-3" size={24} />
                <a className="hover:text-[#ff6a21]" href="tel:+919257479576">+91 9257479576</a>
              </li>

              <li className="flex items-center">
                <ICONS.phone className="text-[#ff6a21] mr-3" size={24} />
                <a className="hover:text-[#ff6a21]" href="tel:+919257479576">+91 9257479576</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-orange-100 pt-6 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-[#ff6a21]">Zeniushub Web, Powered by Zeniushub Technologies</span> All Rights Reserved.
            </div>
            <div className="flex items-center gap-6 text-gray-700">
              <a href="/Privacy-Policy" className="hover:text-[#ff6a21]">Privacy Policy</a>
              <a href="/Terms-Condition" className="hover:text-[#ff6a21]">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
