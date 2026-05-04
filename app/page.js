"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function Home() {
  const projects = [
    { slug: "piyol", title: "Piyol", desc: "Премиальная косметика", image: "/previews/1.jpg" },
    { slug: "dostar", title: "Dostar Glass", desc: "Душевые перегородки", image: "/previews/2.jpg" },
    { slug: "logistics", title: "Логистика", desc: "Доставка из Китая", image: "/previews/3.jpg" },
    { slug: "buyer", title: "Баер", desc: "Брендовые вещи", image: "/previews/4.jpg" },
    { slug: "smg", title: "SMG Corp", desc: "Коммерческий ремонт", image: "/previews/5.jpg" },
    { slug: "kombucha", title: "OsKombucha", desc: "Напиток", image: "/previews/6.jpg" },
    { slug: "airy", title: "GetAiryOne", desc: "БАДы", image: "/previews/7.jpg" },
    { slug: "distinct", title: "Distinct Solutions", desc: "Брендинг", image: "/previews/8.jpg" },
    { slug: "fish", title: "Big Fly Big Fish", desc: "Рыбалка", image: "/previews/9.jpg" },
  ];

  const [active, setActive] = useState(projects[0]);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.07 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-white selection:text-black">
      <style>{`
        @font-face {
          font-family: "TT Fors";
          src: url("/fonts/TTFors.woff2") format("woff2");
        }

        .tt-fors {
          font-family: "TT Fors", Arial, sans-serif;
        }

        @keyframes pageFlip {
          0% { transform: rotateY(0deg) translateZ(0); opacity: 1; }
          45% { transform: rotateY(-115deg) translateZ(12px); opacity: .85; }
          100% { transform: rotateY(-180deg) translateZ(0); opacity: 0; }
        }

        @keyframes floatBook {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: .25; transform: scale(1); }
          50% { opacity: .55; transform: scale(1.08); }
        }

        .book-wrap {
          perspective: 1200px;
          animation: floatBook 5s ease-in-out infinite;
        }

        .book-glow {
          animation: glowPulse 5s ease-in-out infinite;
        }

        .page {
          transform-origin: left center;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>

      <nav className="tt-fors fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <a href="/" className="text-white font-medium uppercase tracking-[-0.03em] text-sm md:text-base">
            Strike Agency
          </a>

          <div className="hidden md:flex gap-8 text-white/55 text-sm">
            <a href="#cases" className="hover:text-white transition">Кейсы</a>
            <a href="/about" className="hover:text-white transition">О нас</a>
            <a href="#contact" className="hover:text-white transition">Контакты</a>
          </div>

          <a
            href="https://wa.me/message/MIBR7L4KUNPRM1"
            target="_blank"
            className="rounded-full border border-white/20 px-4 md:px-5 py-2 text-white text-sm hover:bg-white hover:text-black transition"
          >
            Написать нам
          </a>
        </div>

        <div className="mt-5 flex md:hidden justify-between text-white/50 text-sm border-t border-white/10 pt-4">
          <a href="#cases">Кейсы</a>
          <a href="/about">О нас</a>
          <a href="#contact">Контакты</a>
        </div>
      </nav>

      <section className="relative min-h-screen px-5 md:px-10 pt-36 md:pt-28 pb-16 flex flex-col justify-end overflow-hidden">
        <div className="absolute right-[-30%] top-[12%] w-[420px] md:w-[520px] h-[420px] md:h-[520px] rounded-full bg-white/[0.07] blur-[120px] book-glow" />

        <div className="book-wrap absolute top-[19%] left-1/2 -translate-x-1/2 md:right-10 md:left-auto md:translate-x-0 w-[260px] h-[210px] md:w-[360px] md:h-[280px]">
          <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.03] shadow-2xl overflow-hidden">
            <img src={projects[0].image} className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {projects.map((p, i) => (
            <div
              key={p.slug}
              className="page absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.05] overflow-hidden"
              style={{
                animation: "pageFlip 6s ease-in-out infinite",
                animationDelay: `${i * 0.55}s`,
                zIndex: projects.length - i,
              }}
            >
              <img src={p.image} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>

        <p className="text-sm md:text-base text-white/50 mb-6 max-w-xl relative z-10">
          Мы создаём сайты, креативы и digital-системы, которые выглядят дорого,
          вызывают доверие и приводят клиентов.
        </p>

        <h1 className="relative z-10 text-[19vw] md:text-[10vw] font-bold leading-[0.85] tracking-[-0.08em] max-w-[1100px]">
          Selected
          <br />
          <span className="text-white/35">Work</span>
        </h1>

        <a href="#cases" className="relative z-10 mt-10 text-white/35 hover:text-white transition text-xs md:text-sm uppercase tracking-[0.25em]">
          Scroll down ↓
        </a>
      </section>

      <section id="cases" className="relative px-5 md:px-10 pb-40">
        <div className="flex justify-between items-end border-t border-white/15 pt-6 pb-10">
          <div>
            <p className="text-white/40 text-sm">ПОРТФОЛИО</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em]">
              Кейсы и проекты
            </h2>
          </div>
        </div>

        <div className="sticky top-28 float-right hidden lg:block w-[420px] h-[520px] border border-white/10 bg-white/[0.03] overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              backgroundImage: `url(${active.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full w-full flex flex-col justify-between p-7">
            <div className="text-xs text-white/60 uppercase">Preview</div>
            <div>
              <p className="text-sm text-white/60 mb-3">{active.desc}</p>
              <h3 className="text-4xl font-semibold leading-none">{active.title}</h3>
            </div>
          </div>
        </div>

        <div className="lg:pr-[480px]">
          {projects.map((item, i) => (
            <a
              href={`/projects/${item.slug}`}
              key={item.slug}
              onMouseEnter={() => setActive(item)}
              className="group block md:flex items-center justify-between py-8 border-b border-white/10 cursor-pointer"
            >
              <div className="md:hidden mb-5 h-[220px] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-baseline gap-4 md:gap-5">
                <span className="text-sm text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="text-[13vw] md:text-7xl font-semibold tracking-[-0.07em] leading-none group-hover:text-white/35 transition">
                  {item.title}
                </span>
              </div>

              <span className="mt-4 md:mt-0 block text-white/25 group-hover:text-white transition">
                Смотреть →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-screen px-5 md:px-10 pt-28 pb-40 border-t border-white/10 overflow-hidden">
        <p className="text-white/40 mb-10 text-sm uppercase tracking-[0.2em]">Связаться с нами</p>

        <h2 className="max-w-[1200px] text-[16vw] md:text-[9vw] font-bold tracking-[-0.095em] leading-[0.82] mb-20">
          Давайте
          <br />
          сделаем
          <br />
          <span className="text-white/35">что-то</span>
          <br />
          мощное.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <a href="https://www.instagram.com/strike.target.agency" target="_blank" className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white hover:text-black transition duration-300">
            <p className="text-white/40 group-hover:text-black/50 text-sm mb-4">Instagram</p>
            <h3 className="text-2xl font-semibold">strike.target.agency</h3>
            <p className="mt-8 text-lg">Перейти →</p>
          </a>

          <a href="https://t.me/striketargetagency" target="_blank" className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white hover:text-black transition duration-300">
            <p className="text-white/40 group-hover:text-black/50 text-sm mb-4">Telegram</p>
            <h3 className="text-2xl font-semibold">Strike Target Agency</h3>
            <p className="mt-8 text-lg">Открыть канал →</p>
          </a>

          <a href="https://wa.me/message/MIBR7L4KUNPRM1" target="_blank" className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white hover:text-black transition duration-300">
            <p className="text-white/40 group-hover:text-black/50 text-sm mb-4">WhatsApp</p>
            <h3 className="text-2xl font-semibold">Написать нам</h3>
            <p className="mt-8 text-lg">Начать диалог →</p>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-white/40 text-sm mb-4">Адрес</p>
            <h3 className="text-2xl font-semibold leading-tight">
              Астана, Туран 46/1
              <br />
              БЦ Square
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-white/40 text-sm mb-4">Режим работы</p>
            <h3 className="text-2xl font-semibold leading-tight">
              10:00 — 19:00
              <br />
              по времени Астаны
            </h3>
          </div>
        </div>

        <div className="h-48 md:h-72" />
      </section>
    </main>
  );
}