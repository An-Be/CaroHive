import { createBrowserRouter } from "react-router-dom";
import { Shop } from "../components/Shop/Shop";
import { About } from "../components/About/About";
import { Login } from "../components/Login/Login";
import { Cart } from "../components/Cart/Cart";
import Hero from "../components/Hero/Hero";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
