import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import ProductsPage from "./pages/products.page";
import RegistrationPage from "./pages/registration.page";
import NotFoundPage from "./pages/notFound.page";
import ProductDetails from "./pages/productDetails.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        {/* <Route path="/user/create" element={<UserCreatePage />} />
        <Route path="/user/edit" element={<UserCreatePage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;