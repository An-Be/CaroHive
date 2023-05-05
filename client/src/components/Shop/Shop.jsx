import React, { useEffect, useState } from 'react'
import ShopBanner from './components/ShopBanner/ShopBanner';
import Sidebar from './components/Sidebar/Sidebar';
import ShopProducts from './components/products/ShopProducts';
import './Shop.scss';
import axios from 'axios';

export const Shop = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*",{
          headers: {
            Authorization:`Bearer ${process.env.REACT_APP_API_TOKEN}`
          }
          
        });
        console.log(data.data.data)
        setProducts(data.data.data)
        data.data.data.map((product) => console.log(product.attributes?.title))
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
  return (
    <div className='Shop'>
      <ShopBanner className='ShopBanner' category='Women' />
      <Sidebar className='ShopSidebar' />
      <ShopProducts className='ShopProducts' products={products} />
    </div>
  )
}
