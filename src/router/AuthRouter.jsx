import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/Auth/Home";
import Collections from "../page/Auth/Collections/Collections";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/collection" element={<Collections />} />
      <Route path="/collection/:category" element={<Collections />} />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default AuthRouter;
