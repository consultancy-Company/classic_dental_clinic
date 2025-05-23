import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'  // Import framer-motion
import Link from 'next/link';
import { servicesData } from '@/lib/constants';
interface ServiceListProps {
    isHidden?: boolean;
}

const ServicesList: React.FC<ServiceListProps> = ({
    isHidden
}) => {
    // Array of services data


    return (
        <div className='w-screen md:min-h-[100vh] py-8 bg-[#F9FEFF] '>
            <div className="w-[90%] mx-auto items-center">

                <h1 className="text-3xl md:text-5xl font-heading mt-5  mb-14  text-[#104B82] font-[400] text-center">
                    Tailored treatments just for you
                </h1>
                {/* <p className='text-center font-subheading text-xl md:max-w-2xl mx-auto mt-10 mb-8'>
                    Our services are designed to meet the unique needs of each individual, ensuring that you receive the best
                    possible care.
                </p> */}

                {/* Map over the services array to create service cards */}
                {
                    isHidden ? (
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-center '>
                            {servicesData.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className='w-[340px] lg:w-[400px] mx-auto p-4 hover:bg-white hover:shadow-md rounded-t-[13px] cursor-pointer hover:-translate-y-6 transition-all duration-300 ease-in-out'
                                    initial={{ opacity: 0, y: 50 }}  // Initial position and opacity
                                    animate={{ opacity: 1, y: 0 }}   // Final position and opacity
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.5,   // Sequential animation with step-by-step delay
                                        ease: 'easeOut',
                                    }}  // Staggered entrance animation based on index
                                    viewport={{ once: true }}

                                >
                                    <Image
                                        src={service.imageSrc}
                                        alt={service.alt}
                                        width={380}
                                        height={400}
                                        className='rounded-t-[6px] w-[340px] lg:w-[380px] h-[320px] bg-contain'
                                    />
                                    <h2 className='text-[#104B82] text-2xl font-semibold my-3'>{service.name}</h2>
                                    <p className='text-lg font-subheading mb-6'>{service.description.length > 200 ? `${service.description.substring(0, 200)}...` : service.description}</p>
                                    <Button variant="default" className="h-[70px] px-8 hover:bg-[#53898e] hover:text-white bg-[#F4F6F3] text-black border-2 border-[#53898e] rounded-none text-xl">
                                        <Link href={'/appointment'}>Request Appointment</Link>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-center '>
                            {servicesData.slice(0,6).map((service, index) => (
                                <motion.div
                                    key={index}
                                    className='w-[340px] lg:w-[400px] mx-auto p-4 hover:bg-white hover:shadow-md rounded-t-[13px] cursor-pointer hover:-translate-y-6 transition-all duration-300 ease-in-out'
                                    initial={{ opacity: 0, y: 50 }}  // Initial position and opacity
                                    animate={{ opacity: 1, y: 0 }}   // Final position and opacity
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.5,   // Sequential animation with step-by-step delay
                                        ease: 'easeOut',
                                    }}  // Staggered entrance animation based on index
                                    viewport={{ once: true }}

                                >
                                    <Image
                                        src={service.imageSrc}
                                        alt={service.alt}
                                        width={380}
                                        height={400}
                                        className='rounded-t-[6px] w-[340px] lg:w-[380px] h-[320px] bg-contain'
                                    />
                                    <h2 className='text-[#104B82] text-2xl font-semibold my-3'>{service.name}</h2>
                                    <p className='text-lg font-subheading mb-6'>{service.description.length > 200 ? `${service.description.substring(0, 200)}...` : service.description}</p>
                                    <Button variant="default" className="h-[70px] px-8 hover:bg-[#53898e] hover:text-white bg-[#F4F6F3] text-black border-2 border-[#53898e] rounded-none text-xl">
                                        <Link href={'/appointment'}>Request Appointment</Link>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    )
                }

                {
                    !isHidden && <div className='flex justify-center mt-12 mb-5'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}   // Hover animation for the button
                            whileTap={{ scale: 0.95 }}    // Tap effect
                            viewport={{ once: true }}
                        >
                            <Button className="h-[70px] px-8 hover:bg-[#53898e] hover:text-white bg-[#F4F6F3] text-black border-2 border-[#53898e] rounded-none text-xl">
                                <Link href={"/services"}>View All Services</Link>
                            </Button>
                        </motion.div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ServicesList;
