import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/Auth/Home";
import Category from "../page/Auth/Collections/Category";
import Collections from "../page/Auth/Collections";
import Cart from "../page/User/Cart";
import Auth from "../page/Auth/Auth";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/collection" element={<Collections />} />
      <Route path="/collection/:categoryId" element={<Category />} />
      <Route path="/signin" element={<Auth initialMode="signin" />} />
      <Route path="/signup" element={<Auth initialMode="signup" />} />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default AuthRouter;
