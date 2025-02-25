import React from 'react'
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { IoStarSharp } from "react-icons/io5";
import { motion } from "framer-motion";


const Testimony = () => {
    return (
        <div className='w-full md:min-h-[100vh] flex py-8 bg-[#Fff] items-center'>
            <div className='w-[90%] mx-auto h-full lg:flex justify-between my-auto pt-10'>
                
                {/* Left Section Animation */}
                <motion.div 
                    className='lg:w-[38%] md:pt-12'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className='flex gap-3 text-[#E5B80B] mb-4 md:mb-8'>
                        <IoStarSharp size={30} /><IoStarSharp size={30} /><IoStarSharp size={30} /><IoStarSharp size={30} /><IoStarSharp size={30} />
                    </p>

                    <p className='text-3xl md:text-5xl text-[#104B82] font-subheading'>
                        Kind words from our patients
                    </p>
                    <p className='text-gray-400 mt-6 md:mt-12'>
                        <BiSolidQuoteAltRight size={50} />
                    </p>
                    <p className='font-heading text-[20px] mb-7'>
                        Testimonials reflect individual experiences and may not represent all patients.
                    </p>
                </motion.div>

                {/* Right Section Animation */}
                <motion.div 
                    className='flex flex-col lg:w-[55%] justify-between gap-8'
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className=' flex flex-col md:flex-row  items-center md:items-start gap-12'>
                        <motion.div
                            className='px-7 py-14 flex-col flex gap-8 text-white  w-[350px] md:w-[410px] h-fit'
                            style={{ backgroundImage: "url('/images/image0_0.jpg')" }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                            }}
                        >
                            <p className='font-heading text-[20px]'>
                                Unlike other Greenwood Village dentists, Village Dental takes you where you’re at rather than chastising or shaming.
                                I can’t recommend them highly enough. You will be well cared for!
                                I can’t recommend them highly enough. You will be well cared for!
                            </p>
                            <hr />
                            <p className='font-subheading text-lg'>- Emily R.</p>
                        </motion.div>

                        <motion.div
                            className='px-7 py-14 flex-col flex text-white gap-8  w-[350px] md:w-[410px] h-fit'
                            style={{ backgroundImage: "url('/images/image1_0.jpg')" }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                            }}
                        >
                            <p className='font-heading text-[20px]'>
                                Unlike other Greenwood Village dentists, Village Dental takes you where you’re at rather than chastising or shaming.
                                I can’t recommend them highly enough. You will be well cared for!
                            </p>
                            <hr />
                            <p className='font-subheading text-lg'>- Emily R.</p>
                        </motion.div>
                    </div>

                    <motion.div
                        className='px-7 py-14 text-white self-center mx-auto flex-col flex gap-8 w-[350px] md:w-[410px]'
                        style={{ backgroundImage: "url('/images/image0_0.jpg')" }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        }}
                    >
                        <p className='font-heading text-[20px]'>
                            Unlike other Greenwood Village dentists, Village Dental takes you where you’re at rather than chastising or shaming.
                            I can’t recommend them highly enough. You will be well cared for!
                        </p>
                        <hr />
                        <p className='font-subheading text-lg'>- Emily R.</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Testimony;
