import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import apiClient from '../api/apiClient';
import { faArrowLeft, faShoppingCart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductDetail() {

  const params = useParams();
  const location = useLocation();
  const product = location.state?.product;


  return (
    <div className="flex justify-center items-center min-h-[85vh]">
      <div className="flex h-[45vh] w-[75vh] gap-10">
        <img
          className="max-h-full object-contain rounded-xl justify-baseline align-baseline"
          src={product.imageUrl}
          alt={product.name}
        />
        <div className='flex flex-col gap-1.5'>
          <button className='font-display text-[15px]'>
            <FontAwesomeIcon icon={faArrowLeft}/>
            <span>Back to All Products</span> 
          </button>
          <h1 className='text-primary font-display font-bold text-3xl'>{product.name}</h1>
          <p className='font-display text-xl font-semibold'>{product.description}</p>
          <h2 className='text-primary font-display font-bold text-2xl'>{"$" + product.price}</h2>

          <div className='flex flex-row gap-1 mb-3'>
            <label htmlFor="input" className='font-display'>Qty:</label>
            <input 
              className='border border-gray-500 rounded-sm w-15'
              type="number" 
              min={1} 
              defaultValue={1} 
              id='input'
            />
          </div>
          

          <button className='rounded-sm bg-primary text-white p-1'>
            <span>Add To Cart   </span>
            <FontAwesomeIcon icon={faShoppingCart}/>
          </button>
          <button className='rounded-sm bg-primary text-white p-1'>
            <span>View Cart    </span>
            <FontAwesomeIcon icon={faShoppingBasket}/>
          </button>
        </div>
      </div>
    </div>
  );

}

export default ProductDetail