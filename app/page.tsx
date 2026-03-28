import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Facts from "@/components/Facts";
import About from "@/components/About";
import Services from "@/components/Services";
import Feature from "@/components/Feature";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <main>
        <HeroCarousel />
        <Facts />
        <About />
        <Services />
        <Feature />
        <Projects />
        <Team />
        <Appointment />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
