import Image from 'next/image';
import React from 'react';
import {Button} from '../../ui/button';

const DentalCleaning = () => {
    return (
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-32 px-4">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl md:text-5xl font-subheading mb-10 text-gray-800">
            Dental Cleaning and Exam
          </h2>
          <p className="text-[18px] text-gray-600 text-justify pb-6">
            A regular cleanings and exams are essential for maintaining your
            oral health. These preventive measures help prevent tooth decay and
            cavities by effectively removing plaque and tartar buildup. Regular
            cleanings also help maintain fresh breath, remove surface stains,
            and contribute to a brighter, more confident smile.
          </p>
          <p className="text-[18px] text-gray-600 text-justify mb-6">
            Dr. Jivani will closely monitor your oral health through
            comprehensive dental exams. This allows us to detect early signs of
            dental issues such as gum disease, oral cancer, and tooth decay. By
            identifying these problems early, we can intervene promptly and
            prevent further complications.
          </p>
          <Button className="bg-classic_blue hover:bg-classic_yellow">
            Book Now
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center p-4">
          <Image
            src="/images/services/cleaning.png"
            width={500}
            height={300}
            alt="Dental Cleaning"
            className="w-full h-auto"
          />
        </div>
      </div>
    );
};

export default DentalCleaning;