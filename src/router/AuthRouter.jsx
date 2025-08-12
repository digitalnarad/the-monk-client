import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/Auth/Home";
import Category from "../page/Auth/Collections/Category";
import Collections from "../page/Auth/Collections";
import Cart from "../page/User/Cart";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/collection" element={<Collections />} />
      <Route path="/collection/:categoryId" element={<Category />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default AuthRouter;
