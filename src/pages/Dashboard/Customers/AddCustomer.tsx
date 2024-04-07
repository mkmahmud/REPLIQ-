import { SubmitHandler, useForm } from "react-hook-form";
import { useUserRegistrationMutation } from "../../../redux/api/auth/authAPI";
import Font from "../../../components/icons/Font";
import MainInput from "../../../components/Forms/Input/MainInput";

type Inputs = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

const AddCustomer = () => {
  // Handle Redux registration
  const [userRegistration, { isLoading }] = useUserRegistrationMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await userRegistration(data).unwrap();
    if (res?.message === "Success") {
      alert("user registration successful");
    }
  };

  return (
    <div>
      <h2 className="text-large text-primary   font-semibold">
        Add New Customer
      </h2>

      <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
        <MainInput
          type="text"
          placeholder="Full Name"
          icon="fa-user"
          register={register("fullName", { required: true })}
          error={errors.fullName}
        />
        <MainInput
          type="text"
          placeholder="Phone Number"
          icon="fa-phone"
          register={register("phoneNumber", { required: true })}
          error={errors.fullName}
        />
        <MainInput
          type="email"
          placeholder="Email Address"
          icon="fa-envelope"
          register={register("email", { required: true })}
          error={errors.email}
        />
        <MainInput
          type="password"
          placeholder="Password"
          icon="fa-lock"
          register={register("password", { required: true })}
          error={errors.password}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full my-10 group overflow-hidden flex justify-center items-center relative   bg-primary  px-6 py-4 text-base text-white font-semibold  rounded-full`}
        >
          <span>Sign Up</span> {/* Button Icon */}
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

export default AddCustomer;
