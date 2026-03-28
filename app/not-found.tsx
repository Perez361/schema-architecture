import Link from "next/link";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function NotFound() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <section
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "4rem 1.5rem",
          }}
        >
          <h1
            style={{
              fontSize: "8rem",
              fontFamily: "'Teko', sans-serif",
              color: "#152044",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            404
          </h1>
          <h2 style={{ color: "#152044", marginBottom: "1rem" }}>Page Not Found</h2>
          <p style={{ marginBottom: "2rem", maxWidth: 500 }}>
            The page you are looking for does not exist. It may have been moved or deleted.
          </p>
          <Link href="/" className="btn btn-primary" style={{ padding: ".75rem 2rem" }}>
            Back To Home
          </Link>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
