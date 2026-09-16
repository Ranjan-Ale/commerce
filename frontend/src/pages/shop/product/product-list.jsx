import React from 'react'
import Product_card from './product-card'

const Product = () => {
  return (
    <>
    <div>
 
      {/* <!-- Top bar --> */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm font-semibold tracking-wide text-slate-500">SHOWING 1-12 OF 35 RESULTS</p>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none">
          <option>Default sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>
 
      {/* <!-- Product grid --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 
        {/* <!-- Card: Augue Nullam --> */}
        <Product_card/>
 
        {/* <!-- Card: Congue Quam (SALE) --> */}
        <div className="group relative border border-gray-200 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300">
          <span className="absolute top-4 left-4 z-10 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-md">SALE</span>
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
            <img src="src/assets/product-image-2.webp" alt="Congue Quam" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Congue Quam</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SWEATERS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$40.00 <span className="text-gray-400 font-normal line-through text-sm">$45.00</span></span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Cras Malesua --> */}
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
            <img src="src/assets/product-image-3.webp" alt="Cras Malesua" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Cras Malesua</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">HATS &amp; SCARFS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$20.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Curae Musa --> */}
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
            <img src="src/assets/product-image-4.webp" alt="Curae Musa" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Curae Musa</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SHOES &amp; SOCKS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$17.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Fames Primis --> */}
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
            <img src="src/assets/product-image-5.webp" alt="Fames Primis" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Fames Primis</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SWEATERS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$35.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Fusce Etiam --> */}
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
            <img src="src/assets/product-image-6.webp" alt="Fusce Etiam" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Fusce Etiam</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">DRESSES</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$35.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Fusce Phasellus --> */}
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
            <img src="src/assets/product-image-7.webp" alt="Fusce Phasellus" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Fusce Phasellus</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SWEATERS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$30.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Hendrerit Elitest --> */}
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
            <img src="src/assets/product-image-8.webp" alt="Hendrerit Elitest" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Hendrerit Elitest</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">HATS &amp; SCARFS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$20.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Iaculis Craso --> */}
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
            <img src="src/assets/product-image-9.webp" alt="Iaculis Craso" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Iaculis Craso</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">TOYS &amp; GAMES</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$40.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Interdu Torquent --> */}
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
            <img src="src/assets/product-image-10.webp" alt="Interdu Torquent" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Interdu Torquent</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">T-SHIRTS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$15.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Justo Finibus --> */}
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
            <img src="src/assets/product-image-11.webp" alt="Justo Finibus" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Justo Finibus</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">DRESSES</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$35.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
        {/* <!-- Card: Libero Semper --> */}
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
            <img src="src/assets/product-image-12.webp" alt="Libero Semper" className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-4 pb-4">
            <h3 className="font-bold text-slate-900">Libero Semper</h3>
            <p className="text-xs text-gray-400 tracking-wide mt-1">SWEATERS</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
            <span className="font-bold text-slate-900">$25.00</span>
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">Add to cart</button>
          </div>
        </div>
 
      </div>
 
      {/* <!-- Pagination --> */}
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-2">
          <button className="h-10 w-10 rounded-lg bg-amber-400 text-slate-900 font-bold text-sm">1</button>
          <button className="h-10 w-10 rounded-lg text-slate-700 font-semibold text-sm hover:bg-gray-100">2</button>
          <button className="h-10 w-10 rounded-lg text-slate-700 font-semibold text-sm hover:bg-gray-100">3</button>
        </div>
        <button className="inline-flex items-center gap-2 border border-gray-200 text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-gray-400 transition-colors duration-200">
          NEXT
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    </>
  )
}

export default Product
