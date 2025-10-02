import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import FloatingActions from "./components/FloatingActions";
import OfferStrip from "./components/OfferStrip";
// ✅ New Page
import OurTrainers from "./components/OurTrainers";

import gym1 from "./assets/aman1.webp";
import gym2 from "./assets/aman2-new.jpeg";
import gym3 from "./assets/aman3.webp";
import gym4 from "./assets/gymequipped.jpg";
import gym5 from "./assets/gym-charges-plan.jpeg";
import gym6 from "./assets/dumbell2.webp";
import gym7 from "./assets/machine1.webp";
import gym9 from "./assets/machine3.webp";
import gym10 from "./assets/aman3-new.jpeg";


const App = () => {
  const images = [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym10, gym9];

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <OfferStrip/>
              <About />
              <Services />
              <OurTrainers/>
              <Pricing />
              <Testimonials />
              <Gallery images={images} />
              <Contact />
              <Footer />
              <FloatingActions />
            </>
          }
        />

       
        {/* <Route path="/our-trainers" element={<OurTrainers />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
