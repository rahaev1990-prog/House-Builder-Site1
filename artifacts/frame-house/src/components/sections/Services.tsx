import { motion } from "framer-motion";
import { Hammer, PenTool, CheckCircle2 } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Строительство и <span className="text-primary">проектирование</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Комплексный подход: от идеи до реализации. Работаем как с типовыми, так и с полностью индивидуальными задачами.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
              <Hammer className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Строительство под ключ</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Монтаж надежного фундамента",
                "Сборка прочного силового каркаса",
                "Устройство кровельной системы",
                "Многослойное утепление и пароизоляция",
                "Черновая и чистовая отделка фасада/интерьера"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
              <PenTool className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Индивидуальное проектирование</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Создание проекта с нуля под ваш образ жизни",
                "Адаптация и доработка любых типовых проектов",
                "Разработка конструктивных решений (КР)",
                "Архитектурный раздел (АР)",
                "Реалистичная 3D-визуализация будущего дома"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Additional partial services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            "Каркас + кровля", 
            "Тёплый контур", 
            "Отделочные работы", 
            "Инженерные системы"
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-sm font-medium text-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
