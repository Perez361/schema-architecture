"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    img: "/img/carousel-1.jpg",
    heading: "Best Architectural Drawings And Design Services",
    sub: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    cta: "Book an Appointment",
    href: "/appointment",
  },
  {
    img: "/img/carousel-2.jpg",
    heading: "Best Structural Drawings And Design Services",
    sub: "Setting benchmarks in structural drawings and design solutions and transforming visions into reality with precision and creativity.",
    cta: "Contact Us",
    href: "/contact",
  },
  {
    img: "/img/carousel-3.jpg",
    heading: "Best 3D Design And Animation Services",
    sub: "Transforming visions into reality through cutting-edge 3D design and animation services.",
    cta: "Book an Appointment",
    href: "/appointment",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <div className="hero-section">
      <div className="hero-slide" style={{ height: "calc(100vh - 56px)", minHeight: 500 }}>
        <Image
          src={slide.img}
          alt={slide.heading}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="hero-overlay">
          <div className="container-xxl" style={{ width: "100%", padding: "0 1.5rem" }}>
            <div className="hero-content" style={{ maxWidth: 700 }}>
              <h1
                className="animated slideInDown"
                style={{
                  color: "#fff",
                  fontFamily: "'Teko', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                {slide.heading}
              </h1>
              <p style={{ color: "#fff", fontSize: "1.1rem", margin: "1rem 0 1.5rem", fontWeight: 500 }}>
                {slide.sub}
              </p>
              <Link href={slide.href} className="btn btn-primary" style={{ padding: ".75rem 2rem" }}>
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* Dot nav */}
        <div className="carousel-dots">
          {slides.map((s, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <img src={s.img} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
