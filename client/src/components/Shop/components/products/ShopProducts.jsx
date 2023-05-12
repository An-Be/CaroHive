import React from 'react'
import products from '../../../../products';
import './ShopProducts.scss';
import Item from './Item/Item';
import { Link } from 'react-router-dom';

const ShopProducts = () => {
  return (
    <div className='ShopProducts grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
    {products.map((product, key) => (
      <Link to={`/product/${product.id}`} id={product.id}>
        <Item key={key} img={product.img} title={product.title} price={product.price} description={product.description} />
        </Link>
    ))}
    </div>
  )
}

export default ShopProducts