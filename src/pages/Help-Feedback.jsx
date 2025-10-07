import React from "react";
import PageHero from "../component/PageHero";
import Lottie from "react-lottie-player";
import faqAnimation from '../assets/video/faq.json'

const faqs = [
  {
    question: "How long is this site live?",
    answer: "Zeniushub is continuously evolving to meet the needs of its users. We aim to keep the platform live indefinitely, with regular updates to ensure performance, security, and new feature availability. Our team is committed to long-term support so you can rely on Zeniushub for all your website and CMS needs."
  },
  {
    question: "Can I install/upload anything I want on the platform?",
    answer: "Currently, uploads are limited to 100MB per instance to ensure optimal performance and stability for all users. This includes images, videos, documents, and other media. We plan to increase upload limits in future updates and may offer premium options for larger files, giving you flexibility while maintaining system reliability."
  },
  {
    question: "How can I migrate to another site?",
    answer: "Migration to another site is currently a manual process. We provide detailed guides to help you export your content, including media, pages, and settings, and then import it safely to your new site. Our support team is also available to assist if you encounter any issues during migration to ensure your data remains intact."
  },
  {
    question: "Can I change the domain you give me?",
    answer: "At the moment, the platform assigns a fixed domain for each site to simplify setup and management. However, we understand that custom domains are important for branding and professionalism. Custom domain support is planned in upcoming updates, which will allow you to connect your own domain easily."
  },
  {
    question: "How many sites can I create at once?",
    answer: "Each user account can create one site at the moment. This ensures focus and resources are dedicated to maintaining each site’s performance and reliability. In future updates, we plan to allow users to create multiple sites under a single account, providing greater flexibility for businesses and developers."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! Zeniushub offers a 14-day free trial for new users to explore all the platform’s features. This trial allows you to create and customize your site, test integrations, and understand how the platform works before committing to a paid subscription. It’s a risk-free way to experience Zeniushub."
  },
  {
    question: "What payment methods are supported?",
    answer: "We accept multiple payment methods to make transactions simple and secure. This includes major credit and debit cards, UPI, and PayPal. All payment information is encrypted, and subscriptions can be managed directly through your account dashboard, giving you full control over billing and invoices."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely! Zeniushub subscriptions are flexible. You can cancel at any time from your account settings without penalties. Your site will continue to function until the end of your billing cycle, and you won’t be charged for the next period. We want users to feel in control of their subscription choices."
  },
  {
    question: "Is there customer support available?",
    answer: "Yes, our dedicated support team is available via multiple channels, including live chat, email, and support tickets. We aim to respond promptly to inquiries and provide guidance for technical issues, platform usage, and troubleshooting. Our goal is to ensure every user has a smooth experience on Zeniushub."
  },
  {
    question: "Can I add multiple users to my site?",
    answer: "Yes, Zeniushub supports multi-user management with role-based permissions. You can invite team members to contribute to your site, assign specific roles like editor or admin, and control access to different parts of the platform. This ensures collaboration is efficient and secure for organizations of any size."
  }
];


const HelpFeedback = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <>
      <PageHero />

      <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
        {/* Help Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Need Help?</h2>
            <p className="text-gray-700 text-lg">
              Welcome to Zeniushub Help & Feedback section! Here you can find answers to common questions regarding our website
              If you need further assistance, please contact our support team.
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
    </>
  );
};

export default HelpFeedback;
