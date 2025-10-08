import React, { useState } from 'react';
import PageHero from '../component/PageHero';
import { ICONS } from '../component/Icons';
import Button from '../component/Button';
import { z } from 'zod';
import { toast } from 'react-toastify';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Contactus = () => {
  const schema = z.object({
    name: z.string().min(2, 'Please enter your full name'),
    email: z.string().email('Enter a valid email address'),
    contactNumber: z.string().regex(/^\d{10,15}$/, 'Enter 10-15 digit number'),
    instituteName: z.string().min(2, 'Institute name is required'),
    message: z.string().max(1000).optional().or(z.literal('')),
  });

  const [values, setValues] = useState({
    name: '',
    email: '',
    contactNumber: '',
    instituteName: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const contactFields = [
    { label: 'Full Name', type: 'text', placeholder: 'Enter your full name', id: 'name', required: true },
    { label: 'Email Address', type: 'email', placeholder: 'your.email@example.com', id: 'email', required: true },
    { label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', id: 'contactNumber', required: true },
    { label: 'Institution Name', type: 'text', placeholder: 'Your school/college name', id: 'instituteName', required: true },
  ];

  const businessHours = [
    { day: 'Monday - Sunday', time: '24/7 Available' },
    { day: 'Emergency Support', time: 'Always Open' },
    { day: 'Online Chat', time: 'Round the Clock' }
  ];

  const update = (e) => {
    const { name, value } = e.target;
    if (name === 'contactNumber') {
      const onlyDigits = value.replace(/\D/g, '').slice(0, 15);
      setValues((v) => ({ ...v, contactNumber: onlyDigits }));
      return;
    }
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((iss) => {
        fieldErrors[iss.path[0]] = iss.message;
      });
      setErrors(fieldErrors);
      toast.error('Please fix the highlighted fields');
      return;
    }
    toast.success('Thanks! We will contact you shortly.');
    setValues({ name: '', email: '', contactNumber: '', instituteName: '', message: '' });
    setErrors({});
  };

  return (
    <>
      <Header />
      <PageHero />

      <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-3 sm:mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Fill out the form below and our team will get back to you within 24 hours
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactFields.map((field, i) => (
                  <div key={i} className={field.id === 'message' ? 'sm:col-span-2' : ''}>
                    <label htmlFor={field.id} className="block mb-2 font-medium text-gray-700 text-sm sm:text-base">
                      {field.label} *
                    </label>
                    <input
                      name={field.id}
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={values[field.id]}
                      onChange={update}
                      inputMode={field.id === 'contactNumber' ? 'numeric' : undefined}
                      pattern={field.id === 'contactNumber' ? "[0-9]*" : undefined}
                      className="w-full rounded-lg border border-orange-200 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors bg-white"
                    />
                    {errors[field.id] && (
                      <div className="mt-1 text-xs sm:text-sm text-red-600">{errors[field.id]}</div>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700 text-sm sm:text-base">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your school's needs, number of students, current challenges, or any specific requirements..."
                  value={values.message}
                  onChange={update}
                  className="w-full rounded-lg border border-orange-200 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors resize-none bg-white"
                />
                {errors.message && (
                  <div className="mt-1 text-xs sm:text-sm text-red-600">{errors.message}</div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
                <p className="text-[9px] sm:text-xs text-gray-500">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
                <Button
                  type="submit"
                  text="Send Message"
                  className="py-2 sm:py-2.5 px-3 sm:px-5 text-[11px] sm:text-sm"
                />
              </div>

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">

            {/* Location */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-orange-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-lg bg-orange-500 text-white flex-shrink-0">
                  <ICONS.MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-orange-600 text-base sm:text-lg mb-2">Visit Our Office</h4>
                  <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
                    D-153, Hanuman Nagar, Amerpali Circle,<br />
                    Vaishali Nagar, Jaipur, Rajasthan 302021
                  </p>
                  <a
                    href="https://maps.google.com/?q=D-153,+Hanuman+Nagar,+Amerpali+Circle,+Vaishali+Nagar,+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline inline-flex items-center"
                  >
                    Get Directions
                    <ICONS.ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>



            {/* 24/7 Support */}
            <div className="bg-orange-500 text-white rounded-2xl shadow-lg p-4 sm:p-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-lg bg-white/20 flex-shrink-0">
                  <ICONS.Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg mb-2">Always Here to Help</h4>
                  <p className="text-orange-100 leading-relaxed mb-3 text-sm sm:text-base">
                    Our support team is available round the clock for all customers.
                    Get instant help whenever you need it.
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:support@zeniushub.in"
                      className="text-white hover:text-orange-200 font-medium text-sm hover:underline inline-flex items-center"
                    >
                      <ICONS.mail className="w-4 h-4 mr-2" />
                      support@zeniushub.in
                    </a>
                    <a
                      href="tel:+919257479576"
                      className="text-white hover:text-orange-200 font-medium text-sm hover:underline inline-flex items-center"
                    >
                      <ICONS.phone className="w-4 h-4 mr-2" />
                      +91 92574 79576
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100">
              <iframe
                title="Zeniushub Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.140618983433!2d75.80071021503378!3d26.93442898313193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6ff4c13d81f%3A0xf0d7413e204513c5!2sD-153%2C%20Hanuman%20Nagar%2C%20Amerpali%20Circle%2C%20Vaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1696656456789!5m2!1sen!2sin"
                width="100%"
                height="250"
                className="border-0 sm:h-80"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
