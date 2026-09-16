import React from 'react'

const Category_filter = () => {
  return (
    <>
    <div>
        <h3 className="font-bold text-slate-900 mb-5">Filter by category</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Toys &amp; Games
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Dresses
            </label>
            <span className="text-sm text-slate-400">6</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Hats &amp; Scarfs
            </label>
            <span className="text-sm text-slate-400">6</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Shoes &amp; Socks
            </label>
            <span className="text-sm text-slate-400">6</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> Sweaters
            </label>
            <span className="text-sm text-slate-400">7</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-0"/> T-shirts
            </label>
            <span className="text-sm text-slate-400">5</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Category_filter
