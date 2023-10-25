import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TabelaSelectProvider } from "./context/TabelaSelectContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TabelaSelectProvider>
            <App />
        </TabelaSelectProvider>
    </React.StrictMode>
);
