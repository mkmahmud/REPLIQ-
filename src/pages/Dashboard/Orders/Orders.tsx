import { useGetOrderQuery } from "../../../redux/api/orders/ordersAPI";
import MainButton from "../../../components/Buttons/MainButton";

const Orders = () => {
  const { data } = useGetOrderQuery(undefined);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-large text-primary   font-semibold">Orders</h2>
        
      </div>
      {/* Orders*/}
      <div className="p-4 rounded-lg  mt-10">
        <div className="p-2 flex justify-between items-center bg-gray font-semibold">
          <h2>Full Name</h2>
          <h2>Phone Number</h2>
          <h2>Email</h2>
          <h2>Action</h2>
        </div>

        <div>
          {data &&
            data.map((user: any) => (
              <div
                key={user._id}
                className="p-2 flex justify-between items-center"
              >
                <h2>{user.userName}</h2>
                <h2>{user.phoneNumber}</h2>
                <h2>{user.email}</h2>
                <MainButton
                  path={`/dashboard/orders/${user._id}`}
                  content="View"
                  icon="fa-eye"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
