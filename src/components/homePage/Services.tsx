import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'  // Import framer-motion

type Props = {}

const Services = (props: Props) => {
    // Array of services data
    const services = [
        {
            title: 'Surgical',
            description: 'Our surgical services are designed to meet the unique needs of each individual, ensuring that you receive the best possible care.',
            imageSrc: '/images/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite (1).jpg',
            alt: 'Surgical Service Image'
        },
        {
            title: 'Cosmetic',
            description: 'Enhance your smile with cosmetic dentistry treatments such as teeth whitening, veneers, and more.',
            imageSrc: '/images/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite (1).jpg',
            alt: 'Cosmetic Dentistry Image'
        },
        {
            title: 'Orthodontics',
            description: 'Get the smile you’ve always wanted with orthodontic treatments like braces and Invisalign.',
            imageSrc: '/images/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite (1).jpg',
            alt: 'Orthodontics Image'
        },
        {
            title: 'Pediatric Dentistry',
            description: 'We offer gentle and caring dental services for children to ensure they develop healthy smiles from an early age.',
            imageSrc: '/images/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite (1).jpg',
            alt: 'Pediatric Dentistry Image'
        },
        {
            title: 'Preventive Care',
            description: 'We provide preventive services such as regular checkups, cleanings, and x-rays to keep your teeth and gums healthy.',
            imageSrc: '/images/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite (1).jpg',
            alt: 'Preventive Care Image'
        },
    ];

    return (
        <div className='w-full md:min-h-[100vh] py-8 bg-[#F4F6F3]'>
            <div className="w-[90%] mx-auto items-center">
                <p className='text-[100px] font-[800] text-[#d7e0e9] text-center'>
                    Services
                </p>
                <h1 className="text-5xl font-heading -mt-14 text-[#104B82] font-[400] text-center">
                    Tailored treatments just for you
                </h1>
                <p className='text-center font-subheading text-xl md:max-w-2xl mx-auto mt-10 mb-8'>
                    Our services are designed to meet the unique needs of each individual, ensuring that you receive the best
                    possible care.
                </p>

                {/* Map over the services array to create service cards */}
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className='w-[400px] p-4 hover:bg-white hover:shadow-lg rounded-t-[33px] cursor-pointer hover:-translate-y-5 transition-all duration-300 ease-in-out'
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
                                className='rounded-t-[33px] h-[380px]'
                            />
                            <h2 className='text-[#104B82] text-2xl font-semibold my-3'>{service.title}</h2>
                            <p className='text-lg font-subheading mb-6'>{service.description}</p>
                            <Button className="h-[70px] px-8 hover:bg-[#dd9639] hover:text-white bg-[#F4F6F3] text-black border-2 border-[#dd9639] rounded-none text-xl">
                                Request Appointment
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className='flex justify-center mt-8 mb-5'>
                    <motion.div
                        whileHover={{ scale: 1.05 }}   // Hover animation for the button
                        whileTap={{ scale: 0.95 }}    // Tap effect
                        viewport={{ once: true }}
                    >
                        <Button className="h-[70px] px-8 hover:bg-[#dd9639] hover:text-white bg-[#F4F6F3] text-black border-2 border-[#dd9639] rounded-none text-xl">
                            View All Services
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Services;
