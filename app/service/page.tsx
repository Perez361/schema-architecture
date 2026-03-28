import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services – Shema Architecture" };

export default function ServicePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="Our Services" breadcrumb="Services" />
      <main>
        <Services />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
