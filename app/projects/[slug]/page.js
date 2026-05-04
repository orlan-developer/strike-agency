const projects = {
  piyol: {
    title: "Piyol",
    category: "Премиальная косметика",
    description: "Видео-креативы и запуск рекламы",
    image: "/previews/1.jpg",
    link: "https://www.instagram.com/piyol.space",
    result: [
      "Создали 5 видео креативов для Meta Ads",
      "Запустили 2 рекламные кампании",
      "Получили 2 продажи за 1 день",
    ],
    outcome: "Креативы и реклама, которые продают",
  },
  dostar: {
    title: "Dostar Glass",
    category: "Душевые перегородки",
    description: "Маркетинг и креативы",
    image: "/previews/2.jpg",
    link: "https://www.instagram.com/dostar.glass",
    result: [
      "Создали 10 креативов",
      "Запустили 4 рекламные кампании",
      "Получили 2 продажи на следующий день",
      "Привлекли платежеспособную аудиторию",
    ],
    outcome: "Выход в премиум сегмент",
  },
  logistics: {
    title: "Логистика",
    category: "Доставка из Китая",
    description: "Сайт, бренд и SEO",
    image: "/previews/3.jpg",
    link: "https://transitplus.ru",
    result: [
      "Разработали анимационный сайт",
      "Создали брендбук",
      "Обновили логотип",
      "Оптимизировали SEO",
    ],
    outcome: "Сайт вышел в ТОП-20 поиска",
  },
  buyer: {
    title: "Баер",
    category: "Брендовые вещи",
    description: "Реклама и креативы",
    image: "/previews/4.jpg",
    link: null,
    result: [
      "Создали 20 видео креативов",
      "Получили 5 продаж за 1 день",
      "Сделали оборот 2 млн тенге",
    ],
    outcome: "Быстрые продажи через рекламу",
  },
  smg: {
    title: "SMG Corp",
    category: "Коммерческий ремонт",
    description: "Сайт + реклама",
    image: "/previews/5.jpg",
    link: "https://smgcorp.kz",
    result: [
      "Разработали продающий сайт",
      "Добавили лёгкую анимацию",
      "Запустили Google Ads",
      "Получили клиентов: AirAstana, BI Group",
    ],
    outcome: "Выход на крупных клиентов",
  },
  kombucha: {
    title: "OsKombucha",
    category: "Напиток",
    description: "Креативы, таргетинг и сайт",
    image: "/previews/6.jpg",
    link: "https://www.instagram.com/oskombucha/",
    result: [
      "Создали видео креативы с UGC блогерами",
      "Настроили таргетинг",
      "Разработали B2B сайт",
    ],
    outcome: "Рост узнаваемости и продаж",
  },
  airy: {
    title: "GetAiryOne",
    category: "БАДы",
    description: "Брендинг и интернет-магазин",
    image: "/previews/7.jpg",
    link: "https://getairyone.com",
    result: [
      "Разработали брендбук",
      "Создали упаковку",
      "Сделали интернет-магазин",
      "Оптимизировали UX для США",
    ],
    outcome: "Готовый продукт под рынок США",
  },
  distinct: {
    title: "Distinct Solutions",
    category: "Брендинг",
    description: "Сайт для агентства",
    image: "/previews/8.jpg",
    link: "https://distinct.solutions",
    result: [
      "Разработали коммерческий сайт",
      "Добавили анимацию",
      "Сделали визуальный стиль",
    ],
    outcome: "Современный сайт агентства",
  },
  fish: {
    title: "Big Fly Big Fish",
    category: "Рыбалка",
    description: "Интернет-магазин",
    image: "/previews/9.jpg",
    link: "https://www.bigflybigfish.com/store",
    result: [
      "Разработали коммерческий сайт",
      "Сделали удобный каталог",
      "Оптимизировали под продажи",
    ],
    outcome: "Готовый e-commerce продукт",
  },
};

function MatrixTitle({ text }) {
  return (
    <h1 className="text-[14vw] md:text-[8vw] font-bold leading-[0.85] tracking-[-0.08em]">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-[matrixIn_0.7s_ease-out_forwards]"
          style={{ animationDelay: `${i * 0.045}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <a href="/" className="text-white/50 hover:text-white">← Назад</a>
        <h1 className="mt-20 text-6xl font-bold">Кейс не найден</h1>
      </main>
    );
  }

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <style>{`
        @font-face {
          font-family: "TT Fors";
          src: url("/fonts/TTFors.woff2") format("woff2");
        }

        .tt-fors {
          font-family: "TT Fors", Arial, sans-serif;
        }

        @keyframes matrixIn {
          0% {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(8px);
            color: #22c55e;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
            color: white;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="tt-fors fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6 text-sm backdrop-blur-md">
        <a href="/" className="text-white font-medium uppercase">
          Strike Agency
        </a>

        <div className="hidden md:flex gap-8 text-white/55">
          <a href="/#cases" className="hover:text-white">Кейсы</a>
          <a href="/#about" className="hover:text-white">О нас</a>
          <a href="/#contact" className="hover:text-white">Контакты</a>
        </div>

        <a
          href="/#contact"
          className="group relative overflow-hidden rounded-full border border-white/20 px-5 py-2 text-white"
        >
          <span className="relative z-10">Написать нам</span>
          <span className="absolute inset-0 translate-y-full bg-white transition duration-300 group-hover:translate-y-0" />
          <span className="absolute inset-0 z-20 flex items-center justify-center translate-y-full text-black transition duration-300 group-hover:translate-y-0">
            Написать нам
          </span>
        </a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen px-6 md:px-10 pt-28 pb-16 flex flex-col justify-end">
        <p className="text-white/40 mb-6">{project.category}</p>
        <MatrixTitle text={project.title} />
        <p className="mt-8 text-xl text-white/50 max-w-xl">
          {project.description}
        </p>
      </section>

      {/* IMAGE + INFO */}
      <section className="px-6 md:px-10 pb-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 border-t border-white/10 pt-10">

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <img src={project.image} className="w-full h-auto object-contain" />
          </div>

          <div className="lg:sticky lg:top-28">
            <p className="text-white/35 text-sm mb-4">ЧТО СДЕЛАЛИ</p>

            <div className="space-y-5 text-xl text-white/65">
              {project.result.map((item, i) => (
                <div key={i}>
                  {String(i + 1).padStart(2, "0")} / {item}
                </div>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="mt-10 inline-flex items-center gap-3 text-white/70 hover:text-white transition"
              >
                Перейти на сайт →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className="px-6 md:px-10 py-24 border-t border-white/10">
        <p className="text-white/35 text-sm mb-6">РЕЗУЛЬТАТ</p>

        <h2 className="text-[12vw] md:text-[7vw] font-bold leading-[0.9]">
          {project.outcome}
        </h2>
      </section>
    </main>
  );
}