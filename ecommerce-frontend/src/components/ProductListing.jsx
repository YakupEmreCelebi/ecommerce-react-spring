import React from 'react'

import styles from './css/ProductListing.module.css';

import ProductCard from './ProductCard';

function ProductListing({products}) {
    
  return (
    <div className={styles.container}>
        {products.map((p, index) => <ProductCard product={p} key={index}/>)}
    </div>
  )
}

export default ProductListing