import { Home } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                Каркас<span className="text-primary">Про</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Строительство современных, теплых и надежных каркасных домов под ключ. Работаем по официальному договору с гарантией 10 лет.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li><a href="#why-us" className="text-gray-400 hover:text-primary transition-colors">Преимущества</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Проекты домов</a></li>
              <li><a href="#configurations" className="text-gray-400 hover:text-primary transition-colors">Комплектации</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Услуги</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Клиентам</h4>
            <ul className="space-y-3">
              <li><a href="#stages" className="text-gray-400 hover:text-primary transition-colors">Этапы работы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Вопрос-ответ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="tel:+78005553535" className="text-white font-bold hover:text-primary transition-colors block text-lg">
                  +7 (800) 555-35-35
                </a>
              </li>
              <li>info@karkaspro.ru</li>
              <li>г. Москва, ул. Строителей, д. 12, офис 45</li>
              <li>Ежедневно: 09:00 - 20:00</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} СК «КаркасПро». Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
