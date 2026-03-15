import { useState } from "react";
import { motion } from "framer-motion";
import { type ConfigKey } from "@/data/configurations";
import { ConfigTabs, ConfigFeatures } from "@/components/ui/config-panel";
import { Button } from "@/components/ui/button";

export function Configurations() {
  const [activeTab, setActiveTab] = useState<ConfigKey>("optimum");

  return (
    <section id="configurations" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Выберите вашу <span className="text-primary">комплектацию</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Три сбалансированных варианта для разного бюджета. Любую комплектацию можно доработать под ваши пожелания.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Tab selector */}
            <div className="mb-4">
              <ConfigTabs activeConfig={activeTab} onSelect={setActiveTab} />
            </div>

            {/* Feature panel */}
            <ConfigFeatures activeConfig={activeTab} />

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="flex-1">
                <Button size="lg" className="w-full">Получить расчёт по этой комплектации</Button>
              </a>
              <a href="#contact" className="flex-1 sm:flex-none">
                <Button size="lg" variant="outline" className="w-full">Задать вопрос</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
