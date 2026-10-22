import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-container">

        {/* HEADER */}

        <header className="hero-header">
          <h1 className="designer-name">Tanvi</h1>
          <h1 className="designer-name italic">Raj</h1>
        </header>

        <div className="divider" />

        {/* META */}

        <div className="hero-meta">
          <p>FRONT-END DEVELOPER</p>
          <p>AVAILABLE FOR FREELANCE</p>
          <p>EMAIL</p>
          <p>INDIA {time}</p>
        </div>

        {/* ROW 1 */}

        <div className="hero-row row-one">

          <div
            className="floating-card about"
            onClick={() => scrollToSection("about")}
            role="button"
            tabIndex={0}
          >
            <span>About</span>
            <span>01</span>
          </div>

          <h2 className="hero-text center">Design&</h2>

          <div
            className="floating-card projects"
            onClick={() => scrollToSection("projects")}
            role="button"
            tabIndex={0}
          >
            <span>Projects</span>
            <span>02</span>
          </div>

        </div>

        <div className="divider" />

        {/* ROW 2 */}

        <div className="hero-row row-two">
          <h2 className="hero-text">Frontend</h2>
          <h2 className="hero-text right">Developer</h2>
        </div>

        <div className="divider" />

        {/* ROW 3 */}

        <div className="hero-row row-three">

          <h2 className="hero-text">Based</h2>

          <div className="contact-slot">
            <div
              className="floating-card contact"
              onClick={scrollToContact}
              role="button"
              tabIndex={0}
            >
              <span>Contact</span>
              <span>03</span>
            </div>
          </div>

          <h2 className="hero-text right">in India</h2>

        </div>

        <div className="divider" />

      </div>
    </section>
  );
}