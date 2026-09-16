import React from 'react'
import Hero from './hero'
import Product from './product/product-list'
import Filter from './filter/filter'

const Shop = () => {
  return (
    <>
     <Hero/>
     
      <section className="max-w-7xl mx-auto px-6 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
 
    {/* <!-- LEFT: products --> */}
    
 <Product/>
    {/* <!-- RIGHT: filters sidebar --> */}
   <Filter/>
 
  </div>
</section>

    </>
  )
}

export default Shop
