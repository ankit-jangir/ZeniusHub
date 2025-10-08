import React from 'react';
import PageHero from '../component/PageHero';
import { ICONS } from '../component/Icons';
import Button from '../component/Button';
import CTAsection from '../component/CTAsection';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const TalkToUs = () => {
  const features = [
    { icon: ICONS.Rocket, text: 'Modern School Management' },
    { icon: ICONS.graduatecap, text: 'Student-Centered Learning' },
    { icon: ICONS.Users, text: 'Parent-Teacher Communication' },
    { icon: ICONS.chart, text: 'Academic Progress Tracking' },
    { icon: ICONS.globe, text: 'Digital Campus Solutions' }
  ];

  const contactInfo = [
    {
      icon: ICONS.MapPin,
      title: 'Visit Our Office',
      content: 'D-153, Hanuman Nagar, Amerpali Circle, Vaishali Nagar, Jaipur, Rajasthan 302021',
      action: 'Get Directions',
      link: 'https://maps.google.com/?q=D-153,+Hanuman+Nagar,+Amerpali+Circle,+Vaishali+Nagar,+Jaipur'
    },
    {
      icon: ICONS.mail,
      title: 'Email Us',
      content: 'info@zeniushub.in',
      action: 'Send Email',
      link: 'mailto:info@zeniushub.in'
    },
    {
      icon: ICONS.phone,
      title: 'Call Us',
      content: '+91 92574 79576',
      action: 'Call Now',
      link: 'tel:+919257479576'
    }
  ];

  const openGlobalForm = () => {
    window.dispatchEvent(new CustomEvent('openGlobalForm'));
  };

  const faqs = [
    {
      question: "How can Zeniushub help modernize our school?",
      answer: "Zeniushub provides comprehensive digital solutions including student management, parent communication apps, online learning platforms, and administrative tools to transform your traditional school into a modern educational institution."
    },
    {
      question: "Is our school data secure with Zeniushub?",
      answer: "Yes, we use enterprise-grade security with SSL encryption, regular backups, and comply with educational data protection regulations to keep your school's information safe."
    },
    {
      question: "Do you provide training for our teachers and staff?",
      answer: "Absolutely! We offer comprehensive training sessions, video tutorials, and ongoing support to ensure your teachers and staff are comfortable with our modern school management tools."
    },
    {
      question: "Can parents access their child's information easily?",
      answer: "Yes, our parent app provides real-time access to attendance, grades, assignments, school announcements, and direct communication with teachers."
    },
    {
      question: "What kind of support do you provide to schools?",
      answer: "We offer 24/7 technical support, regular system updates, training sessions, and dedicated account management for all our partner schools."
    },
    {
      question: "Can we customize the platform for our school's needs?",
      answer: "Absolutely! Zeniushub is highly customizable. We can tailor the platform to match your school's specific requirements, branding, and educational workflows."
    }
  ];

  return (
    <>
      <Header />
      <PageHero />

      {/* Hero Section with Company Info */}
      <div className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-4 sm:mb-6 leading-tight">
                Let's Build Your Modern School Together
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Ready to transform your school with Zeniushub's modern digital solutions?
                Our team is here to help you create an engaging learning environment, improve parent communication, and enhance student success.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="px-3 sm:px-4 py-2 bg-orange-500 text-white rounded-full text-xs sm:text-sm font-medium">Free School Demo</span>
                <span className="px-3 sm:px-4 py-2 border border-orange-500 text-orange-600 rounded-full text-xs sm:text-sm font-medium">Teacher Training</span>
                <span className="px-3 sm:px-4 py-2 border border-orange-500 text-orange-600 rounded-full text-xs sm:text-sm font-medium">Parent App</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-orange-100">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4 sm:mb-6 text-center lg:text-left">Why Choose Zeniushub for Your School?</h3>
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-orange-100 text-orange-600 flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Ready to take the next step? Reach out to us through any of these channels and let's discuss how Zeniushub can transform your school.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="group bg-white rounded-xl sm:rounded-2xl shadow-lg border border-orange-100 p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{info.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{info.content}</p>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold hover:underline transition-colors text-sm sm:text-base"
                    >
                      {info.action}
                      <ICONS.ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Get answers to the most common questions about Zeniushub and our school solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-orange-100 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Call To Action */}
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <CTAsection />
      </section>
      <Footer />
    </>
  );
};

export default TalkToUs;