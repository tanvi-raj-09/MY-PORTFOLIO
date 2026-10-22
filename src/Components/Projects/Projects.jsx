import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef(null);

  const sections = [
    {
      id: "01",
      title: "FRONTEND",
      description:
        "Interfaces that don't lag and don't fall apart. SSR, design systems, accessibility, 90+ in Lighthouse.",
      tools: ["TYPESCRIPT", "REACT", "NEXT.JS", "VITE"],
    },
    {
      id: "02",
      title: "BACKEND",
      description:
        "APIs, queues, databases and deploys. From data schema to Kubernetes healthcheck – no \"not my area\".",
      tools: ["NODE.JS", "PYTHON", "POSTGRESQL", "REDIS", "DOCKER"],
    },
    {
      id: "03",
      title: "DESIGN",
      description:
        "UI/UX, and visual design. Every detail is intentional, every interaction serves a purpose, and every design decision helps your brand connect with the right audience.",
      tools: ["FIGMA", "SKETCH", "ADOBE XD", "CANVA", "PHOTOSHOP"],
    },
  ];

  useGSAP(
    () => {
      // Header scroll reveal
      gsap.from(".projects-header", {
        y: 45,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        clearProps: "transform",
      });

      // Scroll reveal: Fade up transition for FRONTEND, BACKEND, and DESIGN
      const rows = gsap.utils.toArray(".project-section-wrapper");
      rows.forEach((row) => {
        gsap.from(row, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          clearProps: "transform",
        });
      });
    },
    { scope: projectsRef }
  );

  return (
    <section className="projects-page" id="projects" ref={projectsRef}>
      <div className="projects-header">
        <div className="header-left">
          <span className="header-num">(01)</span>
          <h1 className="header-title">WHAT I WORK WITH</h1>
        </div>
        <span className="header-label">// LANGUAGES & TOOLS</span>
      </div>

      <div className="divider-line"></div>

      <div className="projects-content">
        {sections.map((section) => (
          <div key={section.id} className="project-section-wrapper">
            <div className="project-section">
              {/* Left Column: Number */}
              <div className="section-num">{section.id}</div>

              {/* Middle Column: Title & Description */}
              <div className="section-details">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-description">{section.description}</p>
              </div>

              {/* Right Column: Tools */}
              <div className="section-tools">
                {section.tools.map((tool) => (
                  <span key={tool} className="tool-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="divider-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
