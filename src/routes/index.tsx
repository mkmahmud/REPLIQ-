import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Auth from "../pages/Auth/Auth";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../pages/Dashboard/Home";
import Orders from "../pages/Dashboard/Orders/Orders";
import Customers from "../pages/Dashboard/Customers/Customers";
import DashBoardProducts from "../pages/Dashboard/Products/Products";
import OrderDetails from "../pages/Dashboard/Orders/OrderDetails";
import DashProductDetails from "../pages/Dashboard/Products/ProductDetails";
import AddProduct from "../pages/Dashboard/Products/AddProduct";
import AddCustomer from "../pages/Dashboard/Customers/AddCustomer";
import CustomerDetails from "../pages/Dashboard/Customers/CustomerDetails";

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout/:total",
        element: <CheckOut />,
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
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        {" "}
        <Dashboard></Dashboard>{" "}
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/customers",
        element: <Customers />,
      },
      {
        path: "/dashboard/customers/:id",
        element: <CustomerDetails />,
      },
      {
        path: "/dashboard/customers/add-customer",
        element: <AddCustomer />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/orders/:id",
        element: <OrderDetails />,
      },
      {
        path: "/dashboard/products",
        element: <DashBoardProducts />,
      },
      {
        path: "/dashboard/products/:id",
        element: <DashProductDetails />,
      },
      {
        path: "/dashboard/products/add-product",
        element: <AddProduct />,
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
