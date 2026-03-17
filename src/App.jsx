import "./styles/global.css";
import FontLoader from "./components/FontLoader";
import Nav from "./components/Nav";
import { C } from "./constants";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Plans from "./components/Plans";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <FontLoader />
      <div
        style={{
          fontFamily: "'Barlow Condensed','Oswald',sans-serif",
          background: C.black,
          color: C.offwhite,
          overflowX: "hidden",
          minHeight: "100vh",
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
