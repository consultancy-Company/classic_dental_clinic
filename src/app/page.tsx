'use client'
import { useEffect, useState } from "react";
import About from "@/components/homePage/about";
import ContactUs from "@/components/homePage/ContactUs";
import Services from "@/components/homePage/Services";
import Testimony from "@/components/homePage/Testimony";
import VisitUs from "@/components/homePage/VisitUs";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import YourDentist from "@/components/homePage/YourDentist";
import Loader from "@/components/Loader";  // Import the Loader component
import HeroSection from "@/components/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");

    if (hasVisited) {
      setLoading(false);  // Skip loader on repeat visits
    } else {
      localStorage.setItem("visited", "true");
      setTimeout(() => setLoading(false), 1200);  // Show loader for 2 seconds on first visit
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />  // Show loader only on first visit
      ) : (
        <>
          <Layout>
            <HeroSection
              title="Your Trusted Classic Specialty"
              subtitle={
                <>
                  <span className="block md:mb-4 mt-2 md:mt-0">Experience top-quality</span>
                  <span className="block">dental care with a gentle touch.</span>
                </>
              }
              buttonText="Request Appointment"
              backgroundImage="/images/jose-vazquez-4SUyx4KQ5Ik-unsplash.jpg"
              phoneNumbers={["+251909696945", "+251909696946"]}
              location="Bisrate Gebrale, Adot Cinema, Addis Ababa"
            />

          <About />
          <Services />
          <ContactUs />
          <YourDentist />
          <WhyChooseUs />
          <Testimony />
          <VisitUs />
        </>
      )}
    </>
  );
}
