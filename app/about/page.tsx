import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About – Shema Architecture" };

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="About Us" breadcrumb="About" />
      <main>
        <About />
        <Feature />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
