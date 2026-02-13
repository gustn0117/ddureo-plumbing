import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Inspection from "@/components/Inspection";
import Guarantee from "@/components/Guarantee";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import BeforeAfter from "@/components/BeforeAfter";
import Coverage from "@/components/Coverage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <BeforeAfter />
      <Process />
      <Inspection />
      <Guarantee />
      <Coverage />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
