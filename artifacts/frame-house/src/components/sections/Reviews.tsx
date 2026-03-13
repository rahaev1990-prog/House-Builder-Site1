import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Алексей Смирнов",
    city: "Московская область",
    project: "Проект «Семейный»",
    text: "Долго выбирали компанию, остановились на КаркасПро и не пожалели. Сдали дом на 2 недели раньше срока! Качество сборки отличное, зиму перезимовали — дома очень тепло, на отопление тратим копейки.",
    rating: 5
  },
  {
    name: "Елена и Дмитрий",
    city: "Ленинградская область",
    project: "Индивидуальный проект",
    text: "Ребята молодцы, разработали проект под наш узкий участок. Бригада работала аккуратно, мусор за собой убирали. Особенно порадовало, что смета не выросла ни на рубль с момента подписания.",
    rating: 5
  },
  {
    name: "Игорь Владимирович",
    city: "Тверская область",
    project: "Проект «Комфорт»",
    text: "Строили в комплектации Оптимум. Отличные окна, хорошая входная дверь уже в базе. Инженер приезжал контролировал этапы. Мелкие недочеты устраняли сразу без споров. Рекомендую.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Что говорят <span className="text-primary">наши клиенты</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Лучший показатель нашей работы — это счастливые семьи в теплых и надежных домах.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              <div className="mt-auto border-t border-border pt-4">
                <div className="font-bold text-lg font-display">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.city}</div>
                <div className="text-xs font-semibold text-primary mt-1 bg-primary/10 w-fit px-2 py-1 rounded">
                  {review.project}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
