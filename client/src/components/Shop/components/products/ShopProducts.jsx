import React from "react";
import "./ShopProducts.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../store/slices/cart";

const ShopProducts = ({ products }) => {
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
  return (
    <>
      {!products ? (
        <h1>loading</h1>
      ) : (
        <div className="ShopProducts grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {products.map((product, key) => (
            <div className="card bg-base-100 shadow-xl " key={key}>
              <figure>
                <img
                  className="shopProductImages"
                  src={`${process.env.REACT_APP_IMAGE_URL}${product.attributes.img.data.attributes.url}`}
                  alt={product.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  {product.attributes.title}
                </h2>
                <p className="align-center">${product.attributes.price.toFixed(2)}</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary" onClick={() => addToCart(product.attributes.img.data.attributes.url, product.attributes.title, product.attributes.price, product.id)}>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShopProducts;
