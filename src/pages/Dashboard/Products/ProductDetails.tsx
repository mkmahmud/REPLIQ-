import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../redux/api/products/productsAPI";

const ProductDetails = () => {
  // Id
  const { id } = useParams();

  // Get Data

  const { data } = useGetSingleProductQuery(id);
  console.log(data);
  return (
    <div>
      <h2 className="text-large text-primary   font-semibold">
        Product Details
      </h2>
      <div className="relative">
        <h2 className="text-center text-extraLarge text-primary font-bold">
          Details
        </h2>
        <div className="flex my-4">
          <img src={data?.images[0]} className="h-[200px] mx-auto" alt="" />  
        </div>
        <div className=" mt-4">
          <h3 className="bg-gray p-2 font-semibold text-lg">
            Product Information
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <h3 className="font-semibold ">Name:</h3>
              <p className="">{data?.productName}</p>
            </div>
            <div>
              <h3 className="font-semibold ">Brand:</h3>
              <p className="font-bold text-primary">{data?.brand}</p>
            </div>
            <div>
              <h3 className="font-semibold ">Category:</h3>
              <p>{data?.category}</p>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <h3 className="bg-gray p-2 font-semibold text-lg">Description</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <h3 className="font-semibold ">Description:</h3>
              <p className="">{data?.description}</p>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <h3 className="bg-gray p-2 font-semibold text-lg">Price</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <h3 className="font-semibold ">Price:</h3>
              <p className="">{data?.price}</p>
            </div>
            <div>
              <h3 className="font-semibold ">Discounted Price:</h3>
              <p className="">{data?.discountedPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
