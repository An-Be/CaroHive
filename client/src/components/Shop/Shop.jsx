import React, { useEffect, useState } from 'react'
import ShopBanner from './components/ShopBanner/ShopBanner';
import Sidebar from './components/Sidebar/Sidebar';
import ShopProducts from './components/products/ShopProducts';
import './Shop.scss';
import { useGetAllProductsQuery } from '../../store/slices/api';

export const Shop = () => {
  const [products, setProducts] = useState(null);

  const { data, error, isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    if (!isLoading) setProducts(data.data)
    console.log(`triggered`)
  },[isLoading])

  return (
    <div className='Shop'>
      <ShopBanner className='ShopBanner' category='Women' />
      <Sidebar className='ShopSidebar' />
      <ShopProducts className='ShopProducts' products={products} isLoading={isLoading} error={error} />
    </div>
  )
}
