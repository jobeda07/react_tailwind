import React, { useEffect, useState } from 'react';
import PriceOption from './PriceOption';

const PriceOptions = () => {
  const [options,setOptions]=useState([])
  useEffect ( () =>{
    fetch('priceOption.json')
    .then(res=>res.json())
    .then(data=>setOptions(data))
  }

  )
 return (
  <div className='m-12'>
    <h3 className='text-5xl'>Best Prices in the town</h3>
    <div className='grid md:grid-cols-3 gap-6'>
      {
      options.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
      }
    </div>
  </div>
 );
};

export default PriceOptions;