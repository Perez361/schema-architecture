"use client";
import { useFadeUp } from "./useFadeUp";

const services = [
  {
    bg: "/img/service-1.jpg",
    icon: "/img/icons/icon-5.png",
    title: "Architectural Drawings",
    desc: "Our detailed architectural drawings are meticulously crafted to translate ideas into precise plans. From initial sketches to comprehensive blueprints, we ensure clarity, accuracy, and adherence to your vision.",
  },
  {
    bg: "/img/service-2.jpg",
    icon: "/img/icons/icon-6.png",
    title: "3D Animation",
    desc: "Transform your designs into immersive visual experiences with our 3D animation services. From architectural walkthroughs to product visualizations, we bring ideas to life with realism and creativity.",
  },
  {
    bg: "/img/service-3.jpg",
    icon: "/img/icons/icon-7.png",
    title: "Structural Drawings",
    desc: "Comprehensive structural drawing services ensuring precision and compliance with architectural standards. From initial blueprints to detailed schematics, our expertise guarantees robust foundations.",
  },
];

export default function Services() {
  const ref = useFadeUp();
  return (
    <section className="container-xxl py-5">
      <div className="section-heading fade-up visible">
        <h4 className="section-title">Our Services</h4>
        <h1 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#152044", marginTop: ".5rem" }}>
          We are Focused On Modern Architectural Design
        </h1>
      </div>
      <div ref={ref} className="fade-up services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-item">
            <img className="bg-img" src={s.bg} alt="" />
            <div className="service-text">
              <img src={s.icon} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <button className="service-read-btn">
                <i className="fa fa-plus" style={{ color: "#91c9df", marginRight: ".5rem" }} />
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
