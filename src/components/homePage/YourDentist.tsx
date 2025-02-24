import React from 'react'
import { Button } from '../ui/button'
import { MdOutlineMan4 } from "react-icons/md";
import Image from 'next/image';
import { motion } from 'framer-motion';

const YourDentist = () => {
    return (
        <div className='w-full bg-[#Fff] min-h-[60vh] pt-10 pb-20'>
            <motion.div 
                className='w-[80%] mx-auto flex flex-col sm:flex-col-reverse lg:flex-row justify-between items-center'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Left Content Section */}
                <motion.div 
                    className='lg:w-[50%]'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className='text-[80px] md:text-[100px] font-[800] text-[#d7e0e9] flex md:flex-col'>
                        Your <span className='md:-mt-[70px]'>Dentist</span> 
                    </p>
                    <h1 className='text-5xl  md:-mt-14 -mt-10 text-[#104B82] font-semibold'>Dr. Abel Mekonn</h1>
                    <p className='font-heading text-[16px] md:text-[20px] mt-8'>
                        Dr. Abel is passionate about providing patient-focused care. He offers the full scope of oral healthcare treatments here in our local dental office. From routine care to surgical treatments and cosmetic touch-ups, he places you in control of every decision about your smile.
                    </p>

                    {/* Animated Button */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button className='bg-[#104B82] w-fit hover:bg-[#dd9639] rounded-none shadow-md text-xl px-8 py-8 border-none mt-10 flex'>
                            <MdOutlineMan4 className='text-2xl mr-2'/>
                            About Us
                        </Button>
                    </motion.div>
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
                        className='border-2 rounded-lg'
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default YourDentist;
