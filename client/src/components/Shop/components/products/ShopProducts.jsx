import React from 'react'
import products from '../../../../products';
import './ShopProducts.scss';
import { useDispatch } from 'react-redux';

const ShopProducts = () => {
  return (
    <div className='ShopProducts grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
    {products.map((product, key) => (
        <div className="card bg-base-100 shadow-xl " key={key}>
        <figure><img className='shopProductImages' src={product.img} alt={product.title} /></figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{product.title}</h2>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default ShopProducts