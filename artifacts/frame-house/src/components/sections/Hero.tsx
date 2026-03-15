import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, Home as HomeIcon } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Современный каркасный дом в лесу"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/92 via-gray-900/70 to-gray-900/20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-10 md:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 backdrop-blur-sm text-xs md:text-sm font-semibold mb-4 md:mb-6">
              Надёжно. Тепло. На века.
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-4 md:mb-6">
              Строим каркасные дома <span className="text-primary">под ключ</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-7 md:mb-8 max-w-2xl font-light leading-relaxed">
              От создания индивидуального проекта до счастливого заселения за 3–6 месяцев. Собственное производство, фиксированная смета и гарантия качества.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 md:mb-12"
          >
            <Button size="lg" onClick={scrollToProjects} className="w-full sm:w-auto text-base">
              Смотреть проекты
            </Button>
            <Button size="lg" variant="white" onClick={scrollToContact} className="w-full sm:w-auto text-base">
              Получить бесплатный расчёт
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-6 md:pt-8 border-t border-white/10"
          >
            {[
              { icon: Clock, value: "10+ лет", label: "опыта на рынке" },
              { icon: HomeIcon, value: "500+ домов", label: "успешно сдано" },
              { icon: ShieldCheck, value: "10 лет", label: "официальной гарантии" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-white">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-sm sm:text-lg leading-tight">{value}</div>
                  <div className="text-xs sm:text-sm text-gray-300 leading-tight">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
