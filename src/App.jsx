import Bottom from "./hero/Bottom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import WhatPeopleSaying from "./components/peopleSaying/WhatPeopleSaying";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden ">
        <main className="bg-black h-full">
          <Navbar />
          <Hero />
          <Bottom />
          <About />
          <Services />
          <WhatPeopleSaying />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
