import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact – Shema Architecture" };

export default function ContactPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      <main>
        <section className="container-xxl py-5">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {[
              { icon: "fa-map-marker-alt", title: "Our Office", value: "Madina, Firestone, Accra" },
              { icon: "fa-phone-alt", title: "Call Us", value: "+233 55 426 5273" },
              { icon: "fa-envelope", title: "Email Us", value: "info@shemaarchitecture.com" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#F8F8F8",
                  padding: "2rem",
                  textAlign: "center",
                  borderRadius: 4,
                }}
              >
                <i
                  className={`fa ${item.icon}`}
                  style={{ fontSize: "2rem", color: "#91c9df", marginBottom: "1rem", display: "block" }}
                />
                <h4 style={{ color: "#152044", marginBottom: ".5rem" }}>{item.title}</h4>
                <p style={{ margin: 0 }}>{item.value}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            <input className="form-control" type="text" placeholder="Your Name" style={{ height: 55 }} />
            <input className="form-control" type="email" placeholder="Your Email" style={{ height: 55 }} />
            <input className="form-control" type="tel" placeholder="Your Phone" style={{ height: 55 }} />
            <input className="form-control" type="text" placeholder="Subject" style={{ height: 55 }} />
            <div style={{ gridColumn: "1 / -1" }}>
              <textarea className="form-control" rows={6} placeholder="Message" />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <button
                className="btn btn-primary"
                style={{ padding: ".85rem 3rem", fontSize: "1rem" }}
              >
                Send Message
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
