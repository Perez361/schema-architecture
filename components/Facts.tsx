"use client";
import { useFadeUp } from "./useFadeUp";

const facts = [
  {
    icon: "/img/icons/icon-2.png",
    title: "Design Approach",
    desc: "Our services emphasize a blend of creativity and functionality, ensuring each project is tailored to reflect your unique vision while meeting practical needs seamlessly.",
  },
  {
    icon: "/img/icons/icon-3.png",
    title: "Innovative Solutions",
    desc: "We specialize in delivering cutting-edge architectural solutions, blending creativity with technical expertise to meet your unique design and structural needs.",
  },
  {
    icon: "/img/icons/icon-4.png",
    title: "Project Management",
    desc: "Efficient project management tailored to meet deadlines and budgets, ensuring seamless execution from planning to completion.",
  },
];

export default function Facts() {
  const ref = useFadeUp();
  return (
    <section className="container-xxl py-5" style={{ paddingTop: "5rem" }}>
      <div ref={ref} className="fade-up facts-grid" style={{ paddingTop: "3rem" }}>
        {facts.map((f) => (
          <div key={f.title} className="fact-item">
            <div className="fact-icon">
              <img src={f.icon} alt={f.title} />
            </div>
            <h3 style={{ marginBottom: ".75rem", color: "#152044" }}>{f.title}</h3>
            <p style={{ margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
