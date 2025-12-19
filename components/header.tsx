import React from 'react'

const Header = () => {
  return (
          <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              {/* Si3 Logo */}
              <div className="relative">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-yellow-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg md:text-2xl">Si<sub className="text-xl lexend-400">3</sub></span>
                </div>
                
              </div>

              <div>
                <h1 className="text-2xl md:text-4xl font-bold lexend-600 leading-tight">
                  Silicoñ3 
                </h1>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5 lexend-400"> Encyclopedia of Elements</p>
              </div>
            </div>


          </div>
        </div>
      </div>
  )
}

export default Header