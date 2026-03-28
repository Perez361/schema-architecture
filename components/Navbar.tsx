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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          <h1>
            <Image src="/img/icons/icon-1.png" alt="Icon" width={40} height={40} />
            Shema Architecture
          </h1>
        </Link>

        {/* hamburger */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span />
          <span />
          <span />
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
                  {link.label} <i className="fas fa-chevron-down" style={{ fontSize: ".7rem" }} />
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
          <li style={{ paddingLeft: "1rem" }}>
            <Link href="/appointment" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem" }}>
              Appointment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
