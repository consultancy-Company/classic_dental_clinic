'use client'
import React from 'react';
import { Button } from './ui/button';
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title?: string;
    subtitle?: React.ReactNode; // Allow both text and JSX elements
    buttonText?: string;
    backgroundImage?: string;
    phoneNumbers?: string[];
    location?: string;
}


const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    buttonText,
    backgroundImage,
    phoneNumbers = [],
    location
}) => {
    return (
        <div
            className="h-screen md:h-[100vh] bg-cover bg-center bg-no-repeat relative flex items-center text-white"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Hero Content */}
            <div className="relative z-10 px-6 w-full flex flex-col justify-center h-full">
                <div className="w-[90%] md:w-[80%] mx-auto md:gap-5 flex flex-col justify-center items-center">
                    {/* Animated Title */}
                    <motion.h1
                        className="text-[20px] md:text-[30px] font-subheading font-[400] leading-tight mt-10"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {title}
                    </motion.h1>
                    
                    {/* Animated Subtitle */}
                    <motion.p
                        className="text-3xl md:text-4xl lg:text-[57px] mb-10 font-heading max-w-3xl leading-relaxed"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {subtitle}
                    </motion.p>

                    {/* Animated Button */}
                    <motion.div
                        className="w-fit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <Button className="h-[70px] px-8 hover:bg-[#dd9639] bg-[#104B82] rounded-none shadow-md text-xl">
                            {buttonText}
                        </Button>
                    </motion.div>

                    {/* Animated Phone and Location */}
                    <motion.div
                        className="mt-4 w-fit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        {phoneNumbers.map((phone, index) => (
                            <h4 key={index} className="flex items-center gap-3 text-lg font-medium hover:text-[#dd9639] w-fit mb-4">
                                <div className="bg-[#104B82] h-[40px] w-[40px] hover:text-[#dd9639] flex items-center justify-center rounded-full">
                                    <FaPhoneVolume size={20} />
                                </div>
                                <a href={`tel:${phone}`} className="transition-colors duration-300">
                                    {phone}
                                </a>
                            </h4>
                        ))}

                        {location && (
                            <h4 className="mt-4 flex items-center gap-3 text-lg font-medium hover:text-[#dd9639] w-fit">
                                <div className="bg-[#104B82] h-[40px] w-[40px] flex items-center justify-center rounded-full">
                                    <FaLocationDot size={20} />
                                </div>
                                <p>{location}</p>
                            </h4>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
