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
  useEffect(() => {
    document.title = "Строительство каркасных домов под ключ | КаркасПро — Москва и МО";

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", "КаркасПро — строительство тёплых каркасных домов под ключ за 3–6 месяцев. Проекты от 40 000 ₽/м². Фиксированная смета, официальный договор, гарантия 10 лет. Москва и Подмосковье.");
    setMeta("og:title", "Строительство каркасных домов под ключ | КаркасПро", true);
    setMeta("og:description", "Строим тёплые каркасные дома за 3–6 месяцев. Фиксированная цена, гарантия 10 лет. Москва и МО.", true);
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
