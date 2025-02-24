'use client'
import About from "@/components/homePage/about";
import ContactUs from "@/components/homePage/ContactUs";
import Hero from "@/components/homePage/Hero";
import Services from "@/components/homePage/Services";
import VisitUs from "@/components/homePage/VisitUs";
import YourDentist from "@/components/homePage/YourDentist";

export default function Home() {
  return (
    <>
      <Hero/>
      <About />
      <YourDentist />
      <ContactUs />
      <Services />
      <VisitUs />
    </>
  );
}
