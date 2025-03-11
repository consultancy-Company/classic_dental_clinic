import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllSolutions = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-32 px-4">
      <div className="flex-1 mb-4 md:mb-0 md:mr-4">
        <Image
          src="/images/services/dental-solutions.png" 
          alt="All-in-one Dental Solutions"
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-5xl font-bold mb-4 text-classic_yellow">All-in-one Dental Solutions for the Whole Family</h2>
        <p className="mb-6 text-lg text-justify">
          Make every visit to the dentist a positive one, no matter what treatment you require. Our Oakville dental services address various concerns, from preventive needs to missing teeth — all while catering to your relaxation and enjoyment.
        </p>
        <p className="text-lg text-justify">
          Book <Link href="/appointment" 
                        className='text-classic_yellow bg-classic_blue px-3 py-1 rounded-full animate-pulse trnsform transition-all duration-["2000"]'>online</Link>{" "}
            today and discover why we’re the go-to destination for exceptional dental services in Oakville.
        </p>
      </div>
    </div>
  );
};

export default AllSolutions;