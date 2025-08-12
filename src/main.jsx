import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./component/theme-provider.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="system" storageKey="artcanvas-theme">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
