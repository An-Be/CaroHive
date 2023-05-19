import React from 'react'

const Item = ({img, title, price, description}) => {
  return (
    <div className="card bg-base-100 shadow-xl ">
    <figure><img className='shopProductImages' src={img} alt={title} /></figure>
    <div className="card-body">
      <h2 className="card-title justify-center">{title}</h2>
      <div className="card-actions justify-center">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  )
}

export default Item