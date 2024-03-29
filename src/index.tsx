import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from "./components/Icons/Cart/Cart";
import CartPage from "./components/CartPage/CartPage";
import ItemSee from "./components/ItemSee/ItemSee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/item/:id",
    element: <ItemSee />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);