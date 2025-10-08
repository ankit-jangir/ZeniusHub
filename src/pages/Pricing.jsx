import React, { useState } from "react";
import PageHero from "../component/PageHero";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// Pricing data with numeric prices and optional offers
const plans = [
  {
    name: "Free Plan",
    price: 0,
    freeCredits: 25,
    costPerCredit: "₹ 499",
    features: {
      "Automatic Attendance": "Yes",
      "Attendance Machine": "₹ 35,000 (Optional)",
      "Automatic Fees Collection": "No",
      "Kan-Ban Reporting system": "Yes",
      "Online Quiz, Exams": "Yes",
      "Student Monitoring": "Yes",
      "Batch Automation": "Yes",
      "Pre-Recorded Courses": "No",
      "Accounts Automation": "Yes",
      "Doubt resolution": "Yes",
      "Sales Management": "Yes",
      "Team Management": "Yes",
      "Inventory Management": "Yes",
      "Vendor Management": "No",
      "Payouts": "No",
      "Hr & Payroll automation": "No",
      "Real Time Analytics": "Yes",
      "Automatic Student Tracking": "No",
      "Whitelabelling": "Yes",
      "Student App (one-time)": "₹ 30,000",
    },
  },
  {
    name: "Starter",
    price: 10000,
    offer: 8999,
    freeCredits: 50,
    costPerCredit: "₹ 415",
    features: {
      "Automatic Attendance": "Yes",
      "Attendance Machine": "₹ 32,500 (Optional)",
      "Automatic Fees Collection": "Yes",
      "Kan-Ban Reporting system": "Yes",
      "Online Quiz, Exams": "Yes",
      "Student Monitoring": "Yes",
      "Batch Automation": "Yes",
      "Pre-Recorded Courses": "Yes",
      "Accounts Automation": "Yes",
      "Doubt resolution": "Yes",
      "Sales Management": "Yes",
      "Team Management": "Yes",
      "Inventory Management": "Yes",
      "Vendor Management": "Yes",
      "Payouts": "Yes",
      "Hr & Payroll automation": "Yes",
      "Real Time Analytics": "Yes",
      "Automatic Student Tracking": "Yes",
      "Whitelabelling": "Yes",
      "Student App (one-time)": "₹ 30,000",
    },
  },
  {
    name: "Expert",
    price: 25000,
    offer: 22500,
    freeCredits: 80,
    costPerCredit: "₹ 365",
    features: {
      "Automatic Attendance": "Yes",
      "Attendance Machine": "₹ 30,500 (Optional)",
      "Automatic Fees Collection": "Yes",
      "Kan-Ban Reporting system": "Yes",
      "Online Quiz, Exams": "Yes",
      "Student Monitoring": "Yes",
      "Batch Automation": "Yes",
      "Pre-Recorded Courses": "Yes",
      "Accounts Automation": "Yes",
      "Doubt resolution": "Yes",
      "Sales Management": "Yes",
      "Team Management": "Yes",
      "Inventory Management": "Yes",
      "Vendor Management": "Yes",
      "Payouts": "Yes",
      "Hr & Payroll automation": "Yes",
      "Real Time Analytics": "Yes",
      "Automatic Student Tracking": "Yes",
      "Whitelabelling": "Yes",
      "Student App (one-time)": "₹ 30,000",
    },
  },
  {
    name: "Professional",
    price: 50000,
    freeCredits: 180,
    costPerCredit: "₹ 295",
    features: {
      "Automatic Attendance": "Yes",
      "Attendance Machine": "₹ 29,000 (Optional)",
      "Automatic Fees Collection": "Yes",
      "Kan-Ban Reporting system": "Yes",
      "Online Quiz, Exams": "Yes",
      "Student Monitoring": "Yes",
      "Batch Automation": "Yes",
      "Pre-Recorded Courses": "Yes",
      "Accounts Automation": "Yes",
      "Doubt resolution": "Yes",
      "Sales Management": "Yes",
      "Team Management": "Yes",
      "Inventory Management": "Yes",
      "Vendor Management": "Yes",
      "Payouts": "Yes",
      "Hr & Payroll automation": "Yes",
      "Real Time Analytics": "Yes",
      "Automatic Student Tracking": "Yes",
      "Whitelabelling": "Yes",
      "Student App (one-time)": "₹ 30,000",
    },
  },
  {
    name: "Scaler",
    price: 100000,
    freeCredits: 425,
    costPerCredit: "₹ 245",
    features: {
      "Automatic Attendance": "Yes",
      "Attendance Machine": "₹ 26,000 (Optional)",
      "Automatic Fees Collection": "Yes",
      "Kan-Ban Reporting system": "Yes",
      "Online Quiz, Exams": "Yes",
      "Student Monitoring": "Yes",
      "Batch Automation": "Yes",
      "Pre-Recorded Courses": "Yes",
      "Accounts Automation": "Yes",
      "Doubt resolution": "Yes",
      "Sales Management": "Yes",
      "Team Management": "Yes",
      "Inventory Management": "Yes",
      "Vendor Management": "Yes",
      "Payouts": "Yes",
      "Hr & Payroll automation": "Yes",
      "Real Time Analytics": "Yes",
      "Automatic Student Tracking": "Yes",
      "Whitelabelling": "Yes",
      "Student App (one-time)": "₹ 30,000",
    },
  },
  {
    name: "Enterprise",
    price: 200000,
    freeCredits: 1350,
    costPerCredit: "₹ 165",
    features: {
      "Automatic Attendance": "Yes",
      "Attendance Machine": "₹ 23,000 (Optional)",
      "Automatic Fees Collection": "Yes",
      "Kan-Ban Reporting system": "Yes",
      "Online Quiz, Exams": "Yes",
      "Student Monitoring": "Yes",
      "Batch Automation": "Yes",
      "Pre-Recorded Courses": "Yes",
      "Accounts Automation": "Yes",
      "Doubt resolution": "Yes",
      "Sales Management": "Yes",
      "Team Management": "Yes",
      "Inventory Management": "Yes",
      "Vendor Management": "Yes",
      "Payouts": "Yes",
      "Hr & Payroll automation": "Yes",
      "Real Time Analytics": "Yes",
      "Automatic Student Tracking": "Yes",
      "Whitelabelling": "Yes",
      "Student App (one-time)": "₹ 30,000",
    },
  },
];

