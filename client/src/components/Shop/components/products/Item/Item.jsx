import React from 'react';

const Item = ({img, title, price}) => {

  return (
    <div className="card bg-base-100 shadow-xl ">
    <figure><img className='shopProductImages' src={img} alt={title} /></figure>
    <div className="card-body">
      <h2 className="card-title justify-center self-center">{title}</h2>
      <span className="self-center">${price}</span>
      <div className="card-actions justify-center">
      </div>
    </div>
  </div>
  )
}

export default Item