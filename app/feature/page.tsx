import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Features – Shema Architecture" };

export default function FeaturePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="Our Features" breadcrumb="Features" />
      <main>
        <Feature />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
