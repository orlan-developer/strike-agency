"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function AboutPage() {
  const images = [
    "/previews/1.jpg",
    "/previews/2.jpg",
    "/previews/3.jpg",
    "/previews/4.jpg",
    "/previews/5.jpg",
    "/previews/6.jpg",
    "/previews/7.jpg",
    "/previews/8.jpg",
    "/previews/9.jpg",
  ];

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
            <a href="/#cases" className="hover:text-white transition">Кейсы</a>
            <a href="/about" className="text-white transition">О нас</a>
            <a href="/#contact" className="hover:text-white transition">Контакты</a>
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
          <a href="/#cases">Кейсы</a>
          <a href="/about">О нас</a>
          <a href="/#contact">Контакты</a>
        </div>
      </nav>

      <section className="relative min-h-screen px-5 md:px-10 pt-36 md:pt-28 pb-16 flex flex-col justify-end overflow-hidden">
        <div className="absolute right-[-30%] top-[12%] w-[420px] md:w-[520px] h-[420px] md:h-[520px] rounded-full bg-white/[0.07] blur-[120px] book-glow" />

        <div className="book-wrap absolute top-[19%] left-1/2 -translate-x-1/2 md:right-10 md:left-auto md:translate-x-0 w-[260px] h-[210px] md:w-[360px] md:h-[280px]">
          <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.03] shadow-2xl overflow-hidden">
            <img src={images[0]} className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {images.map((img, i) => (
            <div
              key={img}
              className="page absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.05] overflow-hidden"
              style={{
                animation: "pageFlip 6s ease-in-out infinite",
                animationDelay: `${i * 0.55}s`,
                zIndex: images.length - i,
              }}
            >
              <img src={img} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>

        <p className="text-white/40 mb-6 text-sm uppercase tracking-[0.2em] relative z-10">
          О нас
        </p>

        <h1 className="relative z-10 text-[18vw] md:text-[9vw] font-bold leading-[0.85] tracking-[-0.08em] max-w-7xl">
          Мы делаем
          <br />
          digital,
          <br />
          который
          <br />
          выглядит
          <br />
          <span className="text-white/35">дорого.</span>
        </h1>
      </section>

      <section className="px-5 md:px-10 py-24 border-t border-white/10 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-white/35 text-sm mb-5 uppercase tracking-[0.2em]">
            Философия
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.06em] leading-[0.95]">
            Не просто красиво. А чтобы работало.
          </h2>
        </div>

        <div className="text-xl md:text-2xl text-white/60 leading-relaxed">
          Strike Agency — это студия, которая соединяет дизайн, маркетинг,
          креативы и разработку в один понятный результат: сайт, который
          вызывает доверие и помогает бизнесу получать клиентов.
          <br /><br />
          Мы не делаем дизайн ради дизайна. Каждый экран, каждый текст и каждая
          анимация должны усиливать продукт и вести пользователя к действию.
        </div>
      </section>

      <section className="px-5 md:px-10 py-24 border-t border-white/10">
        <p className="text-white/35 text-sm mb-8 uppercase tracking-[0.2em]">
          Наш подход
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-white/35 text-sm mb-8">01</p>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.05em] mb-5">
              Быстро
            </h3>
            <p className="text-white/55 leading-relaxed">
              Мы работаем без лишней бюрократии. Быстро собираем структуру,
              дизайн, креативы и запуск, чтобы бизнес не терял время.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-white/35 text-sm mb-8">02</p>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.05em] mb-5">
              Доступно
            </h3>
            <p className="text-white/55 leading-relaxed">
              Мы делаем премиальную подачу по доступной цене. Без раздутых
              бюджетов и лишних этапов, которые не влияют на результат.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-white/35 text-sm mb-8">03</p>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.05em] mb-5">
              На продажи
            </h3>
            <p className="text-white/55 leading-relaxed">
              Мы думаем о заявках, доверии, понятном пути клиента и сильной
              презентации продукта. Красота должна приносить деньги.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 py-24 border-t border-white/10 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-white/35 text-sm mb-5 uppercase tracking-[0.2em]">
            Миссия
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.06em] leading-[0.95]">
            Делать сильный digital доступным для бизнеса.
          </h2>
        </div>

        <div className="text-xl md:text-2xl text-white/60 leading-relaxed">
          Мы хотим, чтобы компании могли запускать сайты, рекламу и визуальные
          системы, которые выглядят современно, быстро выходят в работу и при
          этом не стоят как большой корпоративный проект.
          <br /><br />
          Наш стиль — это тёмная премиальная эстетика, крупная типографика,
          чистая структура и анимации, которые создают ощущение дорогого
          продукта.
        </div>
      </section>

      <section className="px-5 md:px-10 py-24 border-t border-white/10">
        <p className="text-white/35 text-sm mb-6 uppercase tracking-[0.2em]">
          Strike Agency
        </p>

        <h2 className="text-[13vw] md:text-[7vw] font-bold tracking-[-0.08em] leading-[0.9] max-w-6xl">
          Быстро.
          <br />
          Доступно.
          <br />
          <span className="text-white/35">Сильнее, чем ожидают.</span>
        </h2>

        <a
          href="https://wa.me/message/MIBR7L4KUNPRM1"
          target="_blank"
          className="mt-12 inline-flex rounded-full border border-white/20 px-7 py-4 text-white hover:bg-white hover:text-black transition"
        >
          Обсудить проект →
        </a>
      </section>
    </main>
  );
}