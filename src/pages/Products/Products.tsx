import ProductCard from "../../components/Ui/Card/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../redux/api/products/productsAPI";

const Products = () => {
  // Get Data from DB by Redux
  const { data } = useGetAllProductsQuery(undefined);
  console.log(data);

  return (
    <div className=" my-20 grid grid-cols-1 md:grid-cols-3   gap-y-10">
      {data &&
        data.map((product: any) => (
          <ProductCard key={product._id} data={product} />
        ))}
    </div>
  );
};

export default Products;
