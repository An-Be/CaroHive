import React, { useEffect, useState } from 'react'
import ShopBanner from './components/ShopBanner/ShopBanner';
import Sidebar from './components/Sidebar/Sidebar';
import ShopProducts from './components/products/ShopProducts';
import { useParams } from 'react-router-dom';
import './Shop.scss';
import { useGetAllProductsQuery } from '../../store/slices/api';

export const Shop = () => {
  const [products, setProducts] = useState(null);

  const { data, error, isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    if (!isLoading) setProducts(data.data)
    console.log(`triggered`)
  },[isLoading])

  const {category} = useParams();

  return (
    <div className='Shop'>
      <ShopBanner className='ShopBanner' category={category} />
      <Sidebar className='ShopSidebar' />
      <ShopProducts className='ShopProducts' products={products} isLoading={isLoading} error={error} category={category} />
    </div>
  )
}
