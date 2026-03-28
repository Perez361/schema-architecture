import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Testimonials – Shema Architecture" };

const testimonials = [
  {
    name: "John Mensah",
    role: "Homeowner",
    text: "Shema Architecture transformed our vision into a stunning reality. Their attention to detail and creative approach exceeded all our expectations.",
  },
  {
    name: "Ama Owusu",
    role: "Business Owner",
    text: "The team delivered exceptional structural drawings on time and within budget. Their professionalism and expertise are unmatched in the industry.",
  },
  {
    name: "Kwame Asante",
    role: "Property Developer",
    text: "The 3D animations they produced helped us sell our units faster. Clients could visualize the finished product before construction even began.",
  },
];

export default function TestimonialPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="Testimonials" breadcrumb="Testimonials" />
      <main>
        <section className="container-xxl py-5">
          <div className="section-heading fade-up visible" style={{ marginBottom: "3rem" }}>
            <h4 className="section-title">Testimonials</h4>
            <h1 style={{ color: "#152044", marginTop: ".5rem", fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
              What Our Clients Say About Us
            </h1>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#F8F8F8",
                  padding: "2rem",
                  borderRadius: 4,
                  position: "relative",
                }}
              >
                <i
                  className="fa fa-quote-left"
                  style={{ fontSize: "2rem", color: "#91c9df", marginBottom: "1rem", display: "block" }}
                />
                <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#152044",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#91c9df",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong style={{ color: "#152044" }}>{t.name}</strong>
                    <p style={{ margin: 0, fontSize: ".85rem", color: "#91c9df" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
