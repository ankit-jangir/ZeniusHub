import React from 'react'
import PageHero from '../component/PageHero'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <PageHero title="Privacy Policy" />
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-orange-100">
          <div className="px-6 md:px-10 py-6 border-b border-orange-100 rounded-t-xl bg-gradient-to-r from-orange-50/70 to-white">
            <div>
              <p className="text-xs md:text-sm text-orange-500 font-semibold tracking-wide uppercase">Zeniushub Legal Document</p>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">Privacy Policy</h2>
              <p className="text-sm md:text-base text-gray-600">
                Learn how we collect, use, and protect your personal information when using our school management platform.
              </p>
            </div>
          </div>

          <article className="px-6 md:px-10 py-8 text-gray-800 leading-relaxed text-sm sm:text-[15px] md:text-base">
            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21]">1. Introduction</h3>
            <p className="mt-2">Zeniushub ("we," "us," or "our") respects your privacy and is committed to protecting personal information collected while using our school management platform available at <a href="https://zeniushub.in" className="text-[#ff6a21] hover:underline" target="_blank" rel="noreferrer">https://zeniushub.in</a>. This Privacy Policy explains the types of information we collect, how we use it, and your rights regarding that information.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">2. Information We Collect</h3>
            <h4 className="font-semibold mt-2">Personal Data</h4>
            <p className="mt-1">We collect data that you or your institution provide, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Names, emails, phone numbers, roles (admin, teacher, student, parent)</li>
              <li>Academic records, attendance, examination results, fee payment details</li>
              <li>Contact details of parents or guardians as provided by institutions</li>
              <li>Biometric data, only with explicit consent for features like attendance identification</li>
            </ul>
            <h4 className="font-semibold mt-4">Usage Data</h4>
            <p className="mt-1">Automatically collected data includes IP addresses, browser types, device information, and interaction logs to help us improve the platform and enhance security.</p>
            <h4 className="font-semibold mt-4">Cookies and Tracking</h4>
            <p className="mt-1">We use cookies and similar technologies to manage sessions and provide analytics for system performance and usage trends.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">3. How We Use Your Information</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>To provide and maintain our school management services and features tailored to each user role.</li>
              <li>To administer accounts and verify user identity.</li>
              <li>To process payments and manage subscriptions.</li>
              <li>To communicate important updates, notifications, and customer support.</li>
              <li>To detect and prevent fraud or unauthorized system use.</li>
              <li>To analyze usage data for continuous platform improvements.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">4. Sharing and Disclosure</h3>
            <p className="mt-2">Your personal data is not sold or rented to third parties. Data may be shared with trusted third-party service providers (such as payment processors and cloud hosting services) under strict confidentiality agreements. We may disclose data when legally required or to protect the rights and safety of users or the platform. Aggregate, anonymized data may be used for research or statistical purposes.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">5. Data Security</h3>
            <p className="mt-2">We protect your information with industry-standard technical and organizational security measures, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Encryption for data transmission and storage</li>
              <li>Access controls and role-based permissions</li>
              <li>Regular security audits and monitoring</li>
              <li>Secure backups and disaster recovery protocols</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">6. Data Retention</h3>
            <p className="mt-2">We retain your personal data only as long as necessary to provide our services or comply with legal obligations. Upon account closure or request, data will be securely deleted or anonymized, unless retention is legally mandated.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">7. Your Rights</h3>
            <p className="mt-2">You have rights regarding your personal data, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Accessing, correcting, or updating your information</li>
              <li>Requesting deletion or restriction of your data processing</li>
              <li>Objecting to data processing for marketing or analytics</li>
              <li>Withdrawing consent where applicable</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us through your institution or directly at our support channels.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">8. Children’s Privacy</h3>
            <p className="mt-2">Our services are designed for educational institutions. We do not knowingly collect personal data from children under the age of 13 without verified parental consent. If you believe we have inadvertently collected such data, please contact us immediately.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">9. Cookies and Similar Technologies</h3>
            <p className="mt-2">Cookies help us enhance your user experience, maintain sessions, and collect anonymous data for analytics. You can manage cookie preferences through your browser settings.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">10. International Data Transfers</h3>
            <p className="mt-2">Your data may be stored and processed on servers located outside your country. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">11. Changes to This Privacy Policy</h3>
            <p className="mt-2">We may update this Privacy Policy occasionally to reflect changes in practices or legal requirements. Material changes will be communicated via our platform or email. Continued use of the service indicates acceptance of such changes.</p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">12. Disclaimer</h3>
            <p className="mt-2">
              This is a comprehensive educational technology project involving multiple complex systems and integrations. While we strive for accuracy and completeness in all documentation and privacy practices, any errors or omissions in this document or our platform are unintentional and do not reflect negligence on our part. We continuously work to improve our services and documentation. If you notice any discrepancies, please contact us for clarification.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#ff6a21] mt-6">13. Contact Information</h3>
            <address className="not-italic mt-2 text-gray-800">
              <div><strong>Zeniushub</strong></div>
              <div>D-153, Hanuman Nagar, Amerpali Circle, Vaishali Nagar</div>
              <div>Jaipur, Rajasthan, India</div>
              <div>Phone: <a className="text-[#ff6a21]" href="tel:+919257479576">+91-92574 79576</a></div>
              <div>Email: <a className="text-[#ff6a21]" href="mailto:privacy@zeniushub.in">privacy@zeniushub.in</a></div>
              <div>Website: <a className="text-[#ff6a21]" href="https://zeniushub.in" target="_blank" rel="noreferrer">https://zeniushub.in</a></div>
            </address>
          </article>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PrivacyPolicy