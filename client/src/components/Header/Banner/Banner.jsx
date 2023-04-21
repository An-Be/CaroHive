import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className='Banner navbar h-5 bg-slate-50'>
        <h1 className='Banner__header'>Summer Sale coming Up!</h1>
        <span className='Banner__sale'>All items will be 20% off!</span>
    </div>
  )
}

export default Banner