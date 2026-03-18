import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader({ onComplete }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFading(true);
        setTimeout(onComplete, 800);
      }, 600);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className={`loader-overlay ${fading ? "loader-fade-out" : ""}`}>
      <div className="loader-content">
        <div className="loader-bars">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="loader-bar"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
        <p className="loader-text">LOADING</p>
      </div>
    </div>
  );
}
