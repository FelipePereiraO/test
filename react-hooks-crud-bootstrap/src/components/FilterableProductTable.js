import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function FilterableProductTable(props){
  const [filterText, setFilterText] = useState("") 
  const [inStockOnly, setInStockOnly] = useState(false) 

  
    function handleFilterTextChange(filterText) {

      setFilterText(filterText)
    }
    
    function handleInStockChange(inStockOnly) {
      setInStockOnly(inStockOnly)
    }
  
    return (
      <div> 
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={handleFilterTextChange}
          onInStockChange={handleInStockChange}
        />
	      <ProductTable
          products={props.products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }

  export default FilterableProductTable