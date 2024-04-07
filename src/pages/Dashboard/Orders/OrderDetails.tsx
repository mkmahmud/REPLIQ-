import { useParams } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../../redux/api/orders/ordersAPI";

const OrderDetails = () => {
  // Recive user ID
  const { id } = useParams();
  // Retrive data form DB
  const { data } = useGetSingleOrderQuery(id);

  return (
    <div>
      <h2 className="text-large text-primary   font-semibold">Order Details</h2>

      <div className="relative">
        <h2 className="text-center text-extraLarge text-primary font-bold">
          Invoice
        </h2>
        <div className=" mt-4">
          <h3 className="bg-gray p-2 font-semibold text-lg">
            User Information
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <h3 className="font-semibold ">Name:</h3>
              <p className="">{data?.userName}</p>
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
              <h3 className="font-semibold ">Address:</h3>
              <p>{data?.address}</p>
            </div>
          </div>
        </div>
        {/* product Information */}
        <div className=" mt-4">
          <h3 className="bg-gray p-2 font-semibold text-lg">
            Products Information
          </h3>
          <div>
            {data?.products.map((product:any, i:any) => (
              <div key={i} className="p-2 border-b-4 border-gray my-2">
                <div className="flex justify-between items-center text-lg">
                  <div>
                    <img src={product.img} className="h-[100px]" alt="" />
                  </div>
                  <div>
                    <h2>{product.name}</h2>
                  </div>
                  <div>
                    <h2>${product.price}</h2>
                  </div>

                  <div>
                    <h2>{product.quantity}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
