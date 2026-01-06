import React from 'react'

import styles from './css/ProductListing.module.css';

import ProductCard from './ProductCard';

function ProductListing({products}) {


  if(products.length === 0)
  {
    return(
      <div style={{height:"70vh", display:"flex", alignItems:"center"}}>
        <h1 style={{fontFamily: "var(--font-family)"}}>No products found</h1>
      </div>
    );
  }
    
  return (
    <div className={styles.container}>
        {products.map((p, index) => <ProductCard product={p} key={index}/>)}
    </div>
  )
}

export default ProductListing