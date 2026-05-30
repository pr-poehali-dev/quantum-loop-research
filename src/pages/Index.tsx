import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            УСПЕХСТРОЙ
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Объекты</a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">О нас</a>
            <a href="#vacancies" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Вакансии</a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Контакты</a>
          </div>

          {/* Burger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black">
            {["#work|Объекты", "#about|О нас", "#vacancies|Вакансии", "#contact|Контакты"].map((item) => {
              const [href, label] = item.split("|");
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-sm uppercase tracking-widest border-b border-neutral-100 hover:text-red-600 hover:bg-neutral-50 transition-colors"
                >
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              УСПЕХ
              <br />
              СТРОЙ
            </h1>
            <p className="text-lg md:text-xl max-w-xl">
              Восстанавливаем стратегические объекты на новых территориях. Надёжность. Профессионализм. Результат.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#vacancies"
                className="px-6 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors text-center"
              >
                Смотреть вакансии
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-center"
              >
                Связаться
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/34ca3e87-7f56-4333-821d-8f345567b53d/files/a4fcb23e-f72a-405b-aea9-71920ade1730.jpg"
                alt="Строительство объектов"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600">100+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest mt-1 text-neutral-400">Объектов восстановлено</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600">500+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest mt-1 text-neutral-400">Специалистов в команде</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600">МО РФ</div>
              <div className="text-xs md:text-sm uppercase tracking-widest mt-1 text-neutral-400">Основной заказчик</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600">24/7</div>
              <div className="text-xs md:text-sm uppercase tracking-widest mt-1 text-neutral-400">Работаем без остановок</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-12 md:py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12">ОБЪЕКТЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/34ca3e87-7f56-4333-821d-8f345567b53d/files/02c2917f-6d21-4087-a3a1-8379d0693476.jpg"
                  alt="Комбинат имени Ильича"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Комбинат имени Ильича</h3>
              <p className="text-neutral-400 text-sm md:text-base">Восстановление крупнейшего металлургического комбината на новых территориях</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/34ca3e87-7f56-4333-821d-8f345567b53d/files/a6767594-0b08-4680-8bee-680062a0f0db.jpg"
                  alt="Военные аэродромы"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Военные аэродромы</h3>
              <p className="text-neutral-400 text-sm md:text-base">Реконструкция взлётно-посадочных полос и инфраструктуры военных аэродромов</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-800 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-white text-4xl md:text-6xl font-bold tracking-tighter text-center px-4">ОБЪЕКТЫ<br />ОБОРОНЫ</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Стратегические объекты</h3>
              <p className="text-neutral-400 text-sm md:text-base">Восстановление объектов особого и стратегического назначения по заданию МО РФ</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-8">О НАС</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/34ca3e87-7f56-4333-821d-8f345567b53d/files/a4fcb23e-f72a-405b-aea9-71920ade1730.jpg"
                  alt="УСПЕХстрой"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-white opacity-40"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-lg md:text-xl mb-4 md:mb-6">
                УСПЕХстрой — строительная компания, работающая на новых территориях России. Мы восстанавливаем объекты особого и стратегического назначения по заказу Министерства обороны Российской Федерации.
              </p>
              <p className="mb-4 md:mb-6 text-sm md:text-base">
                Наша миссия — создание рабочих мест для профессионалов своего дела. Мы ценим опытных специалистов и создаём условия для их роста и достойного заработка на важнейших стройках страны.
              </p>
              <p className="mb-4 md:mb-6 text-sm md:text-base">
                Среди наших ключевых объектов: металлургический комбинат имени Ильича, военные аэродромы и многие другие стратегические сооружения. Каждый проект мы выполняем с максимальной ответственностью и в установленные сроки.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8 md:mt-12">
                <div>
                  <h3 className="text-xs md:text-sm uppercase tracking-widest mb-2">Наши принципы</h3>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>Надёжность</li>
                    <li>Профессионализм</li>
                    <li>Соблюдение сроков</li>
                    <li>Безопасность труда</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm uppercase tracking-widest mb-2">Направления</h3>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>Промышленное строительство</li>
                    <li>Военная инфраструктура</li>
                    <li>Аэродромы и дороги</li>
                    <li>Восстановление объектов</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vacancies" className="py-12 md:py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">ВАКАНСИИ</h2>
          <p className="text-neutral-400 text-base md:text-xl mb-8 md:mb-12 max-w-2xl">Мы постоянно набираем опытных специалистов. Официальное трудоустройство, достойная оплата, жильё на объекте.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-neutral-700">
            {[
              { title: "Водители", desc: "Категории B, C, D, E. Перевозка персонала и грузов" },
              { title: "Строители", desc: "Каменщики, бетонщики, монтажники. Опыт от 2 лет" },
              { title: "Охранники", desc: "Охрана периметра объектов. Опыт в силовых структурах приветствуется" },
              { title: "Водители спецтехники", desc: "Самосвалы, КамАЗы, спецавтомобили МО" },
              { title: "Трактористы / Бульдозеристы", desc: "Работа на гусеничной и колёсной технике" },
              { title: "Крановщики", desc: "Башенные и автомобильные краны. Удостоверение обязательно" },
              { title: "Сварщики", desc: "Ручная, полуавтоматическая, аргонодуговая сварка" },
              { title: "Мотористы", desc: "Обслуживание и ремонт строительной техники и двигателей" },
              { title: "Ремонтный взвод", desc: "Слесари, электрики, механики. Полевые условия" },
              { title: "Автомойщики", desc: "Мойка и уход за техническим парком компании" },
              { title: "Шиномонтажники", desc: "Обслуживание колёс спецтехники и грузовых автомобилей" },
              { title: "Другие специалисты", desc: "Есть профессия и желание работать? Напишите нам!" },
            ].map((vac, i) => (
              <div key={i} className="border-b border-r border-neutral-700 p-4 md:p-6 hover:bg-red-600 transition-colors duration-200 cursor-pointer group">
                <div className="text-xs text-neutral-500 group-hover:text-white mb-2 uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{vac.title}</h3>
                <p className="text-neutral-400 group-hover:text-white text-xs md:text-sm">{vac.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            <a
              href="#contact"
              className="block sm:inline-block px-8 py-4 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center"
            >
              Откликнуться на вакансию
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-8">КОНТАКТЫ</h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8">Готовы трудоустроиться или обсудить сотрудничество? Заполните форму — мы свяжемся в течение дня.</p>
              <div className="space-y-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="w-28 text-xs uppercase tracking-widest opacity-70">Почта</span>
                  <a href="mailto:info@uspehstroy.ru" className="hover:underline text-sm md:text-base">info@uspehstroy.ru</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="w-28 text-xs uppercase tracking-widest opacity-70">Телефон</span>
                  <a href="tel:+78001234567" className="hover:underline text-sm md:text-base">+7 (800) 123-45-67</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="w-28 text-xs uppercase tracking-widest opacity-70">Заказчик</span>
                  <span className="text-sm md:text-base">Министерство обороны РФ</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-2">Имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-sm md:text-base"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest mb-2">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-sm md:text-base"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="vacancy" className="block text-xs uppercase tracking-widest mb-2">Интересующая вакансия</label>
                  <input
                    type="text"
                    id="vacancy"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-sm md:text-base"
                    placeholder="Например: сварщик, водитель..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-2">Сообщение</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-sm md:text-base"
                    placeholder="Расскажите о себе или задайте вопрос"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto mt-4 px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-center md:text-left">© 2025 УСПЕХстрой. Все права защищены.</p>
          <div className="flex space-x-6 md:space-x-8">
            <a href="#" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Telegram</a>
            <a href="#vacancies" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Вакансии</a>
            <a href="#contact" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
