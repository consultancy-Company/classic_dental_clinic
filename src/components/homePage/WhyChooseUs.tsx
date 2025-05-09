'use client'

import React from 'react';
import { Button } from '../ui/button';
import { FaCheckCircle } from "react-icons/fa";
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {

    return (
        <div className='w-full bg-[#F9FEFF] min-h-[60vh] pt-10 pb-20 overflow-x-hidden'>
            <motion.div
                className='w-[90%]  mx-auto flex flex-col sm:flex-col lg:flex-row justify-between items-center'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Left Content Section */}
                <motion.div
                    className='relative'
                    initial={{ opacity: 0, x: 50}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={'/images/atikah-akhtar-XJptUS8nbhs-unsplash.jpg'} // Change to an appropriate image for this section
                        alt="Why Choose Us"
                        width={500}
                        height={500}
                        className='border-2 rounded-lg inverted-radius'
                    />
                </motion.div>

                {/* Right Image Section */}
                <motion.div
                    className='lg:w-[50%]'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-4xl md:text-5xl font-semibold text-[#104B82] mt-10'>Why Classic Specialty</h2>
                    <p className='font-heading text-[16px] md:text-[20px] mt-8'>
                        At Classic Dental, we understand the importance of a confident smile, and we are committed to providing exceptional dental care. Here are a few reasons why you should choose us:
                    </p>

                    {/* Key Reasons List */}
                    <div className='mt-8 space-y-6'>
                        <div className='flex items-center'>
                            <FaCheckCircle className='text-[#dd9639] text-2xl mr-3' />
                            <p className='text-lg font-subheading'>Expert & Caring Team</p>
                        </div>
                        <div className='flex items-center'>
                            <FaCheckCircle className='text-[#dd9639] text-2xl mr-3' />
                            <p className='text-lg font-subheading'>State-of-the-Art Equipment</p>
                        </div>
                        <div className='flex items-center'>
                            <FaCheckCircle className='text-[#dd9639] text-2xl mr-3' />
                            <p className='text-lg font-subheading'>Comprehensive Treatment Options</p>
                        </div>
                        <div className='flex items-center'>
                            <FaCheckCircle className='text-[#dd9639] text-2xl mr-3' />
                            <p className='text-lg font-subheading'>Affordable Care Plans</p>
                        </div>
                    </div>

                    {/* Animated Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="default" className=' w-fit rounded-none shadow-md text-xl px-8 py-8 border-none mt-10 flex'>
                            Book now 
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default WhyChooseUs;
