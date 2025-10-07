import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Location = () => {
    const navigate = useNavigate()
  return (
    <>
  {/* Location & Connect */}
  <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
  <div className="rounded-2xl overflow-hidden border border-orange-100 shadow-lg bg-white">
    <iframe
      title="Zeniushub Location"
      src="https://www.google.com/maps?q=D-153,+Hanuman+Nagar,+Vaishali+Nagar,+Jaipur&output=embed"
      className="w-full h-72 md:h-96"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  <div className="flex flex-col gap-4">
    <h3 className="text-xl md:text-2xl font-extrabold text-[#ff6a21]">Visit or Connect with Us</h3>
    <p className="text-gray-700">We’d love to understand your goals and give you a tailored walkthrough.</p>
    <div className="rounded-2xl border border-orange-100 bg-white shadow p-6">
      <div className="text-sm text-gray-500">Address</div>
      <div className="font-semibold">D-153, Hanuman Nagar, Amerpali Circle, Vaishali Nagar, Jaipur, Rajasthan, India</div>
      <div className="mt-3 text-sm text-gray-500">Call</div>
      <a className="text-[#ff6a21] font-semibold" href="tel:+919257479576">+91 92574 79576</a>
      <div className="mt-3 text-sm text-gray-500">Email</div>
      <a className="text-[#ff6a21] font-semibold" href="mailto:info@zeniushub.in">info@zeniushub.in</a>
      <div className="mt-5 flex gap-3">
        <Button text='Contact Us' onClick={() => navigate('/Contact-us')}/>

      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Location