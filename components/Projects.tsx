"use client";
import { useState } from "react";
import Link from "next/link";

const projects = [
  { id: 1, label: "01. Modern Complex", img: "/img/project-1.jpg" },
  { id: 2, label: "02. 6 Unit Ariel", img: "/img/project-2.jpg" },
  { id: 3, label: "03. Spencer Building", img: "/img/project-3.jpg" },
  { id: 4, label: "04. Home Complex", img: "/img/project-4.jpg" },
];

export default function Projects() {
  const [active, setActive] = useState(1);
  const proj = projects.find((p) => p.id === active)!;

  return (
    <section className="container-xxl py-5">
      <div className="section-heading fade-up visible">
        <h4 className="section-title">Our Projects</h4>
        <h1 style={{ color: "#152044", marginTop: ".5rem", fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
          Visit Our Latest Projects And Our Innovative Works
        </h1>
      </div>
      <div className="projects-layout">
        <div className="project-tabs">
          {projects.map((p) => (
            <button
              key={p.id}
              className={`project-tab-btn${active === p.id ? " active" : ""}`}
              onClick={() => setActive(p.id)}
            >
              <h3>{p.label}</h3>
            </button>
          ))}
        </div>
        <div className="project-tab-content">
          <div className="tab-pane active">
            <div className="project-img-wrap">
              <img src={proj.img} alt={proj.label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="project-info">
              <h1>Some of Our Latest Services.</h1>
              <p>Explore our latest offerings and discover our innovative solutions tailored to meet your needs.</p>
              {["Design Approach", "Innovative Solutions", "Project Management"].map((item) => (
                <div key={item} className="check-item">
                  <i className="fa fa-check check-icon" />
                  <span>{item}</span>
                </div>
              ))}
              <Link href="/project" className="btn btn-primary" style={{ marginTop: "1.25rem", padding: ".75rem 2rem" }}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
