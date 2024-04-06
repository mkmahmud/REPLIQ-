import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../../redux/api/customers/customersApi";

const CustomerDetails = () => {
  const { id } = useParams();

  const { data } = useGetSingleUserQuery(id);

  return (
    <div>
      <h2 className="text-large text-primary   font-semibold">
        Customer Details
      </h2>
      <div className="my-2 font-semibold">
        <h2>Name:</h2>
        <h2>{data?.fullName}</h2>
      </div>
    </div>
  );
};

export default CustomerDetails;
