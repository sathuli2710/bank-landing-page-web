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
import Layout from "./components/Layout";
import TakeToTop from "./components/TakeToTop";

const App = () => {
  return (
    <div className="bg-[#00040F] w-full overflow-x-hidden text-white">
      <Layout>
        <div className="w-full flex flex-col gap-y-[2.5rem]">
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
          <TakeToTop />
        </div>
      </Layout>
    </div>
  );
};

export default App;
