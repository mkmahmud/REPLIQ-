import product from "../../../../assets/images/3456789.webp";
import MainButton from "../../../Buttons/MainButton";

const ProductCard = () => {
  return (
    <div className="bg-gray md:w-[350px] rounded">
      <div>
        <img className=" h-[300px] w-full" src={product} alt="product " />
        <div className="p-4 ">
          <div>
            <h2 className="text-large font-bold">Product On fire the earth</h2>
            <p className="flex space-x-2">
              <span className="px-2 border rounded-full">Vegan</span>
              <span className="px-2 border rounded-full">Vegan</span>
              <span className="px-2 border rounded-full">Vegan</span>
               
            </p>
          </div>
          <div className="my-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, doloremque? </p> 
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
                <h1 className="text-large text-primary font-bold">$290.98</h1>
                <del className="text-sm">+987</del>
            </div>
            <div className="">
                <MainButton content="Add To Cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
