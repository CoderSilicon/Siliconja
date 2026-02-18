import { PeriodicData } from "@/data/elementData";
import { CATEGORY_COLORS } from "@/data/elements";

export default async function elementBrief({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const element = PeriodicData.find((el) => {
    return (
      el.id.toString() === slug ||
      el.symbol.toLowerCase() === slug.toLowerCase()
    );
  })!;
  const getCategoryColor = (category: string) => {
    let modifiedCategory = category.toLowerCase().replace(/\s+/g, "-");
    return (
      CATEGORY_COLORS[modifiedCategory as keyof typeof CATEGORY_COLORS] ||
      "bg-slate-800"
    );
  };

  const bgClass = getCategoryColor(element.category);

  return (
    <div className={`min-h-screen text-white ${bgClass} selection:bg-white/30`}>
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Identity & Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/20 bg-white/5 backdrop-blur-sm">
          
          {/* Symbol Box */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-white/20 relative">
            <span className="absolute top-4 left-6 text-xl lexend-400 opacity-60">
              {element.id.toString().padStart(2, '0')}
            </span>
            <h1 className="text-[10rem] leading-none lexend-800 tracking-tighter mix-blend-overlay opacity-90 select-none">
              {element.symbol}
            </h1>
            <div className="mt-4 px-4 py-1 border border-white/30 text-xs uppercase tracking-[0.2em] lexend-500">
              {element.category}
            </div>
          </div>

          {/* Name & Description */}
          <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-4xl md:text-6xl lexend-700 tracking-tight mb-2">
                {element.name}
              </h2>
              <p className="text-xl opacity-80 lexend-300 leading-relaxed max-w-2xl">
                {element.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-auto pt-8 border-t border-white/10">
              <StatItem label="Atomic Mass" value={`${element.atomicMass} u`} />
              <StatItem label="Bonding" value={element.bondingType} />
              <StatItem label="Electronegativity" value={element.electronegativity} />
              <StatItem label="Discovered" value={element.discoveryYear} />
            </div>
          </div>
        </div>

        {/* Technical Properties Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          <PropertyCard title="Physical Properties">
            <PropertyRow label="Density" value={`${element.density} g/cm³`} />
            <PropertyRow label="Melting Point" value={`${element.meltingPoint} K`} />
            <PropertyRow label="Boiling Point" value={`${element.boilingPoint} K`} />
          </PropertyCard>

          <PropertyCard title="Atomic Properties">
            <PropertyRow label="Atomic Radius" value={`${element.atomicRadius} pm`} />
            <div className="pt-4 mt-2 border-t border-white/10">
               <span className="text-xs uppercase tracking-widest opacity-60 block mb-1 lexend-600">Electron Config</span>
               <span className="lexend-400 text-lg tracking-wider">{element.electronConfiguration}</span>
            </div>
          </PropertyCard>

          <PropertyCard title="Chemical Behavior">
            <PropertyRow label="Oxidation States" value={element.oxidationStates.join(", ")} />
            <PropertyRow label="Reactivity" value={element.reactivity} />
            <PropertyRow label="Acid/Base" value={element.acidBaseBehavior} />
          </PropertyCard>

          <div className="md:col-span-2 xl:col-span-3 border border-white/20 bg-white/5 p-6 md:p-8">
            <h3 className="text-sm uppercase tracking-[0.2em] lexend-700 opacity-80 mb-6 border-b border-white/10 pb-2">
               Nuclear Data & Isotopes
            </h3>
            <div className="flex flex-wrap gap-2">
              {element.isotopes.map((iso) => (
                <span key={iso} className="px-3 py-1.5 border border-white/20 text-xs lexend-400 hover:bg-white/10 transition-colors">
                  {iso}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Reusable Components with Lexend Weights */

function StatItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <span className="block text-[10px] uppercase tracking-widest opacity-60 mb-1 lexend-600">{label}</span>
      <span className="block text-lg lexend-500">{value}</span>
    </div>
  );
}

function PropertyCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-white/20 bg-white/5 p-6 md:p-8 flex flex-col h-full hover:bg-white/10 transition-colors duration-300">
      <h3 className="text-sm uppercase tracking-[0.2em] lexend-700 opacity-80 mb-6 border-b border-white/10 pb-2">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}

function PropertyRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between items-baseline group">
      <span className="text-sm opacity-60 lexend-300 group-hover:opacity-100 transition-opacity">{label}</span>
      <span className="lexend-500 text-sm text-right">{value}</span>
    </div>
  );
}