import heroImage from "../../../assets/images/hero2.png";
import MainButton from "../../../components/Buttons/MainButton";

const Hero = () => {
  return (
    <div className="   ">
      <div className="  flex justify-between items-center relative overflow-hidden h-full">
        {/* Shapes */}

        <div className="w-full md:w-1/2 pt-20">
          <div className="pl-4">
            <p className="text-primary">Blossom Online Marcket</p>
            <h2 className="text-extraLarge md:text-[4rem] font-bold my-6 leading-none">
              Want To Be A Trust{" "}
              <span className="text-primary"> Happy Commerce !</span>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              repudiandae minima maxime fugiat, eum deserunt placeat aliquid
              molestias odio animi?
            </p>
            <div className="my-10">
              <MainButton
                path="/products"
                content="Shop Now !"
                icon="fa-right-to-bracket"
              ></MainButton>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:block md:w-1/2">
          <img src={heroImage} className="  h-full   " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
