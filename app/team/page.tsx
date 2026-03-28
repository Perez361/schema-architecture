import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Team – Shema Architecture" };

export default function TeamPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="Our Team" breadcrumb="Team" />
      <main>
        <Team />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
