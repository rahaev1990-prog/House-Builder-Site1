import { Home } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 md:pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">

          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                Каркас<span className="text-primary">Про</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Строительство современных, теплых и надежных каркасных домов под ключ. Работаем по официальному договору с гарантией 10 лет.
            </p>
            <address className="not-italic text-sm text-gray-400">
              <a href="tel:+78005553535" className="text-white font-bold hover:text-primary transition-colors block text-base mb-1">
                +7 (800) 555-35-35
              </a>
              <a href="mailto:info@karkaspro.ru" className="hover:text-primary transition-colors">info@karkaspro.ru</a>
            </address>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Навигация</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#why-us" className="text-gray-400 hover:text-primary transition-colors text-sm">Преимущества</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors text-sm">Проекты домов</a></li>
              <li><a href="#configurations" className="text-gray-400 hover:text-primary transition-colors text-sm">Комплектации</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Услуги</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Клиентам</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#stages" className="text-gray-400 hover:text-primary transition-colors text-sm">Этапы работы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Отзывы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Вопрос-ответ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Режим работы</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm">
              <li>Ежедневно: <span className="text-white">09:00 – 20:00</span></li>
              <li>г. Москва, ул. Строителей,<br />д. 12, офис 45</li>
              <li className="pt-1">
                <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded">
                  Бесплатный выезд на участок
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} СК «КаркасПро». Все права защищены.</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
