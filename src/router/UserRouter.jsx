import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/Auth/Home/Home";

function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>home/</div>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default UserRouter;
