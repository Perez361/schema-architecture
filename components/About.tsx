"use client";
import Link from "next/link";
import { useFadeUp } from "./useFadeUp";

export default function About() {
  const refLeft = useFadeUp();
  const refRight = useFadeUp();

  return (
    <section className="container-xxl py-5 about-section">
      <div className="about-grid">
        <div ref={refLeft} className="fade-in about-img">
          <img src="/img/about-1.jpg" alt="About Shema Architecture" />
          <img src="/img/about-2.jpg" alt="Architecture work" />
        </div>
        <div ref={refRight} className="fade-up about-text">
          <h4 className="section-title">About Us</h4>
          <h1 className="display-5" style={{ marginBottom: "1rem" }}>
            A Creative Architecture Agency For Your Dream Home
          </h1>
          <p>
            Welcome to our creative architecture agency dedicated to crafting your dream home. With
            a passion for innovation and meticulous attention to detail, we specialize in delivering
            expert structural drawings and design services.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Let us guide you through every step, from concept to construction, ensuring your vision
            becomes a reality with elegance and functionality at its core.
          </p>
          <Link href="/about" className="btn btn-primary" style={{ padding: ".75rem 2rem" }}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
