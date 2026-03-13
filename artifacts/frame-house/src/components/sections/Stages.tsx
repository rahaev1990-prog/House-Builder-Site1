import { motion } from "framer-motion";

const STAGES = [
  {
    num: "01",
    title: "Консультация и подбор",
    desc: "Обсуждаем ваши пожелания, выбираем типовой проект или создаем индивидуальный. Учитываем особенности участка."
  },
  {
    num: "02",
    title: "Договор и смета",
    desc: "Составляем подробную фиксированную смету до гвоздя. Подписываем официальный договор с графиком работ."
  },
  {
    num: "03",
    title: "Производство домокомплекта",
    desc: "Изготавливаем силовой каркас в заводских условиях из древесины камерной сушки. Точность деталей до миллиметра."
  },
  {
    num: "04",
    title: "Фундамент",
    desc: "Выезжаем на участок, готовим площадку и монтируем фундамент (свайно-винтовой, ЖБ сваи или УШП) за 1-3 дня."
  },
  {
    num: "05",
    title: "Монтаж каркаса и кровли",
    desc: "Собираем дом на участке. Монтируем стропильную систему и кровельное покрытие, устанавливаем ветрозащиту."
  },
  {
    num: "06",
    title: "Утепление и инженерия",
    desc: "Закладываем энергоэффективный утеплитель. Устанавливаем окна, двери. Разводим электрику, водоснабжение и отопление."
  },
  {
    num: "07",
    title: "Отделка и сдача",
    desc: "Выполняем внешнюю и внутреннюю отделку по выбранному дизайн-проекту. Вывозим мусор и торжественно вручаем ключи."
  }
];

export function Stages() {
  return (
    <section id="stages" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Понятные и прозрачные <span className="text-primary">этапы работ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Весь процесс разбит на логичные шаги. Вы всегда знаете, что происходит на стройплощадке.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 rounded-full hidden sm:block" />

          <div className="space-y-12">
            {STAGES.map((stage, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-0 relative ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 pl-20 sm:pl-0 ${isEven ? 'sm:pl-12 text-left' : 'sm:pr-12 sm:text-right'}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-3 sm:block">
                        <span className="text-primary font-display sm:hidden">{stage.num}.</span>
                        {stage.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{stage.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 sm:left-1/2 top-6 sm:top-1/2 -translate-y-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg z-10">
                    <span className="font-display font-bold text-xl text-primary">{stage.num}</span>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden sm:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
