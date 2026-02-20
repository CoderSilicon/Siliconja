"use client";

const Header = () => {
  return (
    <div className="sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative">
              <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                <span className="lexend-300 font-bold text-lg md:text-2xl">
                 [Si<sup className="text-xl">3</sup>]
                </span>
              </div>
            </div>
            <div>
              {/* Text color shifted to black to match the reference image theme */}
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight lexend-300">
                Silicønja
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
