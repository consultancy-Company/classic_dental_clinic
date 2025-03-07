'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { motion } from 'framer-motion'; // Import Framer Motion

const Hero = () => {
    return (
      <div
        className="h-screen md:h-[100vh] bg-cover bg-center bg-no-repeat relative flex items-center text-white"
        style={{
          backgroundImage:
            "url('/images/jose-vazquez-4SUyx4KQ5Ik-unsplash.jpg')",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 w-full flex flex-col justify-center  h-full">
          <div className="w-[90%] md:w-[80%] mx-auto  md:gap-5 flex flex-col ">
            {/* Animated Title */}
            <motion.h1
              className="text-[20px] md:text-[30px] font-subheading font-[400] leading-tight mt-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your Trusted Classic Specialty
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
              className="text-3xl md:text-4xl lg:text-[57px] mb-10 font-heading max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="block md:mb-4 mb-2">Experience top-quality</span>
              <span className="block">dental care with a gentle touch.</span>
            </motion.p>

            {/* Animated Button */}
            <motion.div
              className="w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Button className="" variant="classic_secondary" size="2xl">
                Request Appointment
              </Button>
            </motion.div>

            {/* Animated Phone and Location */}
            <motion.div
              className="mt-4 w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <h4 className="flex items-center gap-3 text-lg font-medium hover:text-[#dd9639] w-fit mb-4">
                <div className="bg-[#104B82] h-[40px] w-[40px] hover:text-[#dd9639] flex items-center justify-center rounded-full">
                  <FaPhoneVolume size={20} />
                </div>
                <a
                  href="tel:+251909696945"
                  className="transition-colors duration-300"
                >
                  (+251) 909696945
                </a>
              </h4>
              <h4 className="flex items-center gap-3 text-lg font-medium hover:text-[#dd9639] w-fit">
                <div className="bg-[#104B82] h-[40px] w-[40px] hover:text-[#dd9639] flex items-center justify-center rounded-full">
                  <FaPhoneVolume size={20} />
                </div>
                <a
                  href="tel:+251909696946"
                  className="transition-colors duration-300"
                >
                  (+251) 909696946
                </a>
              </h4>

              <h4 className="mt-4 flex items-center gap-3 text-lg font-medium hover:text-[#dd9639] w-fit">
                <div className="bg-[#104B82] h-[40px] w-[40px] flex items-center justify-center rounded-full">
                  <FaLocationDot size={20} />
                </div>
                <p>Bisrate Gebrale , Adot cinema ,Adiss Ababa</p>
              </h4>
            </motion.div>
          </div>
        </div>
      </div>
    );
}

export default Hero;
