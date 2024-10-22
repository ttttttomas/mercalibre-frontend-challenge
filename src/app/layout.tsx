import type {Metadata} from "next";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ProtoLibre - Prototipo de la tienda amarilla",
  description:
    "Proyecto para uso demostrativo y/o didáctico de la tienda amarilla usando la API de la misma. Creado con NextJs & TailwindCSS",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <header className="flex h-min w-full justify-center bg-yellow-200 py-3 text-black md:w-full">
          <Link className="cursor-pointer pr-5 text-xl font-bold md:text-3xl" href="/">
            ProtoLibre
          </Link>
          <form action="/items" className="flex">
            <input
              className="w-auto pl-3 md:w-[600px]"
              name="search"
              placeholder="Iphone, Macbook, Laptops, etc..."
              type="text"
            />
            <button className="ml-2 cursor-pointer bg-gray-200 px-2 py-1 md:ml-0" type="submit">
              Buscar
            </button>
          </form>
        </header>
        {children}
      </body>
    </html>
  );
}
