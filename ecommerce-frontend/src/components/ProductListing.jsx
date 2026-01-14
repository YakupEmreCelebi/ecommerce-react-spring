import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';

function ProductListing({ products }) {
  const [searchText, setSearchText] = useState("");
  const [dropdownOption, setDropdownOption] = useState("Popularity");

  const filteredAndSortedProducts = (Array.isArray(products) ? products : [])
    .filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      switch (dropdownOption) {
        case "Price Low to High":
          return Number(a.price) - Number(b.price);
        case "Price High to Low":
          return Number(b.price) - Number(a.price);
        default:
          return Number(b.popularity ?? 0) - Number(a.popularity ?? 0);
      }
    });

  return (
    <div className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-8 sm:pt-12 w-full">

        <div className="w-full sm:max-w-md">
          <SearchBox
            label="Search"
            placeholder="Search Products..."
            value={searchText}
            handleSearch={setSearchText}
          />
        </div>

        <div className="w-full sm:w-auto">
          <Dropdown
            label="Sort by"
            options={["Popularity", "Price Low to High", "Price High to Low"]}
            selectedValue={dropdownOption}
            handleOptionChange={setDropdownOption}
          />
        </div>

      </div>

      {/* Products Grid */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <h1 className="font-display text-lg">No products found</h1>
        </div>
      ) : (
        <div
          className="
            mt-6 grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-3
            lg:grid-cols-4
            gap-x-4 gap-y-4
            justify-items-start
          "
        >




          {filteredAndSortedProducts.map((p) => (
            <ProductCard
              key={p.id ?? p.productId ?? p.name}
              product={p}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListing;
