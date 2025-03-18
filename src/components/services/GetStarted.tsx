"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type GetStartedProps = {
  title: string;
  subtitle: string;
};
// data for get started section
const data = [
  { image: '/images/services/stage1.png', description: 'Schedule an exam' },
  { image: '/images/services/stage2.png', description: 'Speak with a dentist about your goals' },
  { image: '/images/services/stage3.png', description: 'Create a plan and start your smile journey' }
]
const GetStarted: React.FC<GetStartedProps> = ({ title, subtitle }) => {
  return (
    <div className='bg-[#F4F6F3] w-full'>
      <div className="py-32 px-4 max-w-7xl mx-auto ">
        <h1 className="text-5xl font-bold text-center text-classic_yellow">{title}</h1>
        <p className="text-xl text-center mt-2 pb-8">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {data.map((item: any, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <Image
                src={`${item.image}`}
                alt={`Stage ${idx + 1}`}
                width={350}
                height={250}
                className="rounded-lg"
              />
              <div className="">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-5">
                  <div className="bg-classic_yellow text-white rounded-full w-10 h-10  flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-center text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="my-14 flex justify-center">
          <Link href="/appointment">
            <Button variant="classic_primary">Request Appointment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted