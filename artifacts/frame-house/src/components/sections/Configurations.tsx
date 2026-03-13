import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONFIGURATIONS, CONFIG_KEYS, type ConfigKey } from "@/data/configurations";

export function Configurations() {
  const [activeTab, setActiveTab] = useState<ConfigKey>("optimum");

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
              Три сбалансированных варианта для разного бюджета и потребностей. Любую комплектацию можно доработать под ваши пожелания.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          {CONFIG_KEYS.map((key) => {
            const config = CONFIGURATIONS[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "relative px-8 py-6 rounded-2xl text-left md:text-center transition-all duration-300 w-full md:w-72 border-2",
                  isActive
                    ? "bg-white border-primary shadow-xl scale-105 z-10"
                    : "bg-background border-border/50 hover:border-primary/50 text-muted-foreground hover:bg-white"
                )}
              >
                <h3
                  className={cn(
                    "text-2xl font-bold font-display mb-1",
                    isActive ? "text-primary" : "text-foreground"
                  )}
                >
                  {config.title}
                </h3>
                <p className="text-sm font-medium text-balance mb-3">{config.subtitle}</p>
                <div
                  className={cn(
                    "text-xl font-bold",
                    isActive ? config.color : "text-foreground"
                  )}
                >
                  {config.price}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{config.priceNote}</p>

                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-b-2 border-r-2 border-primary rotate-45 hidden md:block"
                  />
                )}
              </button>
            );
          })}
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
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">
                Комплектация{" "}
                <span className={CONFIGURATIONS[activeTab].color}>
                  «{CONFIGURATIONS[activeTab].title}»
                </span>
              </h3>
              <span className={cn("text-2xl font-bold", CONFIGURATIONS[activeTab].color)}>
                {CONFIGURATIONS[activeTab].price}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {CONFIGURATIONS[activeTab].features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="mt-1 bg-primary/10 p-1.5 rounded-full h-fit flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{feature.name}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-amber-50 rounded-2xl flex items-start gap-4 border border-amber-100">
              <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                Комплектации являются базовыми ориентирами. По вашему желанию мы можем
                комбинировать элементы из разных комплектаций или добавить нестандартные
                решения. Итоговая смета формируется индивидуально.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
