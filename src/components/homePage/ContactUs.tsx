import React from 'react'
import { Button } from '../ui/button'
import { IoMdCheckmark } from 'react-icons/io'
import { motion } from 'framer-motion'  // Import framer-motion

type Props = {}

const ContactUs = (props: Props) => {
    return (
        <div className='min-h-[84vh] w-full counters bg-cover bg-fixed bg-no-repeat py-8 flex flex-col justify-center '
            style={{
                backgroundImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('/images/jose-vazquez-4SUyx4KQ5Ik-unsplash.jpg')",
            }}
        >
            <div className='w-[80%] mx-auto my-auto flex items-end justify-end px-3 h-full'>
                <motion.div
                    className='bg-[#F4F6F3] p-16 flex flex-col gap-4 rounded-tl-[40px] rounded-br-[40px]'
                    initial={{ opacity: 0, y: 50 }} // Initial state: off-screen and invisible
                    animate={{ opacity: 1, y: 0 }} // Final state: visible and in place
                    transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition effect
                    viewport={{ once: true }}

                >
                    <h4 className='text-lg'>Feel free to reach out</h4>
                    <h1 className='text-5xl text-[#104B82] mb-6'>Making Dentistry Affordable</h1>
                    <div>
                        <motion.p
                            className='flex text-lg items-center text-gray-700'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <IoMdCheckmark className='mr-2' size={20} /> We accept most insurance plans
                        </motion.p>
                        <motion.p
                            className='flex text-lg items-center text-gray-700'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <IoMdCheckmark className='mr-2' size={20} /> We offer affordable rates for all patients
                        </motion.p>
                        <motion.p
                            className='flex text-lg items-center text-gray-700'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}

                        >
                            <IoMdCheckmark className='mr-2' size={20} /> No hidden charges, transparent pricing
                        </motion.p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }} // Add scale effect when hovered
                        whileTap={{ scale: 0.95 }}  // Reduce size on tap
                    >
                        <Button className="h-[50px] w-fit mt-5 px-8 hover:bg-[#dd9639] bg-[#104B82] rounded-none shadow-md text-xl">
                            Request Appointment
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default ContactUs
