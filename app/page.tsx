"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const categorias = [
  { nombre: "Chocotejas", imagen: "/chocotejas.png", ruta: "/categoria/chocotejas" },
  { nombre: "Gomitas", imagen: "/gomitas.png", ruta: "/categoria/gomitas" },
  { nombre: "Brownies", imagen: "/brownies.png", ruta: "/categoria/brownies" },
  { nombre: "Tortas", imagen: "/tortas.png", ruta: "/categoria/tortas" },
  { nombre: "Accesorios", imagen: "/bong.png", ruta: "/categoria/accesorios" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-green-500/20 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Tripzy"
              width={45}
              height={45}
              className="rounded-full"
            />

            <span className="text-2xl font-black tracking-wide text-green-200 md:text-3xl">
              TripzyShop
            </span>
          </div>

          {/* MENÚ PC */}
          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#inicio" className="transition hover:text-green-300">
              Inicio
            </a>
            <a href="#catalogo" className="transition hover:text-green-300">
              Catálogo
            </a>
            <a href="#contacto" className="transition hover:text-green-300">
              Contacto
            </a>
          </nav>

          {/* BOTÓN HAMBURGUESA */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="h-0.5 w-7 bg-green-200"></span>
            <span className="h-0.5 w-7 bg-green-200"></span>
            <span className="h-0.5 w-7 bg-green-200"></span>
          </button>
        </div>

        {/* MENÚ CELULAR */}
        {menuOpen && (
          <nav className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-lg font-semibold text-gray-300">
              <a onClick={() => setMenuOpen(false)} href="#inicio">
                Inicio
              </a>
              <a onClick={() => setMenuOpen(false)} href="#catalogo">
                Catálogo
              </a>
              <a onClick={() => setMenuOpen(false)} href="#contacto">
                Contacto
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <Image
          src="/weed.png"
          alt="weed"
          width={180}
          height={180}
          className="absolute left-10 top-40 opacity-10"
        />

        <Image
          src="/weed.png"
          alt="weed"
          width={160}
          height={160}
          className="absolute bottom-20 right-10 rotate-12 opacity-10"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-7xl font-black uppercase tracking-widest text-green-200 md:text-[170px]"
          style={{
            textShadow: "0px 0px 25px rgba(34,197,94,0.35)",
          }}
        >
          TRIPZY
        </motion.h1>

        <p className="z-10 mt-6 max-w-2xl text-xl text-gray-400">
          Catálogo premium de brownies, chocotejas, gomitas, tortas y accesorios.
        </p>

        <a
          href="#catalogo"
          className="z-10 mt-10 rounded-full bg-green-300 px-10 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-green-200"
        >
          Ver catálogo
        </a>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="mx-auto max-w-7xl px-6 py-32">
        <h2 className="text-center text-6xl font-black">Catálogo</h2>

        <p className="mt-5 text-center text-gray-400">
          Selecciona una categoría para entrar.
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={categoria.ruta}>
                <div className="group overflow-hidden rounded-[35px] border border-white/10 bg-[#050505] transition hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src={categoria.imagen}
                      alt={categoria.nombre}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-4xl font-black">{categoria.nombre}</h3>
                    <p className="mt-3 text-lg text-gray-400">
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
      <section id="contacto" className="px-6 py-32 text-center">
        <h2 className="text-6xl font-black">Contacto</h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
          Pedidos personalizados, catálogo premium y atención directa.
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
          <a
            href="https://www.instagram.com/tripzy_420/"
            target="_blank"
            className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 transition hover:border-pink-400 hover:bg-white/10"
          >
            <Image src="/instagram.png" alt="Instagram" width={35} height={35} />
            <span className="text-lg font-semibold">Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@tripzy420"
            target="_blank"
            className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 transition hover:border-white hover:bg-white/10"
          >
            <Image src="/tiktok.png" alt="TikTok" width={35} height={35} />
            <span className="text-lg font-semibold">TikTok</span>
          </a>

          <a
            href="https://t.me/Perucho_Fit/"
            target="_blank"
            className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 transition hover:border-blue-400 hover:bg-white/10"
          >
            <Image src="/telegram.png" alt="Telegram" width={35} height={35} />
            <span className="text-lg font-semibold">Telegram</span>
          </a>

          <a
            href="https://wa.me/51922167377"
            target="_blank"
            className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 transition hover:border-green-400 hover:bg-white/10"
          >
            <Image src="/whatsapp.png" alt="WhatsApp" width={35} height={35} />
            <span className="text-lg font-semibold">WhatsApp</span>
          </a>
        </div>

        <p className="mt-12 text-gray-500">Arequipa, Perú</p>
        <p className="mt-20 text-gray-700">TripzyShop © 2026</p>
      </section>
    </main>
  );
}