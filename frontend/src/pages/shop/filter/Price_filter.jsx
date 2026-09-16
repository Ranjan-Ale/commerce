import React from 'react'

const Price_filter = () => {
  return (
   <>
   <div>
        <h3 className="font-bold text-slate-900 mb-5">Filter by price</h3>
 
        {/* <!-- range slider (visual) --> */}
        <div className="relative h-1 bg-gray-200 rounded-full mb-4">
          <div className="absolute left-[5%] right-[10%] top-0 h-1 bg-amber-400 rounded-full"></div>
          <span className="absolute left-[5%] -top-2 h-5 w-5 rounded-full bg-white border-2 border-amber-400 -translate-x-1/2"></span>
          <span className="absolute right-[10%] -top-2 h-5 w-5 rounded-full bg-white border-2 border-amber-400 translate-x-1/2"></span>
        </div>
        <p className="text-sm text-slate-500 mb-8">Price: <span className="font-semibold text-slate-900">$15 - $50</span></p>
 
        <h3 className="font-bold text-slate-900 mb-5">Filter by color</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-white"></span> White
            </label>
            <span className="text-sm text-slate-400">6</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-gray-400"></span> Gray
            </label>
            <span className="text-sm text-slate-400">3</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-amber-100"></span> Beige
            </label>
            <span className="text-sm text-slate-400">11</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-yellow-400"></span> Yellow
            </label>
            <span className="text-sm text-slate-400">3</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-orange-500"></span> Orange
            </label>
            <span className="text-sm text-slate-400">3</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-red-500"></span> Red
            </label>
            <span className="text-sm text-slate-400">8</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-purple-500"></span> Purple
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-blue-500"></span> Blue
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-green-700"></span> Green
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <span className="h-5 w-5 rounded-full border border-gray-300 bg-black"></span> Black
            </label>
            <span className="text-sm text-slate-400">1</span>
          </li>
        </ul>
      </div>
   </>
  )
}

export default Price_filter
