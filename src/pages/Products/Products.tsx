// @ts-nocheck
import { useEffect, useState } from "react";
import ProductCard from "../../components/Ui/Card/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../redux/api/products/productsAPI";
import Loading from "../../components/Ui/Loading/Loading";

const Products = () => {
  // Get Data from DB by Redux
  const { data } = useGetAllProductsQuery(undefined);

  // const filtered data
  const [filteredData, setFilterdata] = useState([]);

  // Store default data
  useEffect(() => {
    setFilterdata(data);
  }, [data]);

  const options = [
    { value: "new", label: "New Arival" },
    { value: "all", label: "ALL" },
  ];

  const [selectedOption, setSelectedOption] = useState("all");

  // Filter data
  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "new") {
      const sorted = [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setFilterdata(sorted);
    } else if (event.target.value === "all") {
      const sorted = [...data].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setFilterdata(sorted);
    }
  };

  return (
    <div className="my-20">
      {!data && <Loading />}
      <div className="flex justify-between px-4 my-4">
        <h2>{data && data.length} items found </h2>
        <div>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {options.map((option, i) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>{" "}
        </div>
      </div>
      {/* Products */}
      <div className="  grid grid-cols-1 md:grid-cols-3   gap-y-10">
        {filteredData &&
          filteredData.map((product: any) => (
            <ProductCard key={product._id} data={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
