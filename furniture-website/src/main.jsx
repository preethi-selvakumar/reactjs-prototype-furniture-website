import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { AppContextProvider } from "./context/AppContext";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Custom CSS files
import "./assets/css/style.css";
import "./assets/css/responsive.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
