import React from 'react'
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../store/slices/cart";
import './ShopProducts.scss';
import Item from './Item/Item';
import { Link } from 'react-router-dom';

const ShopProducts = ({ products, isLoading, error, category }) => {
  const dispatch = useDispatch();
  const addToCart = (url, title, price, id) => {
    const productToAddToCart = {
      id,
      title,
      price : Number(price.toFixed(2)),
      url
    }
    console.log(url)
    dispatch(addProduct({productToAddToCart}))
  }


const ShopProducts = ({category}) => {
  return (
  <>
        {isLoading ? (
        <h1>loading</h1>
      ) : error ? (
        <div>Oh, no there was an error</div>
      ) : products ? (
    <div className='ShopProducts grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
    {products.map((product, key) => (
      <Link to={`/product/${product.id}`} id={product.id}>
        <Item key={key} price={product.attributes.price.toFixed(2)} img={`${process.env.REACT_APP_IMAGE_URL}${product.attributes.img.data.attributes.url}`} title={product.attributes.title} description={product.attributes.description} />
        </Link>
    ))}
    </div>
     ): null}
    </>
  )
}

export default ShopProducts;
