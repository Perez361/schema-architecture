"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    img: "/img/carousel-1.jpg",
    tag: "Architectural Excellence",
    heading: "Best Architectural Drawings & Design Services",
    sub: "From concept to completion — we craft spaces that inspire and endure with precision and artistry.",
    cta: "Book an Appointment",
    href: "/appointment",
  },
  {
    img: "/img/carousel-2.jpg",
    tag: "Structural Engineering",
    heading: "Best Structural Drawings & Design Services",
    sub: "Setting benchmarks in structural drawings and design solutions, transforming visions into reality.",
    cta: "Contact Us",
    href: "/contact",
  },
  {
    img: "/img/carousel-3.jpg",
    tag: "3D Visualization",
    heading: "Best 3D Design & Animation Services",
    sub: "Transforming visions into reality through cutting-edge 3D design and animation services.",
    cta: "Book an Appointment",
    href: "/appointment",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      resetTimer();
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setContentKey((k) => k + 1);
        setTransitioning(false);
      }, 420);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [transitioning, current]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(next, 6500);
    return resetTimer;
  }, [current, next]);

  const slide = slides[current];

  return (
    <div className="hero-section">
      {/* ── LEFT: dark content panel ── */}
      <div className="hero-left">
        <div
          key={contentKey}
          className="hero-content-enter"
          style={{
            opacity: transitioning ? 0 : 1,
            transition: "opacity 0.35s ease",
          }}
        >
          {/* Tag */}
          <div className="hero-tag">
            <span className="hero-tag-line" />
            <span className="hero-tag-text">{slide.tag}</span>
          </div>

          {/* Heading */}
          <h1 className="hero-h1">{slide.heading}</h1>

          {/* Sub */}
          <p className="hero-sub">{slide.sub}</p>

          {/* CTAs */}
          <div className="hero-actions">
            <Link
              href={slide.href}
              className="btn btn-primary"
              style={{ padding: ".8rem 2rem" }}
            >
              {slide.cta}
            </Link>
            <Link href="/about" className="hero-link-secondary">
              Learn More
              <i className="fas fa-arrow-right" style={{ fontSize: "0.68rem" }} />
            </Link>
          </div>

          {/* Bottom nav: dots + arrows */}
          <div className="hero-nav">
            <div className="hero-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="hero-arrows">
              <button className="hero-arrow" onClick={prev} aria-label="Previous slide">
                <i className="fas fa-arrow-left" />
              </button>
              <button className="hero-arrow" onClick={next} aria-label="Next slide">
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: image panel ── */}
      <div className="hero-right">
        <Image
          key={`img-${current}`}
          src={slide.img}
          alt={slide.heading}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="hero-right-img hero-img-enter"
          style={{
            objectFit: "cover",
            opacity: transitioning ? 0 : 1,
            transition: "opacity 0.42s ease",
          }}
        />

        {/* Slide counter */}
        <div className="hero-counter">
          <span className="hero-counter-current">0{current + 1}</span>
          <span>/</span>
          <span>0{slides.length}</span>
        </div>
      </div>

      {/* Progress stripe */}
      <div className="hero-progress">
        <div
          className="hero-progress-bar"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}