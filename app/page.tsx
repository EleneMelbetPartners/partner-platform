import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <CTA />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}