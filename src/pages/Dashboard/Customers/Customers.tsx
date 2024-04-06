import MainButton from "../../../components/Buttons/MainButton";
import { useGetAllUsersQuery } from "../../../redux/api/customers/customersApi";

const Customers = () => {
  const { data } = useGetAllUsersQuery(undefined);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-large text-primary   font-semibold">Customers</h2>
        <div>
          <MainButton
            path="/dashboard/customers/add"
            content="Add New User"
            icon="fa-plus"
          />
        </div>
      </div>
      {/* Customers */}
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
                <h2>{user.fullName}</h2>
                <h2>{user.phoneNumber}</h2>
                <h2>{user.email}</h2>
                <MainButton
                  path={`/dashboard/customers/${user._id}`}
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

export default Customers;
