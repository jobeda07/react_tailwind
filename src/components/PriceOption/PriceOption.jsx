import PropTypes from 'prop-types';
import React from 'react';

const PriceOption = ({option}) => {
 const {id, name,features,price}=option
 return (
  <div className='bg-blue-500 rounded-md p-4 flex flex-col text-white text-center'>
      <h2>
       <span className='text-3xl font-extrabold'>{price}</span>
       <span className='text-1xl'>/mon</span>
       </h2>
       <h3 my-2>{name}</h3>
        
        <div className='flex-grow'>
          <ul className='mt-5'>
            {
             features.map(feature=><li>{feature}</li>)
            }
          </ul>
        </div>
        <button className='mt-12 bg-white text-black font-bold rounded-lg px-12 py-2 hover:bg-blue-900'>Buy Now</button>
        
  </div>
 );
};
PriceOption.propTypes={
   option:PropTypes.object
}
export default PriceOption;