"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      className={`btn btn-primary btn-lg-square back-to-top${visible ? " visible" : ""}`}
      style={{ position: "fixed", right: 30, bottom: 30, zIndex: 99, borderRadius: 4 }}
    >
      <i className="bi bi-arrow-up" />
    </button>
  );
}
