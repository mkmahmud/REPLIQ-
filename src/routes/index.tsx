import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Auth from "../pages/Auth/Auth";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile></Profile>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  // Not found route
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
