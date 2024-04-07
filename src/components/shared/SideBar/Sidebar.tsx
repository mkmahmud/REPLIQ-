import { Link, useLocation } from "react-router-dom";
import { getUserInfo } from "../../../services/authService";
import MainButton from "../../Buttons/MainButton";
import userImage from "../../../assets/user/client-4.jpg";
import Font from "../../icons/Font";

const Sidebar = () => {
  // User Information
  const user = getUserInfo();

  //   User Role
  const role = (user as { role: string }).role;

  // Url path
  const urlPath = `/dashboard`;

  // Active Path
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // profile Background

  let profileBG = "primary";
  if (role === "user") {
    profileBG = "gray";
  } else if (role === "admin") {
    profileBG = "black";
  }

  // User Details Data

  return (
    <div>
      <div className="px-2 py-4">
        <div className="bg-white border border-secondary text-center pb-4">
          <div className={`h-[100px] bg-${profileBG}`}></div>
          <div>
            <img
              src={userImage}
              className="h-28 w-28 rounded-full p-1 border border-secondary mx-auto -mt-14 bg-white"
              alt="User Image"
            />

            <div className="flex justify-center my-2">
              <MainButton path="/" content="Go To Dashboard" />
            </div>
          </div>
        </div>
        <div className="bg-white border border-secondary text-center  mt-10">
          <div className="text-left p-4  ">
            <h2 className="uppercase text-lg text-secondary font-semibold ">
              Dashboard
            </h2>
            {/*   Admin */}
            {role === "admin" && (
              <ul className="mt-4">
                <Link to={`${urlPath}`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-home" />{" "}
                    <span className="ml-4"> Dashboard</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/orders`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/orders`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-o" />{" "}
                    <span className="ml-4"> Order Lists</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/products`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/products`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-p" />{" "}
                    <span className="ml-4"> Products</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/customers`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/customers`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-c" />{" "}
                    <span className="ml-4"> Customers</span>
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
