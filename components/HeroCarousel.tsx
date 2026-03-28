"use client";
import { useEffect, useState, useCallback, useRef } from "react";
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
  const [animating, setAnimating] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setContentKey((k) => k + 1);
      setAnimating(false);
    }, 350);
  }, [animating]);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % slides.length);
    }, 6500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <div className="hero-section">
      <div className="hero-slide">
        {/* Background image */}
        <Image
          key={current}
          src={slide.img}
          alt={slide.heading}
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(1.04)" : "scale(1)",
            transition: "opacity 0.55s ease, transform 7s ease-out",
          }}
        />

        {/* Gradient overlay */}
        <div className="hero-overlay">
          <div
            className="container-xxl"
            style={{ width: "100%", padding: "0 2rem" }}
          >
            {/* Content — re-mount on slide change triggers CSS animations */}
            <div
              key={contentKey}
              className="hero-content hero-content-animate"
            >
              <div className="hero-tag">
                <span className="hero-tag-line" />
                <span className="hero-tag-text">{slide.tag}</span>
              </div>

              <h1 className="hero-h1">{slide.heading}</h1>

              <p className="hero-sub">{slide.sub}</p>

              <div className="hero-actions">
                <Link href={slide.href} className="btn btn-primary" style={{ padding: ".8rem 2.25rem" }}>
                  {slide.cta}
                </Link>
                <Link href="/about" className="hero-link-secondary">
                  Learn More
                  <i className="fas fa-arrow-right" style={{ fontSize: "0.7rem" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide counter */}
        <div className="hero-counter">
          <span className="hero-counter-current">0{current + 1}</span>
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
        <div className="hero-progress">
          <div
            className="hero-progress-bar"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}