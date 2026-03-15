import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Сколько стоит построить каркасный дом?",
    a: "Стоимость зависит от площади, сложности проекта и выбранной комплектации. В среднем, цена за квадратный метр теплого контура начинается от 40 000 рублей. Для точного расчета мы готовим подробную смету после выбора проекта."
  },
  {
    q: "Какой срок строительства дома под ключ?",
    a: "Весь цикл работ — от заливки фундамента до сдачи дома с чистовой отделкой — занимает в среднем от 3 до 6 месяцев в зависимости от площади дома и сезона."
  },
  {
    q: "Из каких материалов вы строите?",
    a: "Мы используем только сертифицированные материалы. Силовой каркас строим из строганой доски камерной сушки (исключает усадку и деформации). Для утепления применяем экологичную минеральную вату плитного типа высокой плотности."
  },
  {
    q: "Делаете ли вы фундамент?",
    a: "Да, строительство фундамента входит в перечень наших услуг. В зависимости от типа грунта на вашем участке мы монтируем свайно-винтовой, забивные ЖБ сваи или УШП (утепленную шведскую плиту)."
  },
  {
    q: "Работаете ли вы по всей России?",
    a: "Основной регион нашей работы — Москва, Московская область, Санкт-Петербург и Ленинградская область. Строительство в других регионах обсуждается индивидуально."
  },
  {
    q: "Можно ли строить каркасный дом зимой?",
    a: "Да, одно из главных преимуществ каркасной технологии — отсутствие «мокрых» процессов (кроме фундамента). Строить каркасный дом можно круглый год, причем зимний лес считается более сухим и качественным."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Частые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Ответы на самые популярные вопросы о строительстве каркасных домов
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border rounded-2xl overflow-hidden transition-colors duration-300",
                openIndex === index ? "bg-card border-primary/30 shadow-md" : "bg-card/50 border-border hover:border-primary/30"
              )}
            >
              <button
                className="w-full px-5 md:px-6 py-4 md:py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-sm md:text-base lg:text-lg pr-4">{faq.q}</span>
                <div className={cn(
                  "flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-transform duration-300",
                  openIndex === index ? "bg-primary text-white rotate-180" : "bg-muted text-foreground"
                )}>
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 md:px-6 pb-5 pt-0 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-border/50">
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
