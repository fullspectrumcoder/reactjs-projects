import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/style.min.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux-store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GoogleOAuthProvider clientId="126844737668-27d8g1qop8164vmev2mlulejmoph6n4q.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </PersistGate>
  </Provider>
);
