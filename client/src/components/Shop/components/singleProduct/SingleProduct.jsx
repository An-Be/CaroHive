import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../../../products";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../store/slices/cart";
import { useGetSingleProductQuery } from "../../../../store/slices/api";
import { selectCartData } from "../../../../store/selectors";


const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const {data, error, isLoading} = useGetSingleProductQuery({id});

  const {products} = useSelector((state) => selectCartData(state))

  console.log(products)


  useEffect(() => {
    if (!isLoading) setProduct(data.data)
  },[isLoading])


  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const addToCart = (id, title, price) => {
    const productToAddToCart = {
      id,
      title,
      price: Number(price.toFixed(2)),
      url : `${process.env.REACT_APP_IMAGE_URL}${product.attributes.img.data.attributes.url}`,
      amount
    };
    dispatch(addProduct({ productToAddToCart }));
  };

  return (
    <>
    {isLoading ? (
        <h1>loading</h1>
      ) : error ? (
        <div>Oh, no there was an error</div>
      ) : product ? (
      <div className="card mt-3 card-side bg-base-100">
        <figure>
          <img src={`${process.env.REACT_APP_IMAGE_URL}${product?.attributes?.img?.data?.attributes?.url}`} alt={product.attributes.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.attributes.title}</h2>
          <p>{product.attributes.description}</p>
          <div className="card-actions justify-end">
          <span className="self-center">${product.attributes.price.toFixed(2)}</span>

              <select
                id="select-amount"
                className="select select-secondary w-full max-w-xs"
                onChange={(e) => setAmount(e.target.value)}
                value={products.amount}
              >
                <option defaultValue>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            <button className="btn btn-primary" onClick={() => addToCart(product.id, product.attributes.title, product.attributes.price )}>Add To Cart</button>
          </div>
        </div>
      </div>
       ) : null}
      </>
  );
};

export default SingleProduct;
