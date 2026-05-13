"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const categorias = [
  { nombre: "Chocotejas", imagen: "/chocotejas.png", ruta: "/categoria/chocotejas" },
  { nombre: "Gomitas", imagen: "/gomitas.png", ruta: "/categoria/gomitas" },
  { nombre: "Brownies", imagen: "/brownies.png", ruta: "/categoria/brownies" },
  { nombre: "Tortas", imagen: "/tortas.png", ruta: "/categoria/tortas" },
  { nombre: "Accesorios", imagen: "/bong.png", ruta: "/categoria/accesorios" },
];

function WeedLeaves({ theme }: { theme: string }) {
  const weedImage = theme === "green" ? "/weed.png" : "/weed-purple.png";

  return (
    <>
      <Image src={weedImage} alt="" width={130} height={130} className="absolute left-8 top-28 -rotate-[20deg] opacity-20" />
      <Image src={weedImage} alt="" width={90} height={90} className="absolute left-[18%] top-[38%] rotate-[15deg] opacity-20" />
      <Image src={weedImage} alt="" width={110} height={110} className="absolute right-8 top-32 rotate-[20deg] opacity-20" />
      <Image src={weedImage} alt="" width={85} height={85} className="absolute right-[18%] bottom-32 -rotate-[12deg] opacity-20" />
      <Image src={weedImage} alt="" width={120} height={120} className="absolute left-10 bottom-28 rotate-[15deg] opacity-20" />
      <Image src={weedImage} alt="" width={130} height={130} className="absolute right-10 bottom-24 -rotate-[20deg] opacity-20" />
    </>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("green");

  useEffect(() => {
    const lastTheme = localStorage.getItem("tripzy-theme");

    if (lastTheme === "green") {
      setTheme("purple");
      localStorage.setItem("tripzy-theme", "purple");
    } else {
      setTheme("green");
      localStorage.setItem("tripzy-theme", "green");
    }
  }, []);

  const isGreen = theme === "green";

  const mainColor = isGreen ? "text-green-200" : "text-purple-300";
  const strongColor = isGreen ? "text-green-400" : "text-purple-400";
  const buttonColor = isGreen
    ? "bg-green-300 hover:bg-green-200"
    : "bg-purple-400 hover:bg-purple-300";
  const borderColor = isGreen
    ? "hover:border-green-400/40"
    : "hover:border-purple-400/40";
  const shadowColor = isGreen
    ? "hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
    : "hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]";
  const glowColor = isGreen
    ? "rgba(34,197,94,0.4)"
    : "rgba(168,85,247,0.45)";

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* EFECTOS DE FONDO */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className={`absolute left-0 top-0 h-[500px] w-[500px] rounded-full blur-3xl ${
            isGreen ? "bg-green-500/20" : "bg-purple-500/20"
          }`}
        />

        <div
          className={`absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full blur-3xl ${
            isGreen ? "bg-green-500/20" : "bg-purple-500/20"
          }`}
        />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Tripzy"
              width={50}
              height={50}
              className="rounded-full"
            />

            <h1 className="text-2xl font-black tracking-wide md:text-4xl">
              <span className="text-white">Tripzy</span>
              <span className={strongColor}>Shop</span>
            </h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#inicio" className={`transition hover:${mainColor}`}>
              Inicio
            </a>
            <a href="#catalogo" className={`transition hover:${mainColor}`}>
              Catálogo
            </a>
            <a href="#contacto" className={`transition hover:${mainColor}`}>
              Contacto
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className={`h-0.5 w-7 ${isGreen ? "bg-green-200" : "bg-purple-300"}`} />
            <span className={`h-0.5 w-7 ${isGreen ? "bg-green-200" : "bg-purple-300"}`} />
            <span className={`h-0.5 w-7 ${isGreen ? "bg-green-200" : "bg-purple-300"}`} />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-lg font-semibold text-gray-300">
              <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
              <a href="#catalogo" onClick={() => setMenuOpen(false)}>Catálogo</a>
              <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        <WeedLeaves theme={theme} />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`relative z-10 text-7xl font-black uppercase tracking-widest md:text-[170px] ${mainColor}`}
          style={{
            textShadow: `0px 0px 30px ${glowColor}`,
          }}
        >
          TRIPZY
        </motion.h1>

        <p className="relative z-10 mt-6 max-w-2xl text-xl text-gray-400">
          Catálogo premium de brownies, chocotejas, gomitas, tortas y accesorios.
        </p>

        <a
          href="#catalogo"
          className={`relative z-10 mt-10 rounded-full px-10 py-4 text-lg font-bold text-black transition hover:scale-105 ${buttonColor}`}
        >
          Ver catálogo
        </a>
      </section>

      {/* CATÁLOGO */}
      <section
        id="catalogo"
        className="relative mx-auto min-h-screen max-w-7xl overflow-hidden px-6 py-32"
      >
        <WeedLeaves theme={theme} />

        <h2 className="relative z-10 text-center text-6xl font-black">
          Catálogo
        </h2>

        <p className="relative z-10 mt-5 text-center text-gray-400">
          Selecciona una categoría para entrar.
        </p>

        <div className="relative z-10 mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={categoria.ruta}>
                <div
                  className={`group overflow-hidden rounded-[35px] border border-white/10 bg-[#050505]/90 transition ${borderColor} ${shadowColor}`}
                >
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src={categoria.imagen}
                      alt={categoria.nombre}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-4xl font-black">
                      {categoria.nombre}
                    </h3>

                    <p className={`mt-3 text-lg ${isGreen ? "text-green-300" : "text-purple-300"}`}>
                      Entrar a categoría
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="relative min-h-screen overflow-hidden px-6 py-32 text-center"
      >
        <WeedLeaves theme={theme} />

        <h2 className="relative z-10 text-6xl font-black">
          Contacto
        </h2>

        <p className="relative z-10 mx-auto mt-6 max-w-2xl text-xl text-gray-400">
          Pedidos personalizados, catálogo premium y atención directa.
        </p>

        <div className="relative z-10 mt-16 flex flex-wrap items-center justify-center gap-10">
          <a
            href="https://www.instagram.com/tripzy_420/"
            target="_blank"
            className={`flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 transition ${borderColor} hover:bg-white/10`}
          >
            <Image src="/instagram.png" alt="Instagram" width={35} height={35} />
            <span className="text-lg font-semibold">Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@tripzy420"
            target="_blank"
            className={`flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 transition ${borderColor} hover:bg-white/10`}
          >
            <Image src="/tiktok.png" alt="TikTok" width={35} height={35} />
            <span className="text-lg font-semibold">TikTok</span>
          </a>

          <a
            href="https://t.me/Perucho_Fit/"
            target="_blank"
            className={`flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 transition ${borderColor} hover:bg-white/10`}
          >
            <Image src="/telegram.png" alt="Telegram" width={35} height={35} />
            <span className="text-lg font-semibold">Telegram</span>
          </a>

          <a
            href="https://wa.me/51922167377"
            target="_blank"
            className={`flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 transition ${borderColor} hover:bg-white/10`}
          >
            <Image src="/whatsapp.png" alt="WhatsApp" width={35} height={35} />
            <span className="text-lg font-semibold">WhatsApp</span>
          </a>
        </div>

        <p className="relative z-10 mt-12 text-gray-500">
          Arequipa, Perú
        </p>

        <p className={`relative z-10 mt-20 ${isGreen ? "text-green-700" : "text-purple-700"}`}>
          TripzyShop © 2026
        </p>
      </section>
    </main>
  );
}