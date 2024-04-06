import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, []);
  return (
    <div className="h-[1000px] bg-secondaryHover">
 
    </div>
  );
};

export default Profile;
