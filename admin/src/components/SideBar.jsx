import { FaHome, FaClipboardList, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { MdPointOfSale } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const user = {
    name: "Admin",
    email: "admin@mail.com",
  };

  return (
    <div className="w-20 sm:w-64 bg-white shadow-md h-screen flex flex-col mt-1">
      {/* Top Section - Logo */}
      <div className="px-2 sm:px-10 py-6 text-2xl font-bold text-gray-800">
        .SHOP<span className="text-green-600">ME</span>
      </div>

      {/* User Profile Info */}
      <div className="flex items-center px-2 sm:px-6 py-4 border-b border-gray-200">
        <FaUserCircle className="text-4xl text-gray-600 hover:text-green-600 transition" />
        <div className="hidden sm:block ml-3">
          <p className="text-gray-700 font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Middle Section - Menu Items */}
      <div className="flex-1 overflow-y-auto px-2 sm:px-6 space-y-2 text-gray-700 mt-4">
        <MenuItem to="./" icon={<FaHome />} label="Dashboard" />
        <MenuItem to="./add" icon={<GiKnifeFork />} label="Add Product" />
        <MenuItem to="./all" icon={<MdPointOfSale />} label="All Products" />
      </div>

      {/* Bottom Section - Logout */}
      <div className="px-2 sm:px-6 mb-6">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 w-full text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded transition-colors"
        >
          <FaSignOutAlt className="text-lg" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, to }) {
  return (
    <NavLink
      to={to || "#"}
      className={({ isActive }) =>
        `flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 cursor-pointer px-4 py-2 rounded ${
          isActive
            ? "text-green-600 bg-green-100"
            : "hover:text-green-600 hover:bg-green-50"
        } transition-colors`
      }
    >
      <div className="text-lg">{icon}</div>
      <span className="hidden sm:inline">{label}</span>
    </NavLink>
  );
}
