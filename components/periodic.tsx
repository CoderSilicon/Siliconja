"use client";
import { ELEMENTS, CATEGORY_COLORS } from "@/data/elements";
import Link from "next/link";

interface ElementCardProps {
  element: {
    id: number;
    symbol: string;
    name: string;
    number: number;
    category: string;
    row: number;
    col: number;
  };
  colorClass: string;
}
function ElementCard({ element, colorClass }: ElementCardProps) {
  return (
    <Link href={`/element/${element.id}`}>
      <div
        className={`
         aspect-square p-2 
        relative flex flex-col justify-between items-start
        transition-all duration-200 hover:scale-95 cursor-pointer
        ${colorClass} text-white hover:z-10 
      `}
      >

        {/* Top: Atomic Number (Left Aligned & Monospaced) */}
        <div className="flex justify-between w-full">
          <span className="text-xs md:text-sm font-mono opacity-90 leading-none lexend-300">
            {element.number}
          </span>
        </div>

        {/* Center: Symbol (Left Aligned, mimicking the 'Si' logo) */}
        <div className="mt-auto mb-1">
          <span className="text-2xl md:text-3xl font-bold tracking-tighter leading-none block lexend-600">
            {element.symbol}
          </span>
        </div>

        {/* Bottom: Name (Uppercase & Micro-sized) */}
        <div className="w-full border-t hover:border-none border-white/20 pt-1">
          <p className="text-xs md:text-md truncate opacity-90 font-medium lexend-400">
            {element.name}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function PeriodicTable() {
  return (
    <div className="min-h-screen p-2 md:p-4 lg:p-8">
      <div className="overflow-x-auto">
        <div className="inline-grid gap-0.5 p-2 md:p-4 grid-cols-6 md:hidden ">
          {ELEMENTS.map((element) => (
            <div key={element.id} className="md:hidden">
              <ElementCard
                element={element}
                colorClass={
                  CATEGORY_COLORS[
                    element.category as keyof typeof CATEGORY_COLORS
                  ] || "bg-gray-100 border-gray-400 text-gray-900"
                }
              />
            </div>
          ))}
        </div>

        <div
          className="hidden md:inline-grid gap-0.5 p-4 rounded-lg shadow-lg"
          style={{
            gridTemplateColumns: "repeat(18, minmax(60px, 1fr))",
          }}
        >
          {ELEMENTS.map((element) => (
            <div
              key={element.id}
              style={{
                gridColumn: element.col,
                gridRow: element.row,
              }}
            >
              <ElementCard
                element={element}
                colorClass={
                  CATEGORY_COLORS[
                    element.category as keyof typeof CATEGORY_COLORS
                  ] || "bg-gray-100 border-gray-400 text-gray-900"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-12 max-w-5xl mx-auto">
        <div className="bg-white/80  p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 lexend-400">
            Element Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {Object.entries(CATEGORY_COLORS).map(([category, colorClass]) => (
              <Link href={`elementCatogories/${category}`} key={category}>
                <div
                  className="flex items-center gap-2 md:gap-3 p-2 md:p-3"
                >
                  <div
                    className={`w-5 h-5 md:w-6 md:h-6 ${colorClass} border border-white/20`}
                  />
                  <span className="text-xs md:text-sm text-gray-700 font-medium capitalize">
                    {category.replace("-", " ")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
