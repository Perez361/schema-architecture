"use client";
import { useFadeUp } from "./useFadeUp";

export default function Team() {
  const ref = useFadeUp();

  return (
    <section className="container-xxl py-5">
      <div className="section-heading fade-up visible">
        <h1 style={{ color: "#152044", fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
          Founder of Shema Architecture
        </h1>
      </div>
      <div ref={ref} className="fade-up" style={{ display: "flex", justifyContent: "center" }}>
        <div className="team-item" style={{ maxWidth: 280, position: "relative" }}>
          <div style={{ position: "relative" }}>
            <img
              src="/img/team-4.jpg"
              alt="Agbi Paul"
              style={{ width: "100%", display: "block" }}
            />
            <div className="team-social">
              {["facebook-f", "twitter", "instagram"].map((icon) => (
                <a key={icon} href="#" className="btn btn-square">
                  <i className={`fab fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>
          <div className="team-info">
            <h3>Agbi Paul</h3>
            <span className="role">Lead Architect</span>
          </div>
        </div>
      </div>
    </section>
  );
}
