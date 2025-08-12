import "./App.css";
import AuthRouter from "./router/AuthRouter";
import UserRouter from "./router/UserRouter";

function App() {
  const isAuthenticated = false;
  return (
    <div className="App">
      {isAuthenticated ? <UserRouter /> : <AuthRouter />}
    </div>
  );
}

export default App;
