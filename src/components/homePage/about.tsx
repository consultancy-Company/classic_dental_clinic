import Image from 'next/image'
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div
            className='w-full md:h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center py-8'
            style={{ backgroundImage: "url('/images/image0_0.jpg')" }}
        >
            <motion.div 
                className='w-[90%] lg:w-[80%] mx-auto md:flex md:flex-wrap lg:flex-nowrap justify-between items-center border-2 rounded-3xl px-8 py-10'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} // Trigger the animation once when it's in view
            >
                {/* Left Content Section */}
                <motion.div 
                    className='md:w-[50%] text-white'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className='md:text-4xl text-3xl font-extrabold mb-5'>
                        🦷 World-Class Specialists | Painless Treatments | Personalized Care
                    </h2>
                    <p className='md:text-lg text-base leading-relaxed'>
                        We welcome patients of all ages, from <strong>curious 3-year-olds</strong> to <strong>wise seniors</strong>.
                        Our expert team is committed to <strong>exceptional care, lifelong relationships, and stress-free experiences</strong>
                        in a warm, welcoming environment.
                    </p>

                    {/* Key Benefits List with Icons */}
                    <motion.ul 
                        className='mt-6 space-y-3 text-base'
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <li className='flex items-center'>
                            <IoMdCheckmark className='text-[#dd9639] mr-2' size={30} /> <strong>Transparent & Honest Pricing</strong>
                        </li>
                        <li className='flex items-center'>
                            <IoMdCheckmark className='text-[#dd9639] mr-2' size={30} /> <strong>Unmatched Warranty</strong>
                        </li>
                        <li className='flex items-center'>
                            <IoMdCheckmark className='text-[#dd9639] mr-2' size={30} /> <strong>FREE Lifetime Whitening!</strong>
                        </li>
                    </motion.ul>

                    <motion.p 
                        className='mt-6 md:text-sm flex items-center border-l-4 border-[#dd9639] px-4 italic text-lg'
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        &#x201F; Your Comfort, Our Priority! From painless treatments to cutting-edge technology, we ensure a gentle and satisfying dental experience. &#x201F;
                    </motion.p>
                </motion.div>

                {/* Right Image Section */}
                <motion.div 
                    className='flex-shrink-0 mt-6 lg:mt-0 md:w-[45%] self-start h-full relative'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={"/images/atikah-akhtar-XJptUS8nbhs-unsplash.jpg"}
                        alt='Expert Dentist'
                        width={300}
                        height={300}
                        className='shadow-lg w-full h-full rounded-lg'
                        priority
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About;
