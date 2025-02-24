import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Button } from '../ui/button'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      {/* Call to Action Section */}
      <div className='w-full py-16 text-white text-center flex flex-col items-center justify-center bg-ca_pattern bg-cover bg-center'>

        <h2 className='text-4xl font-bold mb-4'>Your Smile, Our Priority</h2>
        <p className='text-lg w-[80%] md:w-[50%] mx-auto mb-10'>
          Experience the best dental care with our expert team. Book your appointment today and let us help you achieve a healthy, confident smile!
        </p>
        <Button className="h-[70px] px-8 hover:bg-[#dd9639] bg-[#104B82] rounded-none shadow-md text-xl transition-all duration-300 ease-in-out">
          Request Appointment
        </Button>
      </div>

      {/* Footer Section */}
      <footer className='w-full bg-[#15334e] text-white items-center py-12'>
        <div className='w-[85%] grid md:grid-cols-2 lg:grid-col-4 mx-auto  gap-8'>

          {/* Left Section - Contact Info */}
          <div className='w-full md:w-1/4 space-y-5'>
            <h2 className='text-3xl font-bold'>Classic Dental</h2>
            <p className='text-gray-300'>Providing quality dental care with compassion and expertise.</p>

            {/* Contact Details */}
            <div className='space-y-3'>
              <p className='flex items-center gap-3'>
                <FaMapMarkerAlt className='text-[#dd9639]' /> Addis Ababa, Ethiopia
              </p>
              <p className='flex items-center gap-3'>
                <FaPhoneAlt className='text-[#dd9639]' /> +251 911 123 456
              </p>
              <p className='flex items-center gap-3'>
                <FaEnvelope className='text-[#dd9639]' /> contact@classicdental.com
              </p>
            </div>
          </div>

          {/* Center Left - Services */}
          <div className='w-full md:w-1/4'>
            <h3 className='text-2xl font-semibold mb-4'>Our Services</h3>
            <ul className='space-y-3 text-gray-300'>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>Teeth Whitening</a></li>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>Dental Implants</a></li>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>Root Canal Treatment</a></li>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>Orthodontics</a></li>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>Cosmetic Dentistry</a></li>
            </ul>
          </div>

          {/* Center Right - Quick Links */}
          <div className='w-full md:w-1/4'>
            <h3 className='text-2xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-3 text-gray-300'>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>Home</a></li>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>About Us</a></li>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>Services</a></li>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>Testimonials</a></li>
              <li><a href='#' className='hover:text-[#dd9639] transition-all duration-200'>Contact</a></li>
            </ul>
          </div>

          {/* Right Section - Social Media */}
          <div className='w-full md:w-1/4'>
            <h3 className='text-2xl font-semibold mb-4'>Follow Us</h3>
            <div className='flex gap-4'>
              <a href="#" className='p-3 bg-[#dd9639] rounded-full hover:bg-white hover:text-[#104B82] transition-all duration-300 ease-in-out'>
                <FaFacebookF size={20} />
              </a>
              <a href="#" className='p-3 bg-[#dd9639] rounded-full hover:bg-white hover:text-[#104B82] transition-all duration-300 ease-in-out'>
                <FaInstagram size={20} />
              </a>
              <a href="#" className='p-3 bg-[#dd9639] rounded-full hover:bg-white hover:text-[#104B82] transition-all duration-300 ease-in-out'>
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section - Copyright */}
        <div className='text-center text-gray-300 mt-8 border-t border-gray-500 pt-4'>
          © {new Date().getFullYear()} Classic Dental. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
