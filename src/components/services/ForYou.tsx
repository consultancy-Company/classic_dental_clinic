import React from 'react';
// import Image from 'next/image';
import { CheckCircle, Clock, Shield, Smile } from "lucide-react"; 
import { CLINIC_NAME } from '@/lib/constants';

const ForYou = () => {
  const items = [
    {
      title: "Transparent Pricing",
      description:
        `At ${CLINIC_NAME} Dental, the cost of cosmetic dentistry treatment is clear and affordable.`,
      icon: <CheckCircle size={50} className="text-classic_blue" />,
      image: "/path/to/transparent-pricing.jpg",
    },
    {
      title: "A Dental Spa",
      description:
        "Essential oils, a warm compress — time to relax and have some fun.",
      icon: <Smile size={50} className="text-classic_blue" />,
      image: "/path/to/dental-spa.jpg",
    },
    {
      title: "Efficient Care",
      description:
        "We know you’re busy. Your time with us will be efficient and well worth it.",
      icon: <Clock size={50} className="text-classic_blue" />,
      image: "/path/to/efficient-care.jpg",
    },
    {
      title: "Safety First",
      description:
        "Medical-grade sterilization, enhanced PPE, and more to keep you safe.",
      icon: <Shield size={50} className="text-classic_blue" />,
      image: "/path/to/safety-first.jpg",
    },
  ];

  return (
    <div className="bg-classic_yellow">
      <div className="max-w-7xl mx-auto py-32 px-4 ">
        <h2 className="text-white text-5xl font-bold text-center mb-12">
          This part is all for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4  border rounded-lg shadow-md"
            >
              {item.icon}
              <h3 className="text-3xl font-semibold mt-10 text-white">
                {item.title}
              </h3>
              <p className=" text-xl mt-3 text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForYou;