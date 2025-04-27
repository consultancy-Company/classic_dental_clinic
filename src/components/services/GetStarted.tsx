"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaCalendarAlt, FaTooth } from 'react-icons/fa';


const data = [
  { image: '/images/services/stage1.png', title:"Make Appointment" , description: 'Schedule an appointment ', icon: <FaCalendarAlt /> },
  { image: '/images/services/stage2.png', title: "Expert Dental Care", description: 'Speak with a dentist about your goals', icon:<FaUserDoctor /> },
  { image: '/images/services/stage3.png', title: "Radiate Confidence", description: 'Create a plan and start your smile journey', icon:<FaTooth />}
];

const GetStarted = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#F4F6F3] to-white">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" mb-16"
        >
          <p className="text-base text-gray-500 mb-4">How It Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 w-[50%]">Your Journey to a Healthy Smile Starts Here</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative "
            >
              <div className=" text-4xl w-[100px] h-[100px] flex items-center justify-center bg-primary text-white">{item.icon}</div>
              <div className="">
                <p className="text-2xl font-semibold text-gray-800 mt-2">
                  {item.title}
                </p>
                <p className="text-base text-gray-600 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/appointment">
            <Button
              variant="default"
              className="px-8 py-6 text-lg font-semibold rounded-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              Request Appointment
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;