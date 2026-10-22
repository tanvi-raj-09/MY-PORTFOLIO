import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const designRowRef = useRef(null);
  const descRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: designRowRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Scroll reveal: Fade up transition for "I DESIGN EVERYTHING"
      tl.from(designRowRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "transform",
      });

      // Scroll reveal: Fade up transition for the text paragraph below it
      tl.from(
        descRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform",
        },
        "-=0.45"
      );
    },
    { scope: aboutRef }
  );

  return (
    <section className="about-page" id="about" ref={aboutRef}>
      <div className="manifesto">// MANIFESTO</div>

      <div className="manifesto-content">
        <div className="manifesto-row">
          <span className="white-text">I BUILD</span>
          <div className="label-box lime">FRONT.</div>
        </div>

        <div className="manifesto-row">
          <span className="white-text">I BUILD</span>
          <div className="label-box green">BACK</div>
        </div>

        <div className="manifesto-row design-row" ref={designRowRef}>
          <span className="white-text">I DESIGN</span>
          <div className="label-box yellow">EVERYTHING.</div>
        </div>
      </div>

      <div className="description" ref={descRef}>
        One person, end-to-end execution: design, frontend, backend, and database — all working as one. You get a cohesive digital experience, faster collaboration, and a product built around your goals, without the complexity of managing multiple teams.
      </div>
    </section>
  );
}