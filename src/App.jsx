import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AuthRouter from "./router/AuthRouter";
import UserRouter from "./router/UserRouter";
import { verifyToken } from "./store/globalSlice";
import storage from "./services/storage";

function App() {
  const dispatch = useDispatch();
  const { authToken, authData } = useSelector((state) => state.global);

  const isAuthenticated = Boolean(authToken && authData);

  // Verify token on app load
  useEffect(() => {
    console.log("authData", authData);
    console.log("authToken", authToken);
    const token = storage.get("token");
    console.log("token", token);
    if (authToken && !authData) {
      dispatch(verifyToken(authToken));
    }
  }, [authToken, authData]);

  return (
    <div className="App">
      {authData?._id && isAuthenticated ? <UserRouter /> : <AuthRouter />}
    </div>
  );
}

export default App;
