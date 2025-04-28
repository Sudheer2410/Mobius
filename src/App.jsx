import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HowWeWork from "./Sections/HowWeWork";
import AboutUs from "./Sections/AboutUs";
import Testimonials from "./Sections/Testimonials";
import WhyChooseUs from "./Sections/WhyChooseUs";
import ServicePlans from "./Sections/ServicePlans";
import ContactPage from "./Sections/Contact";
import AddressSection from "./Sections/AddressSection";
import FooterSection  from "./Sections/FooterSection" ;
import HeroSection from "./Sections/HeroSection";

const App = () => {
  return (
    <>
      <HeroSection />
      <HowWeWork/>
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <ServicePlans />
      <ContactPage />
      <AddressSection />
      <FooterSection />
    </>
  );
};

export default App;
