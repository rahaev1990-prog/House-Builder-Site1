import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stages } from "@/components/sections/Stages";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Configurations } from "@/components/sections/Configurations";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  // Basic SEO setup for single page
  useEffect(() => {
    document.title = "Строительство каркасных домов под ключ | КаркасПро";
    
    // Manage meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Строительство современных, теплых каркасных домов под ключ за 3-6 месяцев. Проекты, комплектации, фиксированная смета и гарантия 10 лет.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Stages />
        <Projects />
        <Services />
        <Configurations />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
