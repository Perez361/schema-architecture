"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    img: "/img/carousel-1.jpg",
    tag: "Architectural Excellence",
    heading: "Best Architectural Drawings And Design Services",
    sub: "From concept to completion — we craft spaces that inspire and endure with precision and artistry.",
    cta: "Book an Appointment",
    href: "/appointment",
  },
  {
    img: "/img/carousel-2.jpg",
    tag: "Structural Engineering",
    heading: "Best Structural Drawings And Design Services",
    sub: "Setting benchmarks in structural drawings and design solutions, transforming visions into reality.",
    cta: "Contact Us",
    href: "/contact",
  },
  {
    img: "/img/carousel-3.jpg",
    tag: "3D Visualization",
    heading: "Best 3D Design And Animation Services",
    sub: "Transforming visions into reality through cutting-edge 3D design and animation services.",
    cta: "Book an Appointment",
    href: "/appointment",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 300);
  }, [transitioning]);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <div className="hero-section">
      <div className="hero-slide" style={{ height: "calc(100vh - 57px)", minHeight: 560 }}>
        <Image
          src={slide.img}
          alt={slide.heading}
          fill
          style={{
            objectFit: "cover",
            transition: "opacity 0.6s ease",
            opacity: transitioning ? 0 : 1,
          }}
          priority
        />

        {/* Gradient overlay */}
        <div className="hero-overlay">
          <div className="container-xxl" style={{ width: "100%", padding: "0 2rem" }}>
            <div
              className="hero-content"
              style={{
                maxWidth: 700,
                opacity: transitioning ? 0 : 1,
                transform: transitioning ? "translateY(16px)" : "translateY(0)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {/* Tag line */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    width: "40px",
                    height: "1.5px",
                    background: "#91c9df",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    color: "#91c9df",
                    fontSize: "0.75rem",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {slide.tag}
                </span>
              </div>

              <h1
                style={{
                  color: "#fff",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  lineHeight: 1.1,
                  fontWeight: 600,
                  letterSpacing: "-0.5px",
                  marginBottom: "1.25rem",
                  textShadow: "0 2px 20px rgba(0,0,0,0.25)",
                }}
              >
                {slide.heading}
              </h1>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "1rem",
                  marginBottom: "2.25rem",
                  fontWeight: 300,
                  maxWidth: 520,
                  lineHeight: 1.8,
                }}
              >
                {slide.sub}
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href={slide.href}
                  className="btn btn-primary"
                  style={{ padding: ".8rem 2.25rem" }}
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.82rem",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontFamily: "'DM Sans', sans-serif",
                    paddingBottom: "2px",
                    borderBottom: "1px solid rgba(255,255,255,0.3)",
                    transition: "color 0.3s, border-color 0.3s",
                  }}
                >
                  Learn More
                  <i className="fas fa-arrow-right" style={{ fontSize: "0.7rem" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide counter */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "2rem",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.78rem",
            letterSpacing: "2px",
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ color: "#91c9df", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600 }}>
            0{current + 1}
          </span>
          <span>/</span>
          <span>0{slides.length}</span>
        </div>

        {/* Dot nav */}
        <div className="carousel-dots">
          {slides.map((s, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <img src={s.img} alt="" />
            </button>
          ))}
        </div>

        {/* Bottom progress bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#91c9df",
              width: `${((current + 1) / slides.length) * 100}%`,
              transition: "width 0.5s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}