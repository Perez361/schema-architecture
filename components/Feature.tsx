"use client";
import Link from "next/link";
import { useFadeUp } from "./useFadeUp";

const features = [
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

export default function Feature() {
  const refLeft = useFadeUp();
  const refRight = useFadeUp();

  return (
    <section className="container-xxl py-5">
      <div className="feature-grid">
        <div ref={refLeft} className="fade-up">
          <h4 className="section-title">Why Choose Us!</h4>
          <h1 style={{ color: "#152044", margin: ".75rem 0 1rem", fontSize: "clamp(1.4rem,3vw,2rem)" }}>
            Why You Should Trust Us? Learn More About Us!
          </h1>
          <p style={{ marginBottom: "1.5rem" }}>
            Discover why we&apos;re your trusted choice. Learn more about our commitment to excellence
            and how we deliver exceptional results.
          </p>
          <div className="feature-list">
            {features.map((f) => (
              <div key={f.title} className="feature-list-item">
                <img src={f.icon} alt={f.title} />
                <div>
                  <h3 style={{ color: "#152044", marginBottom: ".25rem" }}>{f.title}</h3>
                  <p style={{ margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div ref={refRight} className="fade-in feature-img">
          <img src="/img/about-2.jpg" alt="Feature" />
          <img src="/img/about-1.jpg" alt="Feature" />
        </div>
      </div>
    </section>
  );
}
