import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// J'encapsule mon application dans le contexte NameContextProvider
// Maintenant, tous les composants de mon application ont accès au contexte NameContext
import { NameContextProvider } from "./context/NameContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NameContextProvider>
			<App />
		</NameContextProvider>
	</React.StrictMode>
);
