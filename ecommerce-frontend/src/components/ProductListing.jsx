import React from 'react';
import { useState } from 'react';
import styles from './css/ProductListing.module.css';
import ProductCard from './ProductCard';
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';


function ProductListing({ products }) {

  const [searchText, setSearchText] = useState("");
  const [dropdownOption, setDropdownOption] = useState("Popularity");

  function handleSearchChange(inputText){
    setSearchText(inputText);
  }

  function handleDropdownOptionChange(inputOption){
    setDropdownOption(inputOption);
  }

  let filteredAndSortedProducts = Array.isArray(products) ? products.filter((product, index) => {
    return(product.name.toLowerCase().includes(searchText.toLowerCase()) || 
    product.description.toLowerCase().includes(searchText.toLowerCase()));
  }): []

  filteredAndSortedProducts = filteredAndSortedProducts
    .slice()
    .sort((a, b) => {
      switch (dropdownOption) {
        case "Price Low to High":
          return Number(a.price) - Number(b.price);
        case "Price High to Low":
          return Number(b.price) - Number(a.price);
        case "Popularity":
        default:
          return Number(b.popularity ?? 0) - Number(a.popularity ?? 0);
      }
  } );

  return (

    <div className='flex flex-col w-full max-w-4xl'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 pt-12 w-full min-h-[72px]'>
        <SearchBox label={"Search"} placeholder={"Search Products..."} value={searchText} handleSearch={(value) => handleSearchChange(value)}></SearchBox>
        <Dropdown label="Sort by" options={["Popularity", "Price Low to High", "Price High to Low"]} selectedValue={dropdownOption} handleOptionChange={(value) => handleDropdownOptionChange(value)}></Dropdown>
      </div>

      <div className={styles.container}>
      
        {filteredAndSortedProducts.length === 0 ? (
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
          filteredAndSortedProducts.map((p, index) => (
            <ProductCard product={p} key={index} />
          ))
        )}
      </div>
    </div>
    
  );
}

export default ProductListing;
