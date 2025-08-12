import { assets } from "@/assets/assets";
import { User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

interface Props {
  loading: boolean;
  logoutFunction: () => Promise<void>;
  user: User;
}

const Profile: React.FC<Props> = ({ user, loading, logoutFunction }) => {
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />
      ) : (
        <div className="relative group cursor-pointer">
          <img
            src={user.picture ?? assets.profile_icon}
            className="w-10 rounded-full"
            alt="user-avatar"
          />
          <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
            <li
              onClick={() => navigate("/orders")}
              className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
            >
              My Orders
            </li>
            <li
              onClick={() => logoutFunction()}
              className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Profile;
