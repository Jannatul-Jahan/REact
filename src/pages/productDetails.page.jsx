import React, { useEffect, useState } from "react";
import useProductHook from "../hooks/useProductHook";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams(); 
  const { getProductById, loading } = useProductHook();

  
  const product = getProductById.find((product) => product._id === productId);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h5>Title: {product.title}</h5>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
