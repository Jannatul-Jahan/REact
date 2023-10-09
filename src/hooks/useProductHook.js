import axios from "axios";
import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosinstance";
import { ProductContext } from "../pages/products.page";

const useProductHook = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { fetchReload, setFetchReload } = useContext(ProductContext);

  useEffect(() => {
    console.log("Fetch API called");

    setLoading(true);
    axiosInstance
      .get(`/total`)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Data : ", data);
        setProductData(data.data.result);
        setLoading(false);

        return data;
      })
      .catch((err) => {
        return "Some error";
      })
      .finally(() => {
        setLoading(false);
        setFetchReload(true);
      });
  }, [fetchReload]);

  const createPost = (formData) => {
    setLoading(true);
    console.log("The form data ", formData);
    axiosInstance
      .post("/create", formData)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Successfully created", data);
        setFetchReload(true);
      })
      .finally(() => setLoading(false));
  };

  const deleteProductById = (productId) => {
    setLoading(true);
    axiosInstance
      .delete(`/delete?id=${productId}`)
      .then((resp) => {
        console.log(`Successfully deleted product with ID ${productId}`);
        setFetchReload(true);
      })
      .catch((err) => {
        console.error(`Error deleting product with ID ${productId}:`, err);
      })
      .finally(() => setLoading(false));
  };

  const updateProductById = (productId, formData) => {
    setLoading(true);
    axiosInstance
      .patch(`/update/${productId}`, formData) 
      .then((resp) => {
        console.log(`Successfully updated product with ID ${productId}`);
        setFetchReload(true);
      })
      .catch((err) => {
        console.error(`Error updating product with ID ${productId}:`, err);
      })
      .finally(() => setLoading(false));
  };
  

  const getProductById = (productId) => {
    setLoading(true);
    axiosInstance
      .get(`/products/${productId}`) // Assuming you have an endpoint for fetching a product by ID
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Product Details:", data);
        setLoading(false);
        // You can set the product details in your component state or return it as needed
        return data;
      })
      .catch((err) => {
        console.error(`Error fetching product with ID ${productId}:`, err);
        setLoading(false);
        // Handle the error as needed
      });
  };

    return { productData, loading, setLoading, createPost, deleteProductById, updateProductById, getProductById };
};

export default useProductHook;