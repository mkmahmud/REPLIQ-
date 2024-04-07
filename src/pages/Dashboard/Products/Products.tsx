import MainButton from "../../../components/Buttons/MainButton";
import { useGetAllProductsQuery } from "../../../redux/api/products/productsAPI";

const Products = () => {
  const { data } = useGetAllProductsQuery(undefined);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-large text-primary   font-semibold">Products</h2>
        <div>
          <MainButton
            path="/dashboard/products/add-product"
            content="Add New Product"
            icon="fa-plus"
          />
        </div>
      </div>
      {/* Products */}
      <div className="p-4 rounded-lg  mt-10">
        <div className="p-2 flex justify-between items-center bg-gray font-semibold">
          <h2>productName</h2>
          <h2>price</h2>
          <h2>availability</h2>
          <h2>Preview</h2>
          <h2>Action</h2>
        </div>

        <div>
          {data &&
            data.map((user: any) => (
              <div
                key={user._id}
                className="p-2 flex justify-between items-center"
              >
                <h2>{user.productName}</h2>
                <h2>{user.price}</h2>
                <h2>{user.availability ? "Yes" : "No"}</h2>
                <h2>
                  <img src={user.images[0]} className="h-[80px]" alt="" />
                </h2>
                <MainButton
                  path={`/dashboard/products/${user._id}`}
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

export default Products;
