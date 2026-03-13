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
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Современный каркасный дом в лесу"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 backdrop-blur-sm text-sm font-semibold mb-6">
              Надёжно. Тепло. На века.
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance">
              Строим каркасные дома <span className="text-primary">под ключ</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-balance font-light leading-relaxed">
              От создания индивидуального проекта до счастливого заселения за 3-6 месяцев. Собственное производство, фиксированная смета и гарантия качества.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="lg" onClick={scrollToProjects}>
              Смотреть проекты
            </Button>
            <Button size="lg" variant="white" onClick={scrollToContact}>
              Получить бесплатный расчёт
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg">10+ лет</div>
                <div className="text-sm text-gray-300">опыта на рынке</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                <HomeIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg">500+ домов</div>
                <div className="text-sm text-gray-300">успешно сдано</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg">10 лет</div>
                <div className="text-sm text-gray-300">официальной гарантии</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
