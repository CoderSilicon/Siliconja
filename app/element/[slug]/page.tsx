import { PeriodicData } from "@/data/elementData";
import { CATEGORY_COLORS, TEXT_COLOR_MAP } from "@/data/elements";


// export default async function ElementBrief({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = await params;

//   const element = PeriodicData.find((el) => {
//     return (
//       el.id.toString() === slug ||
//       el.symbol.toLowerCase() === slug.toLowerCase()
//     );
//   })!;

//   const getCategoryColor = (category: string) => {
//     let modifiedCategory = category.toLowerCase().replace(/\s+/g, "-");
//     return (
//       CATEGORY_COLORS[modifiedCategory as keyof typeof CATEGORY_COLORS] ||
//       "bg-slate-800"
//     );
//   };

//   const bgClass = getCategoryColor(element.category);

//   // High-quality placeholder for the element.
//   // Replace with dynamic Wikipedia image URLs or your own assets.
//   // const imageFallback = `https://placehold.co/800x800/1a1a1a/ffffff?text=${element.symbol}`;

//   const imageFallback = `https://placehold.co/800x800/1a1a1a/ffffff?text=${element.symbol}`;

//   return (
//     <div
//       className={`min-h-screen text-white ${bgClass} selection:bg-white/30 relative overflow-hidden select-none`}
//     >
//       <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 z-10">
//         {/* --- HERO SECTION --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
//           {/* Visual/Symbol Showcase */}
//           <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 bg-black/20 aspect-square group shadow-2xl">
//             <img
//               src={typeof element.image === "string" ? element.image : imageFallback}
//               className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-luminosity"
//             />
//             <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

//             <div className="absolute bottom-8 left-8 right-8">
//               <div className="flex justify-between items-end">
//                 <div>
//                   <span className="text-2xl lexend-400 opacity-60 block mb-2 tracking-widest">
//                     {element.id.toString().padStart(3, "0")}
//                   </span>
//                   <h1 className="text-[8rem] md:text-[10rem] leading-none lexend-800 tracking-tighter text-white drop-shadow-xl select-none">
//                     {element.symbol}
//                   </h1>
//                 </div>
//                 <div className="mb-4">
//                   <span className="px-4 py-1.5 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.3em] lexend-600 bg-white/10 backdrop-blur-md whitespace-nowrap shadow-sm">
//                     {element.category}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Core Details */}
//           <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8">
//             <h2 className="text-5xl md:text-7xl lexend-700 tracking-tight mb-6 drop-shadow-sm">
//               {element.name}
//             </h2>
//             <p className="text-xl md:text-2xl opacity-80 lexend-300 leading-relaxed max-w-3xl mb-12">
//               {element.desc}
//             </p>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {/* Atomic Mass */}
//               <div className="flex flex-col p-4 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-md">
//                 <span className="text-xs tracking-[0.2em] opacity-60 mb-2 lexend-300 text-slate-100">
//                   Atomic Mass
//                 </span>
//                 <div className="flex items-baseline gap-1">
//                   <span className="text-2xl lexend-400">
//                     {element.atomicMass}
//                   </span>
//                   <span className="text-sm lexend-300 opacity-60">u</span>
//                 </div>
//               </div>

//               {/* Bonding */}
//               <div className="flex flex-col p-4 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-md">
//                 <span className="text-xs tracking-[0.2em] opacity-60 mb-2 lexend-300 text-slate-100">
//                   Bonding
//                 </span>
//                 <div className="flex items-baseline gap-1">
//                   <span className="text-2xl lexend-400">
//                     {element.bondingType}
//                   </span>
//                 </div>
//               </div>

//               {/* Electronegativity */}
//               <div className="flex flex-col p-4 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-md">
//                 <span className="text-xs tracking-[0.2em] opacity-60 mb-2 lexend-300 text-slate-100">
//                   Electronegativity
//                 </span>
//                 <div className="flex items-baseline gap-1">
//                   <span className="text-2xl lexend-400">
//                     {element.electronegativity}
//                   </span>
//                 </div>
//               </div>

//               {/* Discovered */}
//               <div className="flex flex-col p-4 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-md">
//                 <span className="text-xs tracking-[0.2em] opacity-60 mb-2 lexend-300 text-slate-100">
//                   Discovered
//                 </span>
//                 <div className="flex items-baseline gap-1">
//                   <span className="text-2xl lexend-400">
//                     {element.discoveryYear}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- PROPERTIES BENTO GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {/* Physical Properties Card */}
//           <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 flex flex-col h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-lg">
//             <h3 className="text-xs tracking-[0.2em] lexend-300 opacity-60 mb-6 flex items-center gap-4">
//               Physical Properties
//             </h3>
//             <div className="flex flex-col gap-5 grow justify-center">
//               <div className="flex justify-between items-baseline group border-b border-white/5 pb-2 last:border-0 last:pb-0">
//                 <span className="text-sm opacity-60 lexend-300 group-hover:opacity-100 transition-opacity">
//                   Density
//                 </span>
//                 <span className="lexend-500 text-base text-right text-white/90">
//                   {`${element.density} g/cm³`}
//                 </span>
//               </div>

