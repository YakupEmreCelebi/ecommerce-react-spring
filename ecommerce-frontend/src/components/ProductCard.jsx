import React from 'react'

import styles from './css/ProductCard.module.css';

import Price from './Price';

function ProductCard({product}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
        </div>

        <div className={styles.price}>
          <Price price={product.price} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard