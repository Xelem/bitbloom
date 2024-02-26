import React from "react";
import About from "../../components/about";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Services from "../../components/services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
