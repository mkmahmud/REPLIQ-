import ProductCard from "../../components/Ui/Card/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../redux/api/products/productsAPI";
import Hero from "./Hero/Hero";
import Solutions from "./Solutions/Solutions";

const Home = () => {
  // Get Data from DB by Redux
  const { data } = useGetAllProductsQuery(undefined);

  return (
    <div>
      <Hero />
      <div>
        <div className="text-center">
          <h2 className="text-extraLarge   font-bold my-4 leading-none">
            <span className="text-primary"> Top Selling</span>
          </h2>
        </div>
        <div className="  grid grid-cols-1 md:grid-cols-3   gap-y-10">
          {data &&
            data
              .slice(0, 3)
              .map((product: any) => (
                <ProductCard key={product._id} data={product} />
              ))}
        </div>
      </div>
      <Solutions />
      <div className="mt-20"></div>
    </div>
  );
};

export default Home;
