import React from 'react'
import PageHero from '../component/PageHero'

const TermsCondition = () => {
  return (
    <>
    {/* Main hero section  */}
      <PageHero title="Terms and Conditions" />
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-orange-100">
          <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-orange-100 rounded-t-xl bg-gradient-to-r from-orange-50/70 to-white">
            <div>
              <p className="text-xs md:text-sm text-orange-500 font-semibold tracking-wide uppercase">Zeniushub Legal</p>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">School ERP – Terms and Conditions</h2>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="/PDF/Zeniushub.pdf"
                download="Zeniushub.pdf"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[#ff6a21] border border-[#ff6a21] hover:bg-[#ff6a21] hover:text-white transition-colors text-sm md:text-base"
              >
                Download PDF
              </a>
            </div>
          </div>

          <article className="px-6 md:px-10 py-8 text-gray-800 leading-relaxed text-sm sm:text-[15px] md:text-base">
            <p className="mb-6">
              This enhanced draft covers usage, features, user roles, fees, data responsibilities, privacy, and legal clauses important for a comprehensive Terms and Conditions document for your school ERP platform. Here is the expanded full Terms and Conditions document for Zeniushub's School ERP platform with more detailed sub-sections and company details added.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">1. Introduction</h3>
            <p className="mt-2">
              Welcome to Zeniushub. These Terms and Conditions ("Terms") govern your use of the Zeniushub School ERP platform located at D-153, Hanuman Nagar, Amerpali Circle, Vaishali Nagar, Jaipur, Rajasthan, India (Website: <a href="https://zeniushub.in" className="text-[#ff6a21] hover:underline" target="_blank" rel="noreferrer">https://zeniushub.in</a>). By accessing or using any panel of the ERP including master, admin, instructor, or student panels (the "Service"), you agree to be bound by these Terms.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">2. Definitions</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Zeniushub, "we", "us", "our"</strong>: The owner and operator of the School ERP platform.</li>
              <li><strong>User, "you", "your"</strong>: Any person or entity registering or using the Service.</li>
              <li><strong>Service</strong>: The School ERP software platform offering multiple user panels for school management.</li>
              <li><strong>Data</strong>: Any personal, institutional, academic, or other data entered, stored, or transmitted via the platform.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">3. Account Registration and Security</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Users must register with accurate, complete information pertinent to their role within the institution.</li>
              <li>You are responsible for maintaining the confidentiality of login credentials and all activities under your account.</li>
              <li>You must notify Zeniushub immediately about any unauthorized use or security breach.</li>
              <li>Accounts are non-transferable and intended exclusively for authorized users.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">4. Use of Service</h3>
            <p className="mt-2">The Service is solely for educational institution management purposes including attendance, examination, fee management, communication, library, transport, and hostel management.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Unauthorized use, including data misuse, sharing credentials, or disrupting system functionality, is prohibited.</li>
              <li>Role-based access control applies: master, admin, instructor, and student panels have defined permissions to ensure data security.</li>
              <li>You agree to comply with all applicable laws, institutional policies, and Zeniushub guidelines when using the platform.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">5. Key Features Supported</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Attendance Management</strong>: Biometric and QR code-based attendance for students and staff with automated notifications.</li>
              <li><strong>Examination & Result Management</strong>: Conduct, schedule, and automatically generate student grades and reports.</li>
              <li><strong>Fee Management</strong>: Online fee payment integration with automatic receipt generation and accounting reconciliation.</li>
              <li><strong>Bus & Transport Tracking</strong>: Real-time GPS tracking with SMS alerts for parents and school officials.</li>
              <li><strong>Hostel Management</strong>: Room allocation, fee management, and record-keeping for hostel facilities.</li>
              <li><strong>Library Management</strong>: Cataloging, issue, and return of books with inventory tracking.</li>
              <li><strong>Communication Tools</strong>: SMS, email, and notification systems for seamless communication among parents, teachers, and students.</li>
              <li><strong>Online Shopping Store</strong>: For school essentials, uniforms, and supplies via portal/mobile app.</li>
              <li><strong>Video Library & Virtual Classroom</strong>: Hosting and streaming class recordings and online sessions.</li>
              <li><strong>Multi-Branch Support</strong>: Manage multiple school branches from a centralized dashboard.</li>
              <li><strong>Reports & Analytics</strong>: Comprehensive reporting for attendance, performance, finances, and more.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">6. Subscription, Fees, and Payment</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Usage of the Service requires subscription payments as per the chosen plan, billing cycle, and user limits.</li>
              <li>Fees shall be paid promptly per invoice. Non-payment or delayed payments may result in suspension or termination.</li>
              <li>Additional fees may apply for add-ons, extra users, or customization.</li>
              <li>Pricing changes will be communicated in advance.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">7. Intellectual Property Rights</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>All intellectual property rights in the Service, software, trademarks, and content are owned by Zeniushub.</li>
              <li>Users receive a limited, non-exclusive license to use the Service in accordance with these Terms.</li>
              <li>Unauthorized copying, modification, or redistribution is strictly prohibited.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">8. User Data and Content</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Users own the data they upload but grant Zeniushub a license to use it to provide and improve the Service.</li>
              <li>Users are responsible for data accuracy and must ensure compliance with applicable laws (e.g., personal data protection).</li>
              <li>Zeniushub uses industry-standard security protocols to protect your data but is not liable for losses arising from unauthorized access due to user negligence.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">9. Privacy and Security</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Data is collected, stored, and used solely to operate the ERP effectively.</li>
              <li>Personal data is protected by encryption and access controls.</li>
              <li>Zeniushub will not share your data with third parties, except in compliance with legal requirements or authorized service integrations.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">10. Limitation of Liability</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The Service is provided "as is" without warranties regarding uptime, accuracy, or suitability for your purposes.</li>
              <li>Zeniushub disclaims all liabilities for indirect, incidental, or consequential damages.</li>
              <li>Liability for direct damages is capped at fees paid in the past 12 months.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">11. Term and Termination</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>These Terms remain in effect while using the Service or until terminated.</li>
              <li>Breach of Terms, misuse, or failure to pay allows Zeniushub to suspend or terminate access.</li>
              <li>Users must cease use upon termination; data may be deleted unless exported beforehand.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">12. Modifications</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Zeniushub may update Terms or Service features with notice via email or platform alerts.</li>
              <li>Continued use means acceptance of changes.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">13. Third-Party Services</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The Service may include third-party integrations whose terms apply separately.</li>
              <li>Zeniushub is not responsible for third-party practices or content.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">14. Dispute Resolution and Governing Law</h3>
            <p className="mt-2">Governed by Indian law, disputes to be resolved in courts located in Jaipur, Rajasthan.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">15. Miscellaneous</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Invalidity of any provision does not affect others.</li>
              <li>No waiver of rights continues beyond the specific instance.</li>
              <li>These Terms and Privacy Policy constitute the entire agreement.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">16. Contact Information</h3>
            <address className="not-italic mt-2 text-gray-800">
              <div><strong>Zeniushub</strong></div>
              <div>D-153, Hanuman Nagar, Amerpali Circle, Vaishali Nagar</div>
              <div>Jaipur, Rajasthan, India</div>
              <div>Phone: <a className="text-[#ff6a21]" href="tel:+919257479576">+91 92574 79576</a></div>
              <div>Email: <a className="text-[#ff6a21]" href="mailto:support@zeniushub.in">support@zeniushub.in</a></div>
              <div>Website: <a className="text-[#ff6a21]" href="https://zeniushub.in" target="_blank" rel="noreferrer">https://zeniushub.in</a></div>
            </address>
          </article>
        </div>
      </section>
    </>
  )
}

export default TermsCondition