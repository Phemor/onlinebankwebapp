// src/components/Sidebar.js
import { FaUser, FaHistory, FaSignOutAlt, FaBars } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-1/7 bg-white shadow-lg p-5 h-screen">
      {/* <h2 className="text-2xl font-bold mb-6"></h2> */}
      <ul className="space-y-6 grid place-content-start">
        <li className="flex justify-between w-32 hover:bg-slate-300 px-4 items-center h-9 rounded-lg">
          <FaUser /> My Profile
        </li>
        <li className="flex justify-between w-32 hover:bg-slate-300 px-4 items-center h-9 rounded-lg">
          <FaHistory /> Activities
        </li>
        <li className="flex justify-between w-32 hover:bg-slate-300 px-4 items-center h-9 rounded-lg">
          <FaSignOutAlt /> Logout
        </li>
      </ul>
      <button className="absolute bottom-10 left-5 text-gray-500 flex items-center">
       <FaGear className="mr-3" /> Settings
      </button>
    </div>
  );
};

export default Sidebar;
