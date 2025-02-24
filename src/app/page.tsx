'use client'
import About from "@/components/homePage/about";
import ContactUs from "@/components/homePage/ContactUs";
import Hero from "@/components/homePage/Hero";
import Services from "@/components/homePage/Services";
import Testimony from "@/components/homePage/Testimony";
import VisitUs from "@/components/homePage/VisitUs";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import YourDentist from "@/components/homePage/YourDentist";

export default function Home() {
  return (
    <>
      <Hero/>
      <About />
      <Services />
      <ContactUs />
      <YourDentist />
      <WhyChooseUs />
      <Testimony />
      <VisitUs />
    </>
  );
}
