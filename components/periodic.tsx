"use client"
import { ELEMENTS, CATEGORY_COLORS } from "@/data/elemnts"
import Link from "next/link"

interface ElementCardProps {
  element: {
    id: number
    symbol: string
    name: string
    number: number
    category: string
    row: number
    col: number
  }
  colorClass: string
}
function ElementCard({ element, colorClass }: ElementCardProps) {
  return (
    <Link href={`/element/${element.id}`}>
      <div
        className={`
        w-full aspect-square p-1 text-center flex flex-col items-center justify-center
        transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer
        ${colorClass} text-white 
      `}
      >
        <div className="hidden md:flex justify-start items-center">
          <div className="text-xs font-semibold leading-tight lexend-400 ">{element.number}</div>
        </div>
        <div className="text-lg md:text-md font-bold leading-tight lexend-600">{element.symbol}</div>
        <div className=" text-xs msm:text-[3px] leading-tight truncate lexend-300">{element.name}</div>
      </div>
    </Link>
  )
}

export default function PeriodicTable() {

  return (
    <div className="min-h-screen p-2 md:p-4 lg:p-8">
      <div className="overflow-x-auto">
        <div
          className="inline-grid gap-0.5 p-2 md:p-4 grid-cols-6 md:hidden "
        >
          {ELEMENTS.map((element) => (
            <div key={element.id} className="md:hidden">
              <ElementCard
                element={element}
                colorClass={
                  CATEGORY_COLORS[element.category as keyof typeof CATEGORY_COLORS] ||
                  "bg-gray-100 border-gray-400 text-gray-900"
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
                  CATEGORY_COLORS[element.category as keyof typeof CATEGORY_COLORS] ||
                  "bg-gray-100 border-gray-400 text-gray-900"
                }
              />
            </div>
          ))}
        </div>
      </div>

        <div className="mt-8 md:mt-12 max-w-5xl mx-auto">
          <div className="bg-white/80   border border-gray-200 p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 lexend-400">
              
              Element Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {Object.entries(CATEGORY_COLORS).map(([category, colorClass]) => (
                <div
                  key={category}
                  className="flex items-center gap-2 md:gap-3 p-2 md:p-3"
                >
                  <div className={`w-5 h-5 md:w-6 md:h-6 ${colorClass} border border-white/20`} />
                  <span className="text-xs md:text-sm text-gray-700 font-medium capitalize">
                    {category.replace("-", " ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}
