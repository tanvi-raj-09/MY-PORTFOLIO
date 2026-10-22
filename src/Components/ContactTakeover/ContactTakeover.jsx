import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Process from "../Process/Process";
import Contact from "../Contact/Contact";
import "./ContactTakeover.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactTakeover() {
  const containerRef = useRef(null);
  const currentPanelRef = useRef(null);
  const nextPanelRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet transition
      mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=130%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // 1. Initial breathing hold so Process is fully appreciated
        tl.to({}, { duration: 0.25 });

        // 2. Contact page ascends smoothly from bottom to take over the viewport
        tl.fromTo(
          nextPanelRef.current,
          { yPercent: 100 },
          { yPercent: 0, duration: 1, ease: "none" }
        );

        // 3. Outgoing Process panel recedes cleanly without dimming
        tl.to(
          currentPanelRef.current,
          {
            scale: 0.92,
            yPercent: -5,
            duration: 1,
            ease: "none",
          },
          "<"
        );

        // 4. Subtle inner micro-reveal of Contact elements as it enters
        tl.from(
          ".contact-page .banner-sub, .contact-page .write-me-btn",
          {
            y: 50,
            opacity: 0.2,
            duration: 0.6,
            ease: "power2.out",
          },
          "<+=0.2"
        );

        tl.from(
          ".contact-page .contact-grid .grid-col",
          {
            y: 35,
            opacity: 0.2,
            stagger: 0.08,
            duration: 0.55,
            ease: "power2.out",
          },
          "<+=0.15"
        );
      });

      // Mobile transition
      mm.add("(max-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.to({}, { duration: 0.15 });

        tl.fromTo(
          nextPanelRef.current,
          { yPercent: 100 },
          { yPercent: 0, duration: 1, ease: "none" }
        );

        tl.to(
          currentPanelRef.current,
          {
            scale: 0.94,
            duration: 1,
            ease: "none",
          },
          "<"
        );

        tl.from(
          ".contact-page .banner-sub, .contact-page .write-me-btn",
          {
            y: 35,
            opacity: 0.3,
            duration: 0.5,
            ease: "power2.out",
          },
          "<+=0.2"
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      className="contact-takeover-container"
      ref={containerRef}
      id="takeover-container"
    >
      {/* Current Section (Process) */}
      <div className="takeover-current-panel" ref={currentPanelRef}>
        <Process />
      </div>

      {/* Incoming Section (Contact) */}
      <div className="takeover-next-panel" ref={nextPanelRef} id="contact">
        <Contact />
      </div>
    </div>
  );
}
