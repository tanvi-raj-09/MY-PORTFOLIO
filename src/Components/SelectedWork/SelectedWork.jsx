import { useRef, useState } from "react";
import "./SelectedWork.css";

export default function SelectedWork() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: "01",
      year: "2026",
      title: "KUMO",
      description:
        "Japanese vibe ramen restraunt and takeout website (fictional project)",
      tags: ["FRONT", "BACK"],
      colorClass: "lime",
      link: "https://kumo-ramen-pi.vercel.app/",
    },
    {
      id: "02",
      year: "2026",
      title: "Zentry",
      description:
        "Modern Gaming website made with gsap",
      tags: ["DESIGN", "FRONT"],
      colorClass: "green",
      link: "https://virtual-r-gxyw.vercel.app/",
    },
    {
      id: "03",
      year: "2026",
      title: "Virtual R",
      description:
        "Website which build tools for developers",
      tags: ["FRONT", "BACK"],
      colorClass: "yellow",
      link: "https://virtual-r-six-nu.vercel.app/",
    },
    {
      id: "04",
      year: "2026",
      title: "Portfolio",
      description:
        "Portfolio Website made for my friend.",
      tags: ["FRONT", "BACK", "DESIGN"],
      colorClass: "lime",
      link: "https://shrishti-portfolio-psi.vercel.app/",
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = container.children;
    let closestIndex = 0;
    let minDistance = Infinity;

    const containerLeft = container.getBoundingClientRect().left;

    for (let i = 0; i < children.length; i++) {
      const childRect = children[i].getBoundingClientRect();
      const distance = Math.abs(childRect.left - containerLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    setActiveIndex(closestIndex);
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const child = container.children[index];
    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="work-page">
      <div className="work-header">
        <div className="header-left">
          <span className="header-num">(02)</span>
          <h1 className="header-title">SELECTED WORK</h1>
        </div>
        <span className="header-label">// SCROLL SIDEWAYS →</span>
      </div>

      <div className="divider-line"></div>

      <div
        className="cards-container"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`work-card ${card.colorClass}`}
          >
            <div className="card-header">
              <span>#{card.id} — {card.year}</span>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </div>

            <h2 className="card-title">{card.title}</h2>

            <p className="card-description">{card.description}</p>

            <div className="card-divider"></div>

            <div className="card-footer">
              {card.tags.join(" · ")}
            </div>
          </a>
        ))}
      </div>

      <div className="dots-container">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => scrollToCard(index)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </section>
  );
}
