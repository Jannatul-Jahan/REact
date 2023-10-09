import { createContext, useEffect, useState } from "react";
import FetchDemo from "../components/fetchDemo";
import PostDemo from "../components/postDemo";
import DeleteDemo from "../components/deleteDemo";
import UpdateDemo from "../components/updateDemo";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const ProductContext = createContext();

function Products() {
  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);

  return (
    <> 

     <div  className="container">
      <div className="header">
        <h1>Welcome to the Online Bookstore</h1>
      </div>
      <div className="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/products" className="active">Products</Link>
        <Link to="/registration">Registration</Link>
      </div>
    </div>
      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <FetchDemo />
      </ProductContext.Provider>
    </>
  );
}

export default Products;