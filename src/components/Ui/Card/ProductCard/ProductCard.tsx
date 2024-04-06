import { Link } from "react-router-dom";
import Button from "../../../Buttons/Button";

const ProductCard = ({ data }: any) => {
  return (
    <div className="bg-gray md:w-[350px] rounded mx-auto">
      <Link to={`/product/${data?._id}`}>
        <div>
          <img
            className=" h-[300px] w-full"
            src={data?.images[0]}
            alt="product "
          />
          <div className="p-4 ">
            <div>
              <h2 className="text-large font-bold">{data.productName}</h2>
              <p className="flex space-x-2">
                {data &&
                  data?.tags.map((tag:any,i:any) => (
                    <span key={i} className="px-2 border rounded-full">{tag}</span>
                  ))}
              </p>
            </div>
            <div className="my-4">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="px-4  flex justify-between items-center  ">
        <div>
          <h1 className="text-large text-primary font-bold">${data?.discountedPrice}</h1>
          <del className="text-sm">${data?.price}</del>
        </div>
        <div className="">
          <Button content="Add To Cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
