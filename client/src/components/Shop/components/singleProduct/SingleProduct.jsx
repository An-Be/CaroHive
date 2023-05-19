import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../../../products";

const SingleProduct = () => {
  const { id } = useParams();

  const product = products.filter((product) => product.id == id);

  const [amount, setAmount] = useState(null);

  const handleAddToCart = () => {
  }

  return (
      <div className="card mt-3 card-side bg-base-100">
        <figure>
          <img src={product[0].img} alt={product[0].title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product[0].title}</h2>
          <p>{product[0].description}</p>
          <div className="card-actions justify-end">
          <span className="self-center">${product[0].price.toFixed(2)}</span>

              <select
                id="select-amount"
                className="select select-secondary w-full max-w-xs"
                onChange={(e) => setAmount(e.target.value)}
              >
                <option defaultValue>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
  );
};

export default SingleProduct;
