import { useParams } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Font from "../../components/icons/Font";
import { useGetSingleProductQuery } from "../../redux/api/products/productsAPI";
import { addToCart } from "../../utils/localStorage";
import Loading from "../../components/Ui/Loading/Loading";
import toast from "react-hot-toast";

const ProductDetails = () => {
  // Get Product Id form parms
  const { id } = useParams();

  // Get Data from DB by Redux
  const { data } = useGetSingleProductQuery(id);

  // Toasr
  const notify = () => toast.success("Product Added Successfully");

  return (
    <div>
     <div className="mt-20">
     {!data && <Loading />}
     </div>
      {data && (
        <div>
          <div className="mt-20"></div>
          <div className="md:flex space-x-2 w-full p-4 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={data.images[0]}
                className="h-[500px] block mx-auto"
                alt="Image"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div>
                <p>{data.brand}</p>
                <h2 className="text-large font-bold">
                  {data.productName}
                </h2>{" "}
              </div>
              <div className="my-4">
                <h1 className="text-large text-primary font-bold">
                  {" "}
                  <del className="text-primaryHover">${data?.price}</del> $
                  {data?.discountedPrice}
                </h1>
              </div>
              <div className="my-4">
                <div className="text-primary">
                  <Font iconName="fa-star" />
                  <Font iconName="fa-star" />
                  <Font iconName="fa-star" />
                  <Font iconName="fa-star" />
                  <Font iconName="fa-star" />
                </div>
                (24 reviews)
              </div>
              <div className="mb-10">
                <p>{data?.description}</p>
                <p className="flex space-x-2">
                  {data &&
                    data?.tags.map((tag: any, i: any) => (
                      <span key={i} className="px-2 border rounded-full">
                        {tag}
                      </span>
                    ))}
                </p>
              </div>
              <div className="mb-4 text-primary">
                <p>${data?.stockQuantity} Items left!</p>
              </div>
              <div
                className=""
                onClick={() => {
                  addToCart({
                    name: data.productName,
                    price: data.price,
                    img: data.images[0],
                    id: data._id,
                  });
                 notify()
                }}
              >
                <Button content="Add To Cart" />
              </div>
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-large">Description: </h2>
            <p>{data?.description}</p>
          </div>
          {/* Releted Product */}
          <div className="my-10">
            <h2 className="text-large">Releted Products: </h2>

            <div className=" mt-20 grid grid-cols-1 md:grid-cols-3   gap-y-10">
              {/* <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
