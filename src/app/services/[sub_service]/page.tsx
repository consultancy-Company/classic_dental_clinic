import React from 'react'
import HeroSection from '@/components/Hero';

import { redirect, } from 'next/navigation';
import { service_components } from '@/lib/data/services_components';


// convert string to sentence case fist letter uppercase
const toSentenceCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const Service = async ({ params }: { params: Promise<{ sub_service: keyof typeof service_components }> }) => {
  const { sub_service } = await params;
  

  const current_components = service_components?.[sub_service];

  if (!current_components) {
    redirect("/services");
    }

  return (
    <>
      <HeroSection
        title="Service Excellence Redefined"
        subtitle={
          <>
            <span className="inline-block md:mb-2 mt-2 md:mt-0 text-5xl py-3   text-white ">
              {/* Experience Unmatched Quality and    */}
              {toSentenceCase(sub_service)} Services
            </span>
            <span className="block text-[50px] leading-[50px]">
              Innovation in Every Offering.
            </span>
          </>
        }
        buttonText="Learn More"
        backgroundImage="/images/jose-vazquez-4SUyx4KQ5Ik-unsplash.jpg"
        phoneNumbers={["+251909696945", "+251909696946"]}
        location="Bisrate Gebrale, Adot Cinema, Addis Ababa"
      />

        {
          current_components?.map((component, index) => {
            return React.createElement(component, { key: index });
          })
        }
      

    </>
  );
}

export default Service;