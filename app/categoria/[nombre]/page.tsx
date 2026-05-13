"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Product = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categorias: string;
};

export default function CategoriaPage() {
  const params = useParams();
  const router = useRouter();
  const categoria = params.nombre as string;

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data, error } = await supabase
      .from("productos")
      .select("*")
      .eq("categorias", categoria);

    if (error) {
      console.log(error);
      return;
    }

    setProducts(data || []);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <button
        onClick={() => router.back()}
        className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white hover:text-black"
      >
        ← Volver
      </button>

      <h1 className="mt-12 text-5xl font-black capitalize">
        {categoria}
      </h1>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <img
              src={product.imagen}
              alt={product.nombre}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">{product.nombre}</h2>

              <p className="mt-3 text-gray-300">
                {product.descripcion}
              </p>

              <p className="mt-5 text-2xl font-black text-fuchsia-400">
                S/ {product.precio}
              </p>

              <a
              href="https://wa.me/51922167377?text=Hola,%20quiero%20hacer%20un%20pedido%20en%20Tripzy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-white px-5 py-2 font-bold text-black hover:bg-[#7CFF8A] transition"
              >
                Pedir ahora
                </a>

            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}