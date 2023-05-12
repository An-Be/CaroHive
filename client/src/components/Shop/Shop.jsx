import React from 'react'
import ShopBanner from './components/ShopBanner/ShopBanner';
import Sidebar from './components/Sidebar/Sidebar';
import ShopProducts from './components/products/ShopProducts';
import './Shop.scss';

export const Shop = () => {
  return (
    <div className='Shop'>
      <ShopBanner className='ShopBanner' category='Women' />
      <Sidebar className='ShopSidebar' />
      <ShopProducts className='ShopProducts' />
    </div>
  )
}
