"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function About() {
  const projects = [
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
    <main className="bg-[#050505] text-white min-h-screen">
      <style>{`
        @font-face {
          font-family: "TT Fors";
          src: url("/fonts/TTFors.woff2") format("woff2");
        }

        .tt-fors {
          font-family: "TT Fors", Arial, sans-serif;
        }

        @keyframes pageFlip {
          0% { transform: rotateY(0deg); opacity: 1; }
          45% { transform: rotateY(-115deg); opacity: .85; }
          100% { transform: rotateY(-180deg); opacity: 0; }
        }

        @keyframes floatBook {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .book-wrap {
          perspective: 1200px;
          animation: floatBook 5s ease-in-out infinite;
        }

        .page {
          transform-origin: left center;
        }
      `}</style>

      {/* NAV */}
      <nav className="tt-fors fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <a href="/" className="text-white uppercase text-sm">
            Strike Agency
          </a>

          <div className="hidden md:flex gap-8 text-white/55 text-sm">
            <a href="/">Кейсы</a>
            <a href="/about" className="text-white">О нас</a>
            <a href="/#contact">Контакты</a>
          </div>

          <a
            href="https://wa.me/message/MIBR7L4KUNPRM1"
            className="rounded-full border border-white/20 px-4 py-2 text-sm"
          >
            Написать нам
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen px-5 md:px-10 pt-36 pb-16 flex flex-col justify-end overflow-hidden">

        {/* GLOW */}
        <div className="absolute right-[-30%] top-[10%] w-[420px] h-[420px] bg-white/[0.07] blur-[120px]" />

        {/* BOOK */}
        <div className="book-wrap absolute top-[20%] left-1/2 -translate-x-1/2 w-[260px] h-[210px]">

          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
            <img src={projects[0]} className="w-full h-full object-cover opacity-70" />
          </div>

          {projects.map((img, i) => (
            <div
              key={i}
              className="page absolute inset-0 rounded-2xl overflow-hidden border border-white/10"
              style={{
                animation: "pageFlip 6s infinite",
                animationDelay: `${i * 0.5}s`,
                zIndex: 10 - i,
              }}
            >
              <img src={img} className="w-full h-full object-cover opacity-80" />
            </div>
          ))}

        </div>

        {/* TEXT */}
        <p className="text-white/40 mb-6 text-sm">О НАС</p>

        <h1 className="text-[14vw] md:text-[9vw] font-bold leading-[0.9] tracking-[-0.08em]">
          Мы делаем digital,
          <br />
          который выглядит
          <br />
          <span className="text-white/35">дорого.</span>
        </h1>

      </section>

      {/* CONTENT */}
      <section className="px-5 md:px-10 pb-40 max-w-[800px]">

        <p className="text-lg text-white/70 mb-6">
          Strike Agency — это команда, которая создаёт сайты, рекламу и визуальные решения,
          которые продают.
        </p>

        <p className="text-lg text-white/70 mb-6">
          Мы работаем быстро, делаем качественно и по доступной цене.
          Наша цель — чтобы каждый проект выглядел как премиальный продукт.
        </p>

        <p className="text-lg text-white/70">
          Мы не просто делаем дизайн — мы создаём результат.
        </p>

      </section>
    </main>
  );
}