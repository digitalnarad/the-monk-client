import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AuthRouter from "./router/AuthRouter";
import UserRouter from "./router/UserRouter";
import { verifyToken } from "./store/globalSlice";
import storage from "./services/storage";
import Header from "./component/Header";

function App() {
  const dispatch = useDispatch();
  const { authToken, authData } = useSelector((state) => state.global);

  const [isAuth, setIsAuth] = useState(Boolean(authToken && authData));

  useEffect(() => {
    setIsAuth(Boolean(authToken && authData));
  }, [authData, authToken]);

  // Verify token on app load
  useEffect(() => {
    const token = storage.get("token");
    if (token && !authData) {
      dispatch(verifyToken(authToken));
    }
  }, [authToken, authData, dispatch]);

  return (
    <div className="App">
      <Header isAuth={isAuth} />
      {isAuth ? <UserRouter /> : <AuthRouter />}
    </div>
  );
}

export default App;
