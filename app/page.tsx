"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categorias = [
  {
    nombre: "Chocotejas",
    slug: "chocotejas",
    imagen: "/chocotejas.png",
  },
  {
    nombre: "Gomitas",
    slug: "gomitas",
    imagen: "/gomitas.png",
  },
  {
    nombre: "Brownies",
    slug: "brownies",
    imagen: "/brownies.png",
  },
  {
    nombre: "Tortas",
    slug: "tortas",
    imagen: "/tortas.png",
  },
  {
    nombre: "Accesorios",
    slug: "accesorios",
    imagen: "/bong.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/70 px-6 py-5 backdrop-blur-xl">

        <h1 className="text-3xl font-black tracking-tight text-green-200">
          TripzyShop
        </h1>

        <div className="flex gap-8 text-sm font-medium text-gray-300">
          <a href="#inicio" className="transition hover:text-green-300">
            Inicio
          </a>

          <a href="#catalogo" className="transition hover:text-green-300">
            Catálogo
          </a>

          <a href="#contacto" className="transition hover:text-green-300">
            Contacto
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"
      >

        {/* EFECTOS */}
        <div className="absolute left-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-green-500/20 blur-3xl" />

        <div className="absolute bottom-[-140px] right-[-140px] h-[420px] w-[420px] rounded-full bg-emerald-700/20 blur-3xl" />

        {/* HOJAS */}
        <img
          src="/weed.png"
          alt="weed"
          className="absolute left-12 top-28 w-16 rotate-[-18deg] opacity-20"
        />

        <img
          src="/weed.png"
          alt="weed"
          className="absolute left-40 top-52 w-10 rotate-[12deg] opacity-10"
        />

        <img
          src="/weed.png"
          alt="weed"
          className="absolute right-16 top-36 w-14 rotate-[20deg] opacity-20"
        />

        <img
          src="/weed.png"
          alt="weed"
          className="absolute right-44 top-72 w-12 rotate-[-10deg] opacity-10"
        />

        <img
          src="/weed.png"
          alt="weed"
          className="absolute left-24 bottom-28 w-14 rotate-[15deg] opacity-15"
        />

        <img
          src="/weed.png"
          alt="weed"
          className="absolute right-20 bottom-24 w-16 rotate-[-20deg] opacity-15"
        />

        {/* CONTENIDO */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >

          <h1 className="bg-gradient-to-r from-green-300 via-white to-emerald-400 bg-clip-text text-7xl font-black tracking-[-0.08em] text-transparent drop-shadow-2xl md:text-9xl">
            TRIPZY
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-400">
            Catálogo premium de brownies, chocotejas,
            gomitas, tortas y accesorios.
          </p>

          <a
            href="#catalogo"
            className="mt-10 inline-block rounded-full bg-green-300 px-10 py-4 font-bold text-black transition hover:scale-105 hover:bg-green-200"
          >
            Ver catálogo
          </a>

        </motion.div>
      </section>

      {/* CATALOGO */}
      <section
        id="catalogo"
        className="px-6 py-28"
      >

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-6xl font-black"
        >
          Catálogo
        </motion.h2>

        <p className="mt-6 text-center text-gray-400">
          Selecciona una categoría para entrar a su página.
        </p>

        <div className="mx-auto mt-20 grid max-w-7xl gap-10 md:grid-cols-2 xl:grid-cols-3">

          {categorias.map((categoria, index) => (
            <motion.div
              key={categoria.slug}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Link href={`/categoria/${categoria.slug}`}>

                <div className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black transition duration-500 hover:scale-[1.03] hover:border-green-400/30">

                  <div className="absolute inset-0 bg-green-400/0 transition duration-500 group-hover:bg-green-400/5" />

                  <div className="relative flex h-[320px] flex-col items-center justify-center p-10 text-center">

                    <Image
                      src={categoria.imagen}
                      alt={categoria.nombre}
                      width={120}
                      height={120}
                      className="mb-8 object-contain drop-shadow-2xl transition duration-500 group-hover:scale-110"
                    />

                    <h3 className="text-5xl font-black tracking-tight">
                      {categoria.nombre}
                    </h3>

                    <p className="mt-4 text-lg text-gray-400">
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
        className="px-6 py-32 text-center"
      >

        <h2 className="text-7xl font-black">
          Contacto
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
          Pedidos personalizados, catálogo premium y atención directa.
        </p>

        <div className="mx-auto mt-20 flex max-w-6xl flex-wrap items-center justify-center gap-8">

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/tripzy_420/"
            target="_blank"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900 px-8 py-5 transition hover:border-pink-400/40 hover:bg-zinc-800"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={42}
              height={42}
              className="object-contain"
            />

            <div className="text-left">
              <p className="text-sm text-gray-400">
                Instagram
              </p>

              <p className="text-lg font-semibold">
                @tripzy_420
              </p>
            </div>
          </a>

          {/* TIKTOK */}
          <a
            href="https://www.tiktok.com/@tripzy420"
            target="_blank"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900 px-8 py-5 transition hover:border-white/30 hover:bg-zinc-800"
          >
            <Image
              src="/tiktok.png"
              alt="TikTok"
              width={42}
              height={42}
              className="object-contain"
            />

            <div className="text-left">
              <p className="text-sm text-gray-400">
                TikTok
              </p>

              <p className="text-lg font-semibold">
                @tripzy420
              </p>
            </div>
          </a>

          {/* TELEGRAM */}
          <a
            href="https://t.me/Perucho_Fit/"
            target="_blank"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900 px-8 py-5 transition hover:border-blue-400/40 hover:bg-zinc-800"
          >
            <Image
              src="/telegram.png"
              alt="Telegram"
              width={42}
              height={42}
              className="object-contain"
            />

            <div className="text-left">
              <p className="text-sm text-gray-400">
                Telegram
              </p>

              <p className="text-lg font-semibold">
                TripzyShop
              </p>
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/51922167377"
            target="_blank"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900 px-8 py-5 transition hover:border-green-400/40 hover:bg-zinc-800"
          >
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={42}
              height={42}
              className="object-contain"
            />

            <div className="text-left">
              <p className="text-sm text-gray-400">
                WhatsApp
              </p>

              <p className="text-lg font-semibold">
                +51 922 167 377
              </p>
            </div>
          </a>

        </div>

        <p className="mt-16 text-gray-500">
         Perú
        </p>

        <p className="mt-6 text-gray-700">
          Todos los derechos reservados - TripzyShop © 2026
        </p>

      </section>
    </main>
  );
}