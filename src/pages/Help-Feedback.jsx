import React from "react";
import PageHero from "../component/PageHero";
import Lottie from "react-lottie-player";
import faqAnimation from '../assets/video/faq.json'
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const faqs = [
  {
    question: "How do I set up my school on ZeniusHub?",
    answer: "Setting up your school is simple! After registration, use the Master Panel to define your school structure, academic sessions, classes, and subjects. Our onboarding team provides step-by-step guidance to ensure smooth setup within 24-48 hours."
  },
  {
    question: "Can parents track their child's attendance and fees?",
    answer: "Yes! Parents can access their child's attendance records, fee status, exam results, and school announcements through the Student Panel. This provides comprehensive visibility into their child's academic progress and school activities."
  },
  {
    question: "How does fee management work in ZeniusHub?",
    answer: "Our automated fee management system handles fee collection, generates receipts, sends reminders, and provides detailed financial reports. Multiple payment methods are supported including online payments, and parents can view fee history anytime through the app."
  },
  {
    question: "Is student data secure on ZeniusHub?",
    answer: "Absolutely! We use bank-level security with encrypted data storage, secure user authentication, and regular security audits. Your student information is protected with role-based access control ensuring only authorized personnel can access specific data."
  },
  {
    question: "Can teachers create and manage exams online?",
    answer: "Yes! Teachers can create exams, assign marks, generate report cards, and share results securely with parents through the Teacher Panel. The system supports multiple assessment types and automatically calculates grades and rankings."
  },
  {
    question: "Do you provide training for school staff?",
    answer: "We provide comprehensive training for all users including administrators, teachers, and support staff. This includes video tutorials, live training sessions, and detailed user manuals to ensure everyone can use ZeniusHub effectively."
  },
  {
    question: "Can ZeniusHub handle multiple school branches?",
    answer: "Yes! Our multi-branch management system allows central oversight while maintaining branch-specific operations. Each branch can have customized settings while providing consolidated reporting and management from the main administration."
  },
  {
    question: "How does the attendance system work?",
    answer: "ZeniusHub supports manual entry and biometric integration for attendance marking. Teachers can mark attendance quickly through the Teacher Panel, and students can view their attendance records anytime through the Student App."
  },
  {
    question: "What kind of reports can I generate?",
    answer: "ZeniusHub provides comprehensive reports including academic performance, attendance summaries, fee collection reports, student progress tracking, and administrative analytics. All reports can be exported and customized as needed."
  },
  {
    question: "Is there 24/7 technical support available?",
    answer: "Yes! Our dedicated support team is available via phone, email, and live chat to assist with any technical issues, user queries, or system guidance. We ensure minimal downtime and quick resolution of all support requests."
  }
];


const HelpFeedback = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <>
      <Header />
      <PageHero />

      <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
        {/* Help Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Need Help?</h2>
            <p className="text-gray-700 text-lg">
              Welcome to ZeniusHub Help & Feedback section! Here you can find answers to common questions about our educational management platform, 
              school setup, and features. If you need further assistance, please contact our support team.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Lottie
              loop
              animationData={faqAnimation}
              play
              style={{ width: "100%", height: "300px" }}
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-orange-200 rounded-lg bg-white shadow hover:shadow-lg transition duration-300"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-orange-600 focus:outline-none"
                >
                  {faq.question}
                  <span className="text-2xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 border-t border-orange-100 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpFeedback;
