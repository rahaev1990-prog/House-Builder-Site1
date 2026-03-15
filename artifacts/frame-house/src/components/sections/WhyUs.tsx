import { motion } from "framer-motion";
import { Clock, PiggyBank, Factory, Leaf, FileCheck, MapPin } from "lucide-react";

const REASONS = [
  {
    icon: Clock,
    title: "Быстрые сроки строительства",
    description: "Дом под ключ за 90-180 дней, без простоев и задержек благодаря отлаженным процессам."
  },
  {
    icon: PiggyBank,
    title: "Фиксированная цена",
    description: "Смета фиксируется в договоре и не меняется в процессе строительства ни при каких условиях."
  },
  {
    icon: Factory,
    title: "Собственное производство",
    description: "Каркас и стеновые панели изготавливаем сами на точном оборудовании, без переплат посредникам."
  },
  {
    icon: Leaf,
    title: "Энергоэффективность",
    description: "Тепло зимой, прохладно летом. Современные утеплители экономят до 40% на отоплении."
  },
  {
    icon: FileCheck,
    title: "Официальный договор",
    description: "Работаем строго по закону. Все гарантии юридически закреплены в договоре подряда."
  },
  {
    icon: MapPin,
    title: "Бесплатный выезд",
    description: "Инженер приедет на ваш участок для замера, оценки грунта и первичной консультации абсолютно бесплатно."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Почему с нами проще строить <span className="text-primary">каркасный дом</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Мы берем на себя все заботы: от первого эскиза до вручения ключей. Вы получаете готовый результат без нервов и переплат.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
