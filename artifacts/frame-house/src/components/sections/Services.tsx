import { motion } from "framer-motion";
import { Hammer, PenTool, Paintbrush, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    icon: Hammer,
    title: "Строительство под ключ",
    items: [
      "Монтаж надёжного фундамента",
      "Сборка прочного силового каркаса",
      "Устройство кровельной системы",
      "Многослойное утепление и пароизоляция",
      "Установка окон и дверей",
      "Разводка инженерных систем",
    ],
  },
  {
    icon: PenTool,
    title: "Индивидуальное проектирование",
    items: [
      "Создание проекта с нуля под ваш образ жизни",
      "Адаптация и доработка типовых проектов",
      "Разработка конструктивных решений (КР)",
      "Архитектурный раздел (АР)",
      "Реалистичная 3D-визуализация будущего дома",
      "Помощь с согласованием и документацией",
    ],
  },
  {
    icon: Paintbrush,
    title: "Отделка",
    items: [
      "Внутренняя черновая и чистовая отделка",
      "Монтаж напольных покрытий (ламинат, плитка)",
      "Поклейка обоев и покраска стен",
      "Внешняя отделка фасада (сайдинг, штукатурка, планкен)",
      "Устройство натяжных и подвесных потолков",
      "Установка дверей, плинтусов и доборных элементов",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Строительство, проектирование и{" "}
              <span className="text-primary">отделка</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Комплексный подход: от идеи до готового дома с отделкой. Работаем с типовыми и полностью индивидуальными задачами.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-12">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8 hover:bg-white/15 transition-colors flex flex-col"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary flex items-center justify-center mb-5 md:mb-6 shadow-lg shadow-primary/30">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4">{service.title}</h3>
                <ul className="space-y-2 md:space-y-3 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {[
            "Каркас + кровля",
            "Тёплый контур",
            "Отделочные работы",
            "Инженерные системы",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 text-center text-xs md:text-sm font-medium text-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
