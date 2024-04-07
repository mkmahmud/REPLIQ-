import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../../redux/api/customers/customersApi";

const CustomerDetails = () => {
  // Get ID
  const { id } = useParams();

  // Retrieve customer details
  const { data } = useGetSingleUserQuery(id);

  return (
    <div>
      <h2 className="text-large text-primary   font-semibold">
        Customer Details
      </h2>
      <div className="relative">
        <h2 className="text-center text-extraLarge text-primary font-bold">
          Details
        </h2>
        <div className=" mt-4">
          <h3 className="bg-gray p-2 font-semibold text-lg">
            User Information
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <h3 className="font-semibold ">Name:</h3>
              <p className="">{data?.fullName}</p>
            </div>
            <div>
              <h3 className="font-semibold ">Email:</h3>
              <p className="font-bold text-primary">{data?.email}</p>
            </div>
            <div>
              <h3 className="font-semibold ">Phone Number:</h3>
              <p>{data?.phoneNumber}</p>
            </div>
            <div>
              <h3 className="font-semibold ">Role:</h3>
              <p>{data?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