//               <div className="flex justify-between items-baseline group border-b border-white/5 pb-2 last:border-0 last:pb-0">
//                 <span className="text-sm opacity-60 lexend-300 group-hover:opacity-100 transition-opacity">
//                   Melting Point
//                 </span>
//                 <span className="lexend-500 text-base text-right text-white/90">
//                   {`${element.meltingPoint} K`}
//                 </span>
//               </div>

//               <div className="flex justify-between items-baseline group border-b border-white/5 pb-2 last:border-0 last:pb-0">
//                 <span className="text-sm opacity-60 lexend-300 group-hover:opacity-100 transition-opacity">
//                   Boiling Point
//                 </span>
//                 <span className="lexend-500 text-base text-right text-white/90">
//                   {`${element.boilingPoint} K`}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Atomic Properties Card */}
//           <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 flex flex-col h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-lg">
//             <h3 className="text-xs tracking-[0.2em] lexend-300 opacity-60 mb-6 flex items-center gap-4">
//               Atomic Properties
//             </h3>
//             <div className="flex flex-col gap-5 grow justify-center">
//               <div className="flex justify-between items-baseline group border-b border-white/5 pb-2 last:border-0 last:pb-0">
//                 <span className="text-sm opacity-60 lexend-300 group-hover:opacity-100 transition-opacity">
//                   Atomic Radius
//                 </span>
//                 <span className="lexend-500 text-base text-right text-white/90">
//                   {`${element.atomicRadius} pm`}
//                 </span>
//               </div>

//               <div>
//                 <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 block mb-2 lexend-600">
//                   Electron Configuration
//                 </span>
//                 <span className="lexend-400 text-xl tracking-wider text-white/90">
//                   {element.electronConfiguration}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Chemical Behavior Card */}
//           <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 flex flex-col h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-lg">
//             <h3 className="text-xs tracking-[0.2em] lexend-300 opacity-60 mb-6 flex items-center gap-4">
//               Chemical Behavior
//             </h3>
//             <div className="flex flex-col gap-5 grow justify-center">
//               <div className="flex justify-between items-baseline group border-b border-white/5 pb-2 last:border-0 last:pb-0">
//                 <span className="text-sm opacity-60 lexend-300 group-hover:opacity-100 transition-opacity">
//                   Oxidation States
//                 </span>
//                 <span className="lexend-500 text-base text-right text-white/90">
//                   {element.oxidationStates.join(", ")}
//                 </span>
//               </div>

//               <div className="flex justify-between items-baseline group border-b border-white/5 pb-2 last:border-0 last:pb-0">
//                 <span className="text-sm opacity-60 lexend-300 group-hover:opacity-100 transition-opacity">
//                   Reactivity
//                 </span>
//                 <span className="lexend-500 text-base text-right text-white/90">
//                   {element.reactivity}
//                 </span>
//               </div>