// Card Component
const PricingCard = ({ plan, highlight }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const featureEntries = Object.entries(plan.features);
  const visibleFeatures = isExpanded ? featureEntries : featureEntries.slice(0, 6);

  // Calculate discount percentage if offer exists
  const discountPercent = plan.offer
    ? Math.round(((plan.price - plan.offer) / plan.price) * 100)
    : 0;

  // Format prices with ₹ and thousands separator
  const formatPrice = (price) => `₹ ${price.toLocaleString()}`;

  return (
    <div
      className={`relative bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-4 transition-all hover:shadow-2xl ${highlight ? "popular-plan" : "border-r-2 border-b-2 border-orange-400"
        }`}
      style={{
        minHeight: "360px",
        alignSelf: "start"
      }}
    >
      {highlight && (
        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
          Most Popular
        </div>
      )}

      {plan.offer && (
        <div className="absolute -top-3 -left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-md transform -rotate-2">
          {discountPercent}% OFF
        </div>
      )}


      <h3 className="text-2xl font-bold text-orange-600">{plan.name}</h3>

      <p className="text-lg font-semibold text-gray-900 mb-3">
        Price:{" "}
        {plan.offer ? (
          <>
            <span className="line-through text-gray-400 mr-2">{formatPrice(plan.price)}</span>
            <span className="text-red-600 font-extrabold">{formatPrice(plan.offer)}</span>
          </>
        ) : (
          formatPrice(plan.price)
        )}
      </p>

      <p className="text-gray-700">Free Credits: {plan.freeCredits}</p>
      <p className="text-gray-700">Cost per Credit/year: {plan.costPerCredit}</p>

      <ul className="text-gray-700 space-y-1">
        {visibleFeatures.map(([feature, value], i) => (
          <li key={i} className="flex justify-between">
            <span>{feature}</span>
            <span
              className={
                value === "Yes" ? "text-green-500" : value === "No" ? "text-red-500" : ""
              }
            >
              {value}
            </span>
          </li>
        ))}
      </ul>

      {featureEntries.length > 6 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-orange-600 font-semibold hover:underline"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}

      <button className="mt-auto bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg py-2 shadow hover:from-red-500 hover:to-orange-600 transition-colors">
        Contact Us
      </button>
    </div>
  );
};

// Main Pricing Page
const Pricing = () => {

  return (
    <>
      <Header />
      <PageHero />
      <section className="bg-gradient-to-b from-white via-orange-50 to-white py-16 px-4">
        <h2 className="text-4xl text-center font-extrabold text-orange-500 mb-4">
          Choose the Right Plan
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Detailed pricing and features for every plan
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <PricingCard
              key={idx}
              plan={plan}
              highlight={plan.name === "Expert"}
            />
          ))}
        </div>
      </section>
      <Footer />


    </>
  );
};

export default Pricing;
