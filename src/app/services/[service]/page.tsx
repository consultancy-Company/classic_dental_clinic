import React from 'react'

import JoinUs from '@/components/about/JoinUs';
import HeroSection from '@/components/Hero';
import ContactUs from '@/components/homePage/ContactUs';
import VisitUs from '@/components/homePage/VisitUs';

import FAQComponent from '@/components/commonUi/faq';
import GetStarted from '@/components/services/GetStarted';
import AllSolutions from '@/components/services/AllSolutions';
import ReachOut from '@/components/services/ReachOut';
import Layout from '@/components/layout/Layout';
import { servicesData } from '@/lib/constants';
import ServiceDetail from '@/components/services/ServiceDetail';
import ForYou from '@/components/services/ForYou';

const faqs = [
  {
    question: "What is the purpose of this FAQ?",
    answer:
      "This FAQ aims to provide answers to common questions about our service.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out to our support team via the contact page.",
  },
  {
    question: "Where can I find more information?",
    answer:
      " More information can be found on our website under the More information can be found on our website under the More information can be found on our website under the More information can be found on our website under the More information can be found on our website under the resources section",
  },
];

// convert string to sentence case fist letter uppercase
const toSentenceCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const Service = async ({ params }: { params: Promise<{ service: string }> }) => {
  const { service } = await params;
  // let filter the servicesData array and return the service that matches the service parameter
  const serviceData = servicesData.find((serviceData) => {
    return serviceData.params.toLowerCase() === service.toLowerCase();
  });
  
  
  return (
    <Layout>
      <HeroSection
        title="Service Excellence Redefined"
        subtitle={
          <>
            <span className="inline-block md:mb-2 mt-2 md:mt-0 text-5xl py-3   text-white ">
              {/* Experience Unmatched Quality and    */}
              {toSentenceCase(service)} Services
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
      <ServiceDetail serviceName={serviceData?.name as string} imageSrc={serviceData?.imageSrc as string} />
      <AllSolutions />
      <GetStarted />

      <ContactUs />
      <JoinUs />
      <ForYou />

      <FAQComponent faqs={faqs} title="Frequently Asked Questions" />
      <VisitUs />

      {/* this component is only shown on mobile and tablet */}
      <ReachOut />
    </Layout>
  );
}

export default Service;