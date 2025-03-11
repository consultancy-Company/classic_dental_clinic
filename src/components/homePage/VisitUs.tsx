import React from 'react'
import { FaMapMarked, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa'


const VisitUs = () => {
  return (
    <div className='w-full py-32 flex items-center'>
      <div className='w-[90%] mx-auto h-full flex justify-between my-auto pt-10'>

        {/* Left Section - Contact Information */}
        <div className='lg:w-[40%]'>
          <div>
            <h4 className='text-lg text-[#E5B80B] uppercase font-bold mb-3'>
              Visit us
            </h4>
            <h1 className='text-4xl font-semibold text-[#104B82]'>
              We can’t wait to meet you!
            </h1>
          </div>

          {/* Contact Details */}
          <div className='mt-6 text-lg text-gray-700 space-y-6'>

            {/* Address */}
            <div className='flex gap-3'>
              <div className="h-[35px] w-[35px] text-[#104B82] hover:text-[#dd9639] flex items-center justify-center">
                <FaMapMarked size={30} />
              </div>
              <div>
                <h4 className='font-heading font-semibold text-2xl'>Address:</h4>
                Classic Specialty Dental Center, <br />Bisrate Gebrale , Adot cinema ,Addis Ababa, Ethiopia
              </div>
            </div>

            {/* Phone */}
            <div className='flex gap-3'>
              <div className="h-[35px] w-[35px] text-[#104B82] hover:text-[#dd9639] flex items-center justify-center">
                <FaPhoneAlt size={25} />
              </div>
              <div>
                <h4 className='font-heading font-semibold text-2xl'>Phone:</h4>
                +251 911 123 456
              </div>
            </div>

            {/* Working Hours */}
            <div className='flex gap-3'>
              <div className="h-[35px] w-[35px] text-[#104B82] hover:text-[#dd9639] flex items-center justify-center">
                <FaClock size={25} />
              </div>
              <div>
                <h4 className='font-heading font-semibold text-2xl'>Working Hours:</h4>
                Mon - Sun: 2:00 AM - 12:00 PM
              </div>
            </div>

            {/* Email */}
            <div className='flex gap-3'>
              <div className="h-[35px] w-[35px] text-[#104B82] hover:text-[#dd9639] flex items-center justify-center">
                <FaEnvelope size={25} />
              </div>
              <div>
                <h4 className='font-heading font-semibold text-2xl'>Email:</h4>
                ethioclassic24@gmail.com
              </div>
            </div>

          </div>
        </div>

        {/* Right Section - Google Map */}
        <div className=' md:block hidden w-[55%] h-[400px] rounded-xl overflow-hidden shadow-lg self-center'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.7788681785023!2d38.7246556!3d8.9924848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b87464f970d1b%3A0x2258c2817028a1b7!2sClassic%20Specialty%20Dental%20Center!5e0!3m2!1sen!2set!4v1740397029906!5m2!1sen!2set"
            className='w-full h-full border-0'
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  )
}

export default VisitUs