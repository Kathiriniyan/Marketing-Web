import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BusinessGoal from "@/components/BusinessGoal";
import CounterUp from "@/components/CounterUp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <BusinessGoal />
      <CounterUp />
      <Contact />
      <Footer />
    </main>
  );
}
