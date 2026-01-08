import React from 'react';

import styles from './css/ProductListing.module.css';
import ProductCard from './ProductCard';
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';


function ProductListing({ products }) {
  return (

    <div className='flex flex-col'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 pt-12'>
        <SearchBox label={"Search"} placeholder={"Search Products..."} value=""></SearchBox>
        <Dropdown label="Sort by" options={["Popularity", "Price Low to High", "Price High to Low"]} value="Popularity"></Dropdown>
      </div>

      <div className={styles.container}>
      
        {products.length === 0 ? (
          <div
            style={{
              height: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <h1 style={{ fontFamily: "var(--font-family)" }}>
              No products found
            </h1>
          </div>
        ) : (
          products.map((p, index) => (
            <ProductCard product={p} key={index} />
          ))
        )}
      </div>
    </div>
    
  );
}

export default ProductListing;
