import React from 'react'
import ShopBanner from './components/ShopBanner/ShopBanner';
import Sidebar from './components/Sidebar/Sidebar';
import ShopProducts from './components/products/ShopProducts';
import './Shop.scss';
import { Outlet, useParams } from 'react-router-dom';

export const Shop = () => {
  const {category} = useParams();
  return (
    <div className='Shop'>
      <ShopBanner className='ShopBanner' category={category} />
      <Sidebar className='ShopSidebar' />
      <ShopProducts className='ShopProducts' category={category} />
    </div>
  )
}
