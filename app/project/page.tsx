import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects – Shema Architecture" };

export default function ProjectPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="Our Projects" breadcrumb="Projects" />
      <main>
        <Projects />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
