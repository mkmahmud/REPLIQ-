 import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../redux/api/products/productsAPI";

const ProductDetails = () => {
  const { id } = useParams();

  const { data } = useGetSingleProductQuery(id);

  return (
    <div>
      <h2 className="text-large text-primary   font-semibold">Order Details</h2>
      <div className="my-2 font-semibold">
        <h2>Name:</h2>
        <h2>{data?.productName}</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
