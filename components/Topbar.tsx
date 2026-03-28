export default function Topbar() {
  return (
    <div className="topbar" style={{ display: "none" }}>
      <style>{`
        @media (min-width: 992px) { .topbar { display: block !important; } }
      `}</style>
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: contact info */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", padding: "0.65rem 0" }}>
          <a
            href="tel:+233554265273"
            style={{ display: "flex", alignItems: "center", gap: ".45rem" }}
          >
            <i className="fa fa-phone-alt icon-color" />
            +233 55 426 5273
          </a>

          <a
            href="mailto:info@shemaarchitecture.com"
            style={{ display: "flex", alignItems: "center", gap: ".45rem" }}
          >
            <i className="fa fa-envelope-open icon-color" />
            info@shemaarchitecture.com
          </a>

          {/* Location — plain span, explicitly white */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".45rem",
              color: "rgba(255,255,255,0.85)",
              fontSize: "12.5px",
              fontFamily: "var(--font-body, 'Outfit', sans-serif)",
            }}
          >
            <i className="bi bi-geo-alt-fill" style={{ color: "var(--primary, #91c9df)" }} />
            Madina, Firestone
          </span>
        </div>

        {/* Right: social icons */}
        <div style={{ display: "flex", gap: ".4rem" }}>
          {["facebook-f", "twitter", "linkedin-in", "instagram"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="btn btn-sm-square btn-outline-body"
              style={{ fontSize: "0.75rem" }}
            >
              <i className={`fab fa-${icon}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}