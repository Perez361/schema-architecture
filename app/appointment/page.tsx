import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Appointment – Shema Architecture" };

export default function AppointmentPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="Book Appointment" breadcrumb="Appointment" />
      <main>
        <Appointment />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
