'use client'

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image';
import { motion } from 'framer-motion';

interface YourDentistProps {
    isHidden?: boolean;
}

const YourDentist : React.FC<YourDentistProps> = ({
    isHidden
}) => {
    return (
        <div className='w-full bg-[#Fff] min-h-[85vh] pt-10 pb-20 overflow-x-hidden flex items-center'>
            <motion.div 
                className='md:w-[80%] mx-auto my-auto  px-5 flex flex-col-reverse lg:flex-row justify-between items-center'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Left Content Section */}
                <motion.div 
                    className='lg:w-[50%] '
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className='text-[68px] lg:text-[100px] font-[800] text-[#d7e0e9] justify-center  flex lg:flex-col'>
                        Your <span className='lg:-mt-[70px]'>Dentist</span> 
                    </p>
                    <h1 className='text-3xl md:text-5xl  lg:-mt-14 -mt-9 text-[#104B82] font-semibold text-center md:text-start'>Dr. Abel Mekonn</h1>
                    <p className='font-heading text-[16px] md:text-[20px] mt-8 w-full'>
                        Dr. Abel is passionate about providing patient-focused care. He offers the full scope of oral healthcare treatments here in our local dental office. From routine care to surgical treatments and cosmetic touch-ups, he places you in control of every decision about your smile.
                    </p>

                    {/* Animated Button */}
                    {
                        !isHidden && 
                        <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="default" className=' w-fit rounded-none shadow-md text-xl px-8 py-8 border-none mt-10 flex'>
                            About Us
                        </Button>
                    </motion.div>
                    }
                </motion.div>

                {/* Right Image Section */}
                <motion.div 
                    className='relative'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Image 
                        src={'/images/d2.jpg'}
                        alt="Your Dentist"
                        width={500}
                        height={500}
                        className=''
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default YourDentist;
