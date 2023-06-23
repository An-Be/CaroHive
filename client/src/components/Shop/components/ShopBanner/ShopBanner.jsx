import React from 'react'

const ShopBanner = ({category}) => {
  return (
    <div className="ShopBanner hero max-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Shop {category}'s</h1>
      <p className="mb-5">Revamp your style with the latest trends in {category}'s clothing.</p>
    </div>
  </div>
</div>
  )
}

export default ShopBanner