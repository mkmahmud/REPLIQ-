import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import Sidebar from "../components/shared/SideBar/Sidebar";

 
const Dashboard = () => {
    return (
        <div className="container   max-w-[1280px] mx-auto ">
        <Navbar />
        <div className="md:flex w-full pt-20">
          <div className="w-full md:w-3/12">
            <Sidebar />
          </div>
          <div className="w-full md:w-9/12 p-4">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Dashboard;