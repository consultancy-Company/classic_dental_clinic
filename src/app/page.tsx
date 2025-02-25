'use client'
import { useEffect, useState } from "react";
import About from "@/components/homePage/about";
import ContactUs from "@/components/homePage/ContactUs";
import Hero from "@/components/homePage/Hero";
import Services from "@/components/homePage/Services";
import Testimony from "@/components/homePage/Testimony";
import VisitUs from "@/components/homePage/VisitUs";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import YourDentist from "@/components/homePage/YourDentist";
import Loader from "@/components/Loader";  // Import the Loader component
import Layout from "@/components/layout/Layout";

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
            <Hero />
            <About />
            <Services />
            <ContactUs />
            <YourDentist />
            <WhyChooseUs />
            <Testimony />
            <VisitUs />
          </Layout>
        </>
      )}
    </>
  );
}
