import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <IconContext.Provider value={{ color: "blue" }}>
        <Layout>
          <App />
        </Layout>
      </IconContext.Provider>
    </BrowserRouter>
  </Provider>
);
