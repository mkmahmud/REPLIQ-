import { SubmitHandler, useForm } from "react-hook-form";
import MainInput from "../../components/Forms/Input/MainInput";
import Button from "../../components/Buttons/Button";
import { useParams } from "react-router-dom";
import { getCartItems } from "../../utils/localStorage";
import { useCreateOrderMutation } from "../../redux/api/orders/ordersAPI";

const CheckOut = () => {
  //   Get Total
  const { total } = useParams();
  const shipping = 20.34;
  const tax = 30.22;

  //   @ts-ignore
  const grandTotal = parseInt(parseInt(total) + shipping + tax);

  //   Interface
  type Inputs = {
    userName: string;
    email: string;
    phoneNumber: string;
    address: string;
    products: [];
    totalPrice: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //   Submit By Redux
  const [createOrder] = useCreateOrderMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.totalPrice = grandTotal;
    data.products = getCartItems();
    const result = await createOrder(data);
    console.log(result);
  };
  return (
    <div>
      <div className="mt-20"></div>
      <h2 className="text-large font-bold text-primary text-center">
        CheckOut
      </h2>

      <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-10 md:flex w-full space-x-4">
          <div className="w-full md:w-9/12">
            <div className="shadow p-4">
              <h2 className="text-large font-semibold">Billing Address</h2>
              <MainInput
                type="text"
                placeholder="Full Name"
                icon="fa-user"
                register={register("userName", { required: true })}
                error={errors.userName}
              />
              <MainInput
                type="text"
                placeholder="Phone Number"
                icon="fa-phone"
                register={register("phoneNumber", { required: true })}
                error={errors.phoneNumber}
              />
              <MainInput
                type="email"
                placeholder="Email Address"
                icon="fa-envelope"
                register={register("email", { required: true })}
                error={errors.email}
              />
              <MainInput
                type="text"
                placeholder="Address"
                icon="fa-envelope"
                register={register("address", { required: true })}
                error={errors.address}
              />
            </div>
          </div>
          <div className="w-full md:w-3/12">
            <div className="shadow p-4">
              <h2 className="text-center bg-primary text-white text-large  py-2">
                Order Summary{" "}
              </h2>

              <div className="my-4">
                <div className="flex justify-between">
                  <h2>Coupon Code</h2>
                  <strong>N/A</strong>
                </div>

                <div className="flex justify-between">
                  <h2>Sub Total</h2>
                  <strong>${total}</strong>
                </div>
                <div className="flex justify-between">
                  <h2>Shipping </h2>
                  <strong>${shipping}</strong>
                </div>
                <div className="flex justify-between">
                  <h2>Tax </h2>
                  <strong>${tax}</strong>
                </div>
                <div className="border-t-2  mt-4 flex justify-between">
                  <h2>Total </h2>
                  <strong>${grandTotal}</strong>
                </div>
                <div className="my-4 flex justify-center">
                  <Button content="Place Order" type="submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
