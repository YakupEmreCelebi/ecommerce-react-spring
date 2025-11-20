import React from 'react'

import styles from './css/ProductCard.module.css';

import Price from './Price';

function ProductCard({product}) {
  return (
    <div className={styles.card}>
         <h1>{product.name}</h1>
         <Price price={product.price}/>
    </div>
  )
}

export default ProductCard