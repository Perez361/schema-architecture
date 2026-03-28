"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "Our Features", href: "/feature" },
      { label: "Our Projects", href: "/project" },
      { label: "Team Members", href: "/team" },
      { label: "Appointment", href: "/appointment" },
      { label: "Testimonial", href: "/testimonial" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #91c9df, #c8a96e)",
          zIndex: 9999,
          transition: "width 0.1s linear",
        }}
      />

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-brand">
            <h1>
              <Image src="/img/icons/icon-1.png" alt="Icon" width={38} height={38} />
              Shema Architecture
            </h1>
          </Link>

          {/* hamburger */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((p) => !p)}
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>

          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <li
                  key={link.label}
                  className={dropOpen ? "open" : ""}
                  onClick={() => setDropOpen((p) => !p)}
                >
                  <a href={link.href} onClick={(e) => e.preventDefault()}>
                    {link.label}{" "}
                    <i
                      className="fas fa-chevron-down"
                      style={{
                        fontSize: ".6rem",
                        transition: "transform 0.3s",
                        transform: dropOpen ? "rotate(180deg)" : "none",
                        display: "inline-block",
                      }}
                    />
                  </a>
                  <div className="dropdown-menu-custom">
                    {link.dropdown.map((d) => (
                      <Link key={d.label} href={d.href}>
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              )
            )}
            <li style={{ paddingLeft: "1.25rem" }}>
              <Link
                href="/appointment"
                className="btn btn-primary"
                style={{ padding: "0.55rem 1.5rem", fontSize: "0.78rem" }}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}