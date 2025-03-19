"use client";

import FAQComponent from '@/components/commonUi/faq';
import ContactUs from '@/components/homePage/ContactUs';
import Testimony from '@/components/homePage/Testimony';
import VisitUs from '@/components/homePage/VisitUs';
import ReachOut from '@/components/services/ReachOut';
import React from 'react';
import { usePathname } from 'next/navigation';
import { faq_data } from '@/lib/data/faq_data';

interface FaqData {
  [key: string]: {
    title: string;
    faqs: { question: string; answer: string }[];
  };
  
}



const ServiceLayout = ({ children }: { children: 
    React.ReactNode }) => {
      const pathname = usePathname();
      console.log(pathname, "pathname")

      const faqs_data = (faq_data as FaqData)?.[pathname] ?? [];
      console.log(faqs_data, "faqs_data");

  return (
    <>
      

      {children}

      <ContactUs />
      <Testimony />
      <FAQComponent faqs={faqs_data?.faqs} title={faqs_data?.title || "Frequently Asked Questions"} />
      <VisitUs />

      {/* this component is only shown on mobile and tablet */}
      <ReachOut />
    </>
  );
};


// export default ServiceLayout;
export default ServiceLayout;