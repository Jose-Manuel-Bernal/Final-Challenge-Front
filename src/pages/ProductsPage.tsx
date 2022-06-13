import React from "react";
import ProductForm from "../components/product/ProductForm";
import ProductList from "../components/product/ProductList";

const ProductsPage = () => {
  return (
    <div>
      <div>
        <h1>Products</h1>
        <br />
        <br />
        <br />
      </div>
      <div>
        <ProductForm />
        <br />
        <br />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductsPage;
