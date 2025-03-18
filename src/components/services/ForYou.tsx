import React from 'react';
import { CheckCircle, Clock, Shield, Smile } from "lucide-react";
import { CLINIC_NAME } from '@/lib/constants';

const ForYou = () => {
  const items = [
    {
      title: "Transparent Pricing",
      description: `At ${CLINIC_NAME} Dental, the cost of cosmetic dentistry treatment is clear and affordable.`,
      icon: <CheckCircle size={40} className="text-blue-600" />,
    },
    {
      title: "A Dental Spa",
      description: "Essential oils, a warm compress — time to relax and have some fun.",
      icon: <Smile size={40} className="text-blue-600" />,
    },
    {
      title: "Efficient Care",
      description: "We know you’re busy. Your time with us will be efficient and well worth it.",
      icon: <Clock size={40} className="text-blue-600" />,
    },
    {
      title: "Safety First",
      description: "Medical-grade sterilization, enhanced PPE, and more to keep you safe.",
      icon: <Shield size={40} className="text-blue-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">This part is all for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mt-6 text-gray-800">{item.title}</h3>
              <p className="text-lg text-gray-600 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForYou;
