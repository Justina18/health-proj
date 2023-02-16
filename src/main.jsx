import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { store } from "./REDUX/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
// const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <PersistGate>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
