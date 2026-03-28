export default function Topbar() {
  return (
    <div className="topbar" style={{ display: "none" }}>
      {/* Hidden on mobile, shown on lg */}
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
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", padding: "0.75rem 0" }}>
          <a href="tel:+233554265273" style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
            <i className="fa fa-phone-alt icon-color" />
            +233 55 426 5273
          </a>
          <a href="mailto:info@shemaarchitecture.com" style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
            <i className="fa fa-envelope-open icon-color" />
            info@shemaarchitecture.com
          </a>
          <span style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
            <i className="bi bi-geo-alt-fill icon-color" />
            Madina, Firestone
          </span>
        </div>
        <div style={{ display: "flex", gap: ".4rem" }}>
          {["facebook-f", "twitter", "linkedin-in", "instagram"].map((icon) => (
            <a key={icon} href="#" className="btn btn-sm-square btn-outline-body">
              <i className={`fab fa-${icon}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
