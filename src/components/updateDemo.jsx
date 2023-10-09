import React, { useState } from "react";
import useProductHook from "../hooks/useProductHook";

const UpdateDemo = () => {
  const [productId, setProductId] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const { updateProductById } = useProductHook();

  const handleUpdate = () => {
    if (productId && productTitle && productDescription) {
      const formData = {
        title: productTitle,
        description: productDescription,
      };

      updateProductById(productId, formData);
      setProductId("");
      setProductTitle("");
      setProductDescription("");
    } else {
      alert("Please enter a product ID, title, and description.");
    }
  };

  return (
    <div>
      <h2>Update Product by ID</h2>
      <div>
        <label htmlFor="productId">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productTitle">Product Title:</label>
        <input
          type="text"
          id="productTitle"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productDescription">Product Description:</label>
        <input
          type="text"
          id="productDescription"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleUpdate}>Update Product</button>
      </div>
    </div>
  );
};

export default UpdateDemo;
