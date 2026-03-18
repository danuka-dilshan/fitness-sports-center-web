import "./styles/global.css";
import FontLoader from "./components/FontLoader";
import Nav from "./components/Nav/Nav";
import { C } from "./constants";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Plans from "./components/Plans/Plans";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { useState } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <FontLoader />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div
        style={{
          fontFamily: "'Barlow Condensed','Oswald',sans-serif",
          background: C.black,
          color: C.offwhite,
          overflowX: "hidden",
          minHeight: "100vh",
          visibility: loaded ? "visible" : "hidden",
        }}
      >
        <Nav />
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Plans />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
