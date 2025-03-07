"use client"

import React from "react";
import { Button } from "../components/ui/button"; // Import your Button component from Shadcn
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import {motion} from "framer-motion";
import Link from "next/link";

interface BannerProps {
  image?: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  phoneNumber?: string; // Optional
  href?: string;
}

const Banner: React.FC<BannerProps> = ({
  image,
  title,
  buttonText,
  phoneNumber,
  href
}) => {
  
  const defaultImage = '/images/jose-vazquez-4SUyx4KQ5Ik-unsplash.jpg'
 
  return (
    <div
      className="relative flex flex-col justify-center  bg-cover bg-center h-[80vh]"
      style={{ backgroundImage: `url(${image || defaultImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 px-6 w-full flex flex-col justify-center text-slate-100 ">
        <div className="w-[90%] md:w-[80%] mx-auto  md:gap-5 flex flex-col ">
          {/* Animated Title */}
          <motion.h1
            className=" text-md font-subheading font-[400] mt-10 text-muted"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            You Trusted Classic Specialty
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="text-3xl md:text-4xl lg:text-[57px] my-10 font-heading max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="block md:mb-4 mb-2 leading-tight text-wrap">
              {title}
            </span>
          </motion.p>

          {/* Animated Button */}
          <motion.div
            className="w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Link href={href || "/"}>
            <Button className="" variant="classic_secondary" size="2xl">
              {buttonText}
            </Button>
            </Link>
          </motion.div>

          {/* Animated Phone and Location */}
          <motion.div
            className="mt-4 w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <h4 className="flex items-center gap-3 text-lg font-medium hover:text-[#dd9639] w-fit mb-4">
              <div className="bg-[#104B82] h-[40px] w-[40px] hover:text-[#dd9639] flex items-center justify-center rounded-full transform transition-all duration-500 ease-in-out">
                <FaPhoneVolume size={20} />
              </div>
              <a
                href="tel:+251909696945"
                className="transition-colors duration-300"
              >
                {phoneNumber}
              </a>
            </h4>

            <h4 className="mt-4 flex items-center gap-3 text-lg font-medium hover:text-[#dd9639] w-fit">
              <div className="bg-[#104B82] h-[40px] w-[40px] flex items-center justify-center rounded-full transform transition-all duration-500 ease-in-out">
                <FaLocationDot size={20} />
              </div>
              <p>Bisrate Gebrale , Adot cinema ,Adiss Ababa</p>
            </h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
