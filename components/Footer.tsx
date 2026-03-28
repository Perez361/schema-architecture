export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Address */}
        <div>
          <h3>Address</h3>
          <div className="footer-contact">
            <p><i className="fa fa-map-marker-alt icon" /><span>Madina, Firestone</span></p>
            <p><i className="fa fa-phone-alt icon" /><span>+233 55 426 5273</span></p>
            <p><i className="fa fa-envelope icon" /><span>info@shemaarchitecture.com</span></p>
          </div>
          <div className="footer-socials">
            {["twitter", "facebook-f", "youtube", "linkedin-in"].map((icon) => (
              <a key={icon} href="#" className="btn btn-square btn-outline-body">
                <i className={`fab fa-${icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3>Services</h3>
          {["Architectural Drawings", "3D Animation", "Structural Drawings"].map((s) => (
            <a key={s} href="#" className="footer-btn-link">{s}</a>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          {["About Us", "Contact Us", "Our Services", "Terms & Condition", "Support"].map((l) => (
            <a key={l} href="#" className="footer-btn-link">{l}</a>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h3>Newsletter</h3>
          <p style={{ marginBottom: "1rem" }}>
            Stay informed with our latest updates, insights, and exclusive offers delivered straight to your inbox.
          </p>
          <div className="newsletter-input-wrap">
            <input type="email" placeholder="Your email" />
            <button className="btn btn-primary" style={{ padding: ".4rem 1rem", fontSize: ".85rem" }}>
              SignUp
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>
          &copy; <a href="/">Shema Architecture</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
