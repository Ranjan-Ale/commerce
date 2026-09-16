import React from 'react'

const Product_card = () => {
  return (
    <>
    <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden rounded-t-2xl h-56 flex items-center justify-center p-6">
            <img src="src/assets/product-image-1.webp" alt="Augue Nullam" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Augue Nullam</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">HATS &amp; SCARFS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$25.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
    </>
  )
}

export default  Product_card
