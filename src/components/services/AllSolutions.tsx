import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllSolutions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto py-32 px-4">
      <div className="flex-1 mb-4 md:mb-0 md:mr-4">
        <Image
          src="/images/services/kid.jpg"
          alt="All-in-one Dental Solutions"
          width={500}
          height={400}
          className="w-full"
        />
      </div>
      <div className="flex-1 justify-between">
        <h2 className="text-5xl font-subheading mb-10 text-gray-800">All-in-one Dental Solutions for the Whole Family</h2>
        <div className='flex flex-col text-[18px] text-gray-600'>
          <p className="mb-6  text-justify">
            Make every visit to the dentist a positive one, no matter what treatment you require. Our Oakville dental services address various concerns, from preventive needs to missing teeth — all while catering to your relaxation and enjoyment.
          </p>
          <p className="text-justify">
            <Link href={'/appointment'} className=' font-bold'>Book Now</Link>{" "}
            today and discover why we’re the go-to destination for exceptional dental services in Oakville.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllSolutions;