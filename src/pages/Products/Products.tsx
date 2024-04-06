 
import ProductCard from "../../components/Ui/Card/ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="my-40 grid grid-cols-1 md:grid-cols-3   gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
