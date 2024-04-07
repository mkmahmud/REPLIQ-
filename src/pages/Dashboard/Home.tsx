import { useGetAllUsersQuery } from "../../redux/api/customers/customersApi";
import { useGetOrderQuery } from "../../redux/api/orders/ordersAPI";
import { useGetAllProductsQuery } from "../../redux/api/products/productsAPI";

const Home = () => {
  // Get All users
  const { data } = useGetAllUsersQuery(undefined);
  // Get All Orders
  const { data: orders } = useGetOrderQuery(undefined);
  // Get All Products
  const { data: products } = useGetAllProductsQuery(undefined);
   return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-2">
        <div className="p-4 shadow-lg bg-white min-w-[300px] mx-auto border-l-4 border-primary">
          <p className="uppercase">Orders</p>
          <h2 className="text-extraLarge text-primary py-2 font-semibold">
            {orders && orders.length}
          </h2>
          <p>Total Earnings</p>
        </div>
        <div className="p-4 shadow-lg bg-white min-w-[300px] mx-auto border-l-4 border-primary">
          <p className="uppercase">Customers</p>
          <h2 className="text-extraLarge text-primary py-2 font-semibold">
            {data && data.length}
          </h2>
          <p>In this month</p>
        </div>
        <div className="p-4 shadow-lg bg-white min-w-[300px] mx-auto border-l-4 border-primary">
          <p className="uppercase">Products</p>
          <h2 className="text-extraLarge text-primary py-2 font-semibold">
            {products && products.length}
             
          </h2>
          <p>Rating this month</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
