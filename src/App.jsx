import "./styles/global.css";
import FontLoader from "./components/FontLoader";
import Nav        from "./components/Nav";
import { C } from "./constants";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";


export default function App() {
  return (
    <>
      <FontLoader />
      <div style={{ fontFamily:"'Barlow Condensed','Oswald',sans-serif",
        background: C.black, color: C.offwhite,
        overflowX: "hidden", minHeight: "100vh" }}>
        <Nav />
        <Hero />
        <Marquee />
      </div>
    </>
  );
}