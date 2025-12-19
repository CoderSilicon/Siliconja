import { PeriodicData } from "@/data/elementData";
import { CATEGORY_COLORS } from "@/data/elemnts";

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
      "bg-gray-700"
    );
  };

  return (
    <div
      className={`min-h-screen py-8 text-white ${getCategoryColor(
        element.category
      )}`}
    >
      <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
        {/* Hero Section - Large Symbol */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center  shadow-xl py-8 px-12 ">
            <span className="font-mono text-8xl font-bold tracking-tight sm:text-9xl lexend-600">
              {element.symbol}
            </span>
          </div>
          <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl lexend-300">
            {element.name}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Atomic Number: {element.id}</span>
            <span className="text-muted-foreground/50">•</span>
            <span>Atomic Mass: {element.atomicMass} amu</span>
          </div>
          <div className="mt-3 flex justify-center gap-2">
            <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
              {element.category}
            </div>
            <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
              {element.bondingType}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 p-6">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            {element.desc}
          </p>
        </div>

        {/* Two Column Layout for Properties */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Discovery Info */}
          <div className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Discovery</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Year</span>
                <span className="font-medium">{element.discoveryYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discovered by</span>
                <span className="font-medium text-right">
                  {element.discoveredBy}
                </span>
              </div>
            </div>
          </div>

          {/* Physical Properties */}
          <div className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Physical Properties</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Density</span>
                <span className="font-medium font-mono text-xs">
                  {element.density} g/cm³
                </span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Melting Point</span>
                <span className="font-medium font-mono text-xs">
                  {element.meltingPoint} K
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Boiling Point</span>
                <span className="font-medium font-mono text-xs">
                  {element.boilingPoint} K
                </span>
              </div>
            </div>
          </div>

          {/* Atomic Properties */}
          <div className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Atomic Properties</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Atomic Radius</span>
                <span className="font-medium font-mono text-xs">
                  {element.atomicRadius} pm
                </span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Electronegativity</span>
                <span className="font-medium">{element.electronegativity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Electron Configuration
                </span>
                <span className="font-medium font-mono text-xs">
                  {element.electronConfiguration}
                </span>
              </div>
            </div>
          </div>

          {/* Chemical Properties */}
          <div className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Chemical Properties</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Reactivity</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{element.reactivity}</span>
                  <span className="text-xs text-muted-foreground">
                    ({element.reactivityType})
                  </span>
                </div>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Acid/Base</span>
                <span className="font-medium">{element.acidBaseBehavior}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Oxidation States</span>
                <span className="font-medium font-mono text-xs">
                  {element.oxidationStates.join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Energy Properties */}
          <div className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Energy Properties</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Ionization Energy</span>
                <span className="font-medium font-mono text-xs">
                  {element.ionizationEnergy}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Electron Affinity</span>
                <span className="font-medium font-mono text-xs">
                  {element.electronAffinity}
                </span>
              </div>
            </div>
          </div>

          {/* Isotopes */}
          <div className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Isotopes & Isobars</h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="mb-2 block text-muted-foreground">
                  Isotopes
                </span>
                <div className="flex flex-wrap gap-2">
                  {element.isotopes.map((isotope, i) => (
                    <div key={i} className="font-mono text-xs">
                      {isotope}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="mb-2 block text-muted-foreground">
                  Isobars
                </span>
                <div className="flex flex-wrap gap-2">
                  {element.isobars.map((isobar, i) => (
                    <div key={i} className="font-mono text-xs">
                      {isobar}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
