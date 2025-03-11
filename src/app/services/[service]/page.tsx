import React from 'react'

import JoinUs from '@/components/about/JoinUs';
import HeroSection from '@/components/Hero';
import ContactUs from '@/components/homePage/ContactUs';
import VisitUs from '@/components/homePage/VisitUs';

import FAQComponent from '@/components/commonUi/faq';

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

const Service = async ({params}:{params:Promise<{service:string}>}) => {
    const { service } = await params;
  return (
    <>
      <HeroSection
        title="Service Excellence Redefined"
        subtitle={
          <>
            <span className="block md:mb-2 mt-2 md:mt-0 text-5xl text-[#dd9639] ">
              {/* Experience Unmatched Quality and    */}
              {service} Services
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
      <ContactUs />
      <JoinUs />

      <FAQComponent faqs={faqs} title="Frequently Asked Questions" />
      <VisitUs />
    </>
  );
}

export default Service;