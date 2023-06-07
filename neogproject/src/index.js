import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import CartContextProvider from "./contexts/cartContext";

// Call make Server
makeServer();
const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>

        <CartContextProvider>
 <App />
        </CartContextProvider>

    </Router>
  </React.StrictMode>
 
);
