import { SubmitHandler, useForm } from "react-hook-form";
 import Font from "../../../components/icons/Font";
import MainInput from "../../../components/Forms/Input/MainInput";
import { useAddProductMutation } from "../../../redux/api/products/productsAPI";

type Inputs = {
  productName: string;
  description: string;
  price: number;
  discountedPrice?: number;
  category: string;
  brand: string;
  images: string[];
  stockQuantity: number;
  attributes?: {
    [key: string]: string;
  };
  rating?: number;
  availability?: boolean;
  tags?: string[];
};
const AddProduct = () => {
  // Handle Redux registration
  const [addProduct, { isLoading }] = useAddProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const res = await addProduct(data).unwrap();
    if (res?.message === "Success") {
      alert("Product added successfully");
    }
  };

  return (
    <div>
      <h2 className="text-large text-primary   font-semibold">
        Add New Product
      </h2>

      <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
        <MainInput
          type="text"
          placeholder="Product Name"
          register={register("productName", { required: true })}
          error={errors.productName}
        />
        <MainInput
          type="text"
          placeholder="Description"
          register={register("description", { required: true })}
          error={errors.description}
        />
        <MainInput
          type="number"
          placeholder="price"
          register={register("price", { required: true })}
          error={errors.price}
        />
        <MainInput
          type="number"
          placeholder="Discounted Price"
          register={register("discountedPrice", { required: true })}
          error={errors.discountedPrice}
        />
        <MainInput
          type="text"
          placeholder="Category"
          register={register("category", { required: true })}
          error={errors.category}
        />
        <MainInput
          type="text"
          placeholder="brand"
          register={register("brand", { required: true })}
          error={errors.brand}
        />
        <MainInput
          type="text"
          placeholder="Image URL one"
          register={register(`images.0`, { required: true })}
          error={errors.images}
        />
        <MainInput
          type="text"
          placeholder="Image URL Tow"
          register={register(`images.1`)}
          error={errors.images}
        />
        <MainInput
          type="text"
          placeholder="Image URL Three"
          register={register(`images.2`)}
          error={errors.images}
        />
        <MainInput
          type="number"
          placeholder="stockQuantity"
          register={register("stockQuantity", { required: true })}
          error={errors.stockQuantity}
        />
      

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full my-10 group overflow-hidden flex justify-center items-center relative   bg-primary  px-6 py-4 text-base text-white font-semibold  rounded-full`}
        >
          <span>Add Product</span> {/* Button Icon */}
          {isLoading ? (
            <span className="animate-spin">
              <Font iconName="fa-spinner"></Font>
            </span>
          ) : (
            <span className="ml-4">
              <Font iconName="fa-paper-plane"></Font>{" "}
            </span>
          )}
          <div
            className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12   opacity-40 group-hover:animate-shine`}
          />
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
