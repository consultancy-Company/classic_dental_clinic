'use client'

import FAQComponent from '@/components/commonUi/faq'
import HeroSection from '@/components/Hero'
import About from '@/components/homePage/about'
import ContactUs from '@/components/homePage/ContactUs'
import ServicesList from '@/components/homePage/Services'
import Testimony from '@/components/homePage/Testimony'
import VisitUs from '@/components/homePage/VisitUs'
import AllSolutions from '@/components/services/AllSolutions'
import GetStarted from '@/components/services/GetStarted'
import ReachOut from '@/components/services/ReachOut'
import TreatmentSteps from '@/components/services/treatmentSteps '
import React from 'react'
import { faq_data } from '@/lib/data/faq_data'
import { usePathname } from 'next/navigation'
import ForYou from '@/components/services/ForYou'

// const faqs = [
//   {
//     question: "What is the purpose of this FAQ?",
//     answer:
//       "This FAQ aims to provide answers to common questions about our service.",
//   },
//   {
//     question: "How can I contact support?",
//     answer: "You can reach out to our support team via the contact page.",
//   },
//   {
//     question: "Where can I find more information?",
//     answer:
//       " More information can be found on our website under the More information can be found on our website under the More information can be found on our website under the More information can be found on our website under the More information can be found on our website under the resources section",
//   },
//   {
//     question: "What is the purpose of this FAQ?",
//     answer:
//       "This FAQ aims to provide answers to common questions about our service.",
//   },
//   {
//     question: "How can I contact support?",
//     answer: "You can reach out to our support team via the contact page.",
//   },
//   {
//     question: "Where can I find more information?",
//     answer:
//       " More information can be found on our website under the More information can be found on our website under the More information can be found on our website under the More information can be found on our website under the More information can be found on our website under the resources section",
//   },
// ];


const page = () => {
    const pathname = usePathname();
    console.log(pathname, "pathname")
    // const faqs = faq_data[pathname]?.faqs ?? []
    return (
        <div>
            <HeroSection
                title="Our Dental Services"
                subtitle={
                    <>
                        <span className="block md:mb-2 mt-2 md:mt-0 text-[50px]">Excellence in Every Smile</span>
                        <span className="block text-[50px] leading-[50px]">Gentle, expert care you can trust.</span>
                    </>
                }
                buttonText="Learn More"
                backgroundImage="/images/jose-vazquez-4SUyx4KQ5Ik-unsplash.jpg"
                phoneNumbers={["+251909696945", "+251909696946"]}
                location="Bisrate Gebrale, Adot Cinema, Addis Ababa"
            />

            <About />

            <AllSolutions />
            <GetStarted title="Get Started" subtitle="3 Simple steps for achieving your best smile" />
            
            <ServicesList isHidden={true}/>
            <TreatmentSteps treatmentName='Root Canal Treatment'/>
            <ForYou />
            
        </div>
    )
}

export default page