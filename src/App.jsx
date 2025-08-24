import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AuthRouter from "./router/AuthRouter";
import UserRouter from "./router/UserRouter";
import { verifyToken } from "./store/globalSlice";

function App() {
  const dispatch = useDispatch();
  const { authToken, authData } = useSelector((state) => state.global);

  // Check if user is authenticated (has both token and auth data)
  const isAuthenticated = Boolean(authToken && authData);

  // Verify token on app load
  useEffect(() => {
    if (authToken && !authData) {
      dispatch(verifyToken(authToken));
    }
  }, [authToken, authData]);

  return (
    <div className="App">
      {isAuthenticated ? <UserRouter /> : <AuthRouter />}
    </div>
  );
}

export default App;