//               <div className="flex justify-between items-baseline group border-b border-white/5 pb-2 last:border-0 last:pb-0">
//                 <span className="text-sm opacity-60 lexend-300 group-hover:opacity-100 transition-opacity">
//                   Acid/Base
//                 </span>
//                 <span className="lexend-500 text-base text-right text-white/90">
//                   {element.acidBaseBehavior}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Wide Nuclear/Isotope Card */}
//           <div className="md:col-span-2 xl:col-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-colors duration-500">
//             <h3 className="text-xs uppercase tracking-[0.2em] lexend-700 opacity-60 mb-6 flex items-center gap-4">
//               Nuclear Data & Isotopes
//               <div className="grow h-px bg-white/10"></div>
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {element.isotopes.map((iso) => (
//                 <span
//                   key={iso}
//                   className="px-4 py-2 rounded-lg border border-white/10 bg-black/20 text-sm lexend-400 hover:border-white/40 hover:bg-white/10 transition-all cursor-default shadow-sm"
//                 >
//                   {iso}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default async function ElementBrief({
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
      "bg-zinc-800"
    );
  };

const getTextColor = (category: string) => {
  let modifiedCategory = category.toLowerCase().replace(/\s+/g, "-");
  // This ensures the full string exists in your code for Tailwind to find
  return TEXT_COLOR_MAP[modifiedCategory as keyof typeof TEXT_COLOR_MAP] || "text-zinc-100";
};

  const colorClass = getCategoryColor(element.category);
  const textClass = getTextColor(element.category);
  console.log(
    `Category: ${element.category}, Color Class: ${colorClass}, Text Class: ${textClass}`,
  );
  const imageFallback = `https://placehold.co/1200x800/0a0a0a/ffffff?text=${element.symbol}`;
  const displayImage =
    typeof element.image === "string" ? element.image : imageFallback;

  return (
    <div
      className={`min-h-screen bg-[#050505]  text-zinc-100 selection:bg-white/20 selection:text-white font-sans overflow-hidden`}
    >
      {/* Top Accent Line based on Category */}
      <div className={`h-1 w-full ${colorClass} opacity-80`} />

      <main className="relative max-w-400 mx-auto px-6 py-12 md:px-12 md:py-20 lg:py-32">
        {/* --- EDITORIAL HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24 lg:mb-40">
          {/* Typography & Context (Left) */}
          <div className="lg:col-span-5 flex flex-col z-20 order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-sm font-mono tracking-[0.3em] text-zinc-500">
                NO. {element.id.toString().padStart(3, "0")}
              </span>
              <span className="h-px w-12 bg-zinc-700" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                {element.category}
              </span>
            </div>

            <h1
              className={`text-[8rem] md:text-[12rem] lg:text-[14rem] font-black leading-none tracking-tighter mb-2 ml-[-0.05em] ${textClass} `}
            >
              {element.symbol}
            </h1>

            <h2
              className={`text-4xl md:text-5xl font-light tracking-wide ${textClass} mb-8 capitalize`}
            >
              {element.name}
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-zinc-400 font-light max-w-xl">
              {element.desc}
            </p>
          </div>

          {/* Photographic Showpiece (Right) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[16/10] w-full overflow-hidden rounded-sm group">
              {/* Image with cinematic blend modes */}
              <img
                src={displayImage}
                alt={element.name}
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out  opacity-70"
              />
              {/* Vignette & Gradient Overlays */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-[#050505] opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

              {/* Abstract overlay elements */}
              <div className="absolute bottom-6 right-6 text-right z-10 hidden md:block">
                <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
                  Crystal Structure
                </p>
                <p className="text-sm tracking-widest text-zinc-300 uppercase">
                  {element.crystalStructure}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- MINIMALIST DATA GRID --- */}
        <div className="border-t border-zinc-800 pt-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-12">
            Technical Specifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {/* Column 1: Core Physical */}
            <div className="flex flex-col gap-6">
              <DataRow label="Atomic Mass" value={`${element.atomicMass} u`} />
              <DataRow label="Density" value={`${element.density} g/cm³`} />
              <DataRow
                label="Melting Point"
                value={`${element.meltingPoint} K`}
              />
              <DataRow
                label="Boiling Point"
                value={`${element.boilingPoint} K`}
              />
            </div>

            {/* Column 2: Atomic */}
            <div className="flex flex-col gap-6">
              <DataRow
                label="Atomic Radius"
                value={`${element.atomicRadius} pm`}
              />
              <DataRow
                label="Electronegativity"
                value={element.electronegativity}
              />
              <DataRow
                label="Ionization Energy"
                value={element.ionizationEnergy}
              />
              <DataRow
                label="Electron Affinity"
                value={element.electronAffinity}
              />
            </div>

            {/* Column 3: Chemical Behavior */}
            <div className="flex flex-col gap-6">
              <DataRow label="Bonding Type" value={element.bondingType} />
              <DataRow
                label="Oxidation States"
                value={element.oxidationStates.join(", ")}
              />
              <DataRow label="Acid/Base" value={element.acidBaseBehavior} />
              <DataRow label="Reactivity" value={element.reactivity} />
            </div>

            {/* Column 4: Discovery & Config */}
            <div className="flex flex-col gap-6 lg:border-l lg:border-zinc-800 lg:pl-12">
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-2">
                  Electron Configuration
                </p>
                <p className="text-lg font-mono text-zinc-200 tracking-wider bg-zinc-900/50 p-3 rounded border border-zinc-800/50 inline-block">
                  {element.electronConfiguration}
                </p>
              </div>
              <DataRow label="Discovered By" value={element.discoveredBy} />
              <DataRow label="Year" value={element.discoveryYear} />
            </div>
          </div>
        </div>

        {/* --- ISOTOPES FOOTER --- */}
        <div className="mt-24 pt-12 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Known Isotopes
          </p>
          <div className="flex flex-wrap gap-3">
            {element.isotopes.map((iso) => (
              <span
                key={iso}
                className="text-xs font-mono tracking-widest text-zinc-400 border border-zinc-800 px-3 py-1.5 rounded-sm hover:text-white hover:border-zinc-600 transition-colors"
              >
                {iso}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Minimalist Sub-component for Data Rows
function DataRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between items-end border-b border-zinc-800/50 pb-2 group hover:border-zinc-500 transition-colors">
      <span className="text-[11px] uppercase tracking-[0.15em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
        {label}
      </span>
      <span className="text-base font-light text-zinc-200 text-right">
        {value}
      </span>
    </div>
  );
}
