import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type ConfigKey = 'econom' | 'optimum' | 'maximum';

const CONFIGURATIONS: Record<ConfigKey, { title: string; subtitle: string; features: { name: string; desc: string }[] }> = {
  econom: {
    title: "Эконом",
    subtitle: "Базовый тёплый контур под вашу отделку",
    features: [
      { name: "Каркас", desc: "Деревянный 150×50 мм, шаг 600 мм, естественной влажности" },
      { name: "Утепление", desc: "Минеральная вата: стены 150мм, перекрытие 200мм, кровля 100мм" },
      { name: "Окна", desc: "ПВХ двухкамерный стеклопакет, белые, 1200×1400" },
      { name: "Двери", desc: "Входная металлическая (3 петли), межкомнатные — ламинированные" },
      { name: "Инженерия", desc: "Электрощиток, разводка кабеля (без розеток)" },
      { name: "Сантехника", desc: "Разводка труб, без установки приборов" },
      { name: "Внутренняя отделка", desc: "ОСП 9 мм, без чистовой отделки" },
      { name: "Внешняя отделка", desc: "Имитация бруса (окрашенная) или виниловый сайдинг" },
    ]
  },
  optimum: {
    title: "Оптимум",
    subtitle: "Золотая середина, дом готовый к проживанию",
    features: [
      { name: "Каркас", desc: "Камерной сушки 150×50 мм, шаг 600 мм, двойная обвязка" },
      { name: "Утепление", desc: "Базальтовая вата: стены 200мм, перекрытие 250мм, кровля 150мм" },
      { name: "Окна", desc: "ПВХ трёхкамерный, фурнитура в комплекте, 1200×1400" },
      { name: "Двери", desc: "Входная металлическая усиленная, межкомнатные — МДФ/ПВХ" },
      { name: "Инженерия", desc: "Щиток с автоматами, электрический тёплый пол" },
      { name: "Сантехника", desc: "Установка раковины, унитаза, душевой кабины" },
      { name: "Внутренняя отделка", desc: "Гипсокартон 12.5мм, грунтовка, финишная шпатлёвка" },
      { name: "Внешняя отделка", desc: "Фиброцементный сайдинг или имитация бруса камерной сушки" },
    ]
  },
  maximum: {
    title: "Максимум",
    subtitle: "Премиальные материалы и умные системы",
    features: [
      { name: "Каркас", desc: "Двойной каркас камерной сушки, шаг 400 мм, крепежи ROCKWOOL" },
      { name: "Утепление", desc: "PIR-плита + базальт: стены 250мм, перекрытие 300мм, кровля 200мм" },
      { name: "Окна", desc: "ПВХ трёхкамерный с i-стеклом, ручки Hoppe, рольставни" },
      { name: "Двери", desc: "Стальная с терморазрывом, межкомнатные — натуральный шпон" },
      { name: "Инженерия", desc: "Умный дом (база), щиток ABB, водяной тёплый пол, рекуперация" },
      { name: "Сантехника", desc: "Полный комплект Grohe/Hansgrohe, инсталляции" },
      { name: "Внутренняя отделка", desc: "Обои/покраска, ламинат 33 кл, розетки Legrand" },
      { name: "Внешняя отделка", desc: "Мокрый фасад или планкен из термодерева" },
    ]
  }
};

export function Configurations() {
  const [activeTab, setActiveTab] = useState<ConfigKey>('optimum');

  return (
    <section id="configurations" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Выберите вашу <span className="text-primary">комплектацию</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Мы разработали три сбалансированных варианта комплектаций, чтобы вы могли выбрать оптимальное соотношение цены и наполнения.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          {(Object.entries(CONFIGURATIONS) as [ConfigKey, typeof CONFIGURATIONS[ConfigKey]][]).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                "relative px-8 py-6 rounded-2xl text-left md:text-center transition-all duration-300 w-full md:w-64 border-2",
                activeTab === key 
                  ? "bg-white border-primary shadow-xl scale-105 z-10" 
                  : "bg-background border-border/50 hover:border-primary/50 text-muted-foreground hover:bg-white"
              )}
            >
              <h3 className={cn(
                "text-2xl font-bold font-display mb-1",
                activeTab === key ? "text-primary" : "text-foreground"
              )}>
                {config.title}
              </h3>
              <p className="text-sm font-medium text-balance">{config.subtitle}</p>
              
              {activeTab === key && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-b-2 border-r-2 border-primary rotate-45 hidden md:block" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-border max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {CONFIGURATIONS[activeTab].features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="mt-1 bg-primary/10 p-1.5 rounded-full h-fit flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{feature.name}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-amber-50 rounded-2xl flex items-start gap-4 border border-amber-100">
              <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                Комплектации являются базовыми ориентирами. По вашему желанию мы можем комбинировать элементы из разных комплектаций или добавить нестандартные решения. Итоговая смета формируется индивидуально.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
