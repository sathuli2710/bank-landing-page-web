import React from "react";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import Stats from "./components/Stats";
import Business from "./components/Business";
import CTA from "./components/CTA";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Billing from "./components/Billing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#00040F] w-full overflow-x-hidden h-screen text-white grid place-items-center">
      <Navbar />
      <HeroContent />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
