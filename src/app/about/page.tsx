'use client'
import AboutUs from '@/components/about/about_us'
import HeroSection from '@/components/Hero'
import ContactUs from '@/components/homePage/ContactUs'
import Services from '@/components/homePage/Services'
import Testimony from '@/components/homePage/Testimony'
import VisitUs from '@/components/homePage/VisitUs'
import WhyChooseUs from '@/components/homePage/WhyChooseUs'
import YourDentist from '@/components/homePage/YourDentist'
import React from 'react'

const page = () => {
    return (
        <>
            <HeroSection
                title="About Our Dental Practice"
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
            <AboutUs />
            <ContactUs />
            <Services />
            <YourDentist isHidden={true}/>
            <WhyChooseUs />
            <Testimony />
            <VisitUs />
        </>
    )
}

export default page