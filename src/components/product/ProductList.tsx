import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../../state/entitiesInterfaces/interface";
import { storeType } from "../../state/store";
import ProductCard from "./ProductCard";
import CardGroup from "react-bootstrap/CardGroup";

function ProductList() {
  const productList = ({} = useSelector((state: storeType) => state.products));

  return (
    <div className="container pt-4 pb-2">
      <h3>Products List</h3>
      <CardGroup>
        {productList.map((product: Product) => (
          <ProductCard product={product} />
        ))}
      </CardGroup>
    </div>
  );
}

export default ProductList;
