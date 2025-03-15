/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { IoMdInformationCircleOutline, IoMdSettings } from "react-icons/io";
import {
  IoCloseSharp,
  IoLogInOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if current path matches a menu item
  const isActive = (path) => currentPath === path;

  // Check if any settings submenu is active
  const isSettingsActive = currentPath.startsWith("/setting");

  return (
    <div
      className={`fixed lg:static bg-white text-[#0D0D0D] w-[70%] sm:w-[70%] md:w-[15%] lg:w-[15%] h-screen overflow-y-auto py-5 md:py-0 z-50 transition-transform ${
        isOpen ? "translate-x-0 top-0 left-0 " : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Close Button (Mobile Only) */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 lg:hidden text-white bg-[#0D0D0D] focus:outline-none p-2 rounded-full"
      >
        <IoCloseSharp />
      </button>

      {/* Sidebar Menu */}
      <ul className="mt-10 pl-5 text-[10px]">
        {/* Dashboard Page */}
        <Link to="/">
          <li
            className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/")
                ? "bg-[#FF0000] text-white px-3 py-3 rounded-l-4xl"
                : ""
            }`}
          >
            <RxDashboard className="w-5 h-5" />
            <p className="text-lg font-semibold">Dashboard</p>
          </li>
        </Link>

        {/* User Details Page */}
        <Link to="/user-details">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/user-details")
                ? "bg-[#FF0000] text-white px-3 py-3 rounded-l-4xl"
                : ""
            }`}
          >
            <FaRegUser className="w-5 h-5" />
            <p className="text-lg font-semibold">User Details</p>
          </li>
        </Link>

        {/* Video List Page */}
        <Link to="/videoList">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/videoList")
                ? "bg-[#FF0000] text-white px-3 py-3 rounded-l-4xl"
                : ""
            }`}
          >
            <IoVideocamOutline className="w-5 h-5" />
            <p className="text-lg font-semibold">Video List</p>
          </li>
        </Link>

        {/* Settings */}
        <Link to="/settings">
          <li
            className={`flex justify-between items-center gap-2 mt-5 cursor-pointer py-2 whitespace-nowrap transition-all duration-300 ease-in-out ${
              isSettingsActive
                ? "bg-[#FF0000] text-white pl-3 pr-5 py-3 rounded-l-4xl"
                : ""
            }`}
          >
            <div className="flex flex-row justify-between items-center gap-2">
              <IoMdSettings className="w-5 h-5" />
              <p className="text-lg font-semibold">Settings</p>
            </div>
            <SlArrowDown className="w-5 h-5" />
          </li>
        </Link>

        {/* Settings Submenu */}
        {isSettingsActive && (
          <ul className="text-start py-3 ml-5">
            <Link to="/setting/about-us">
              <li
                className={`py-[5px] flex items-center gap-2 transition-all duration-300 ease-in-out ${
                  isActive("/setting/about-us") ? "text-[#FF0000]" : ""
                }`}
              >
                <IoMdInformationCircleOutline className="w-5 h-5 text-lg font-semibold" />
                <p className="text-lg font-semibold">About Us</p>
              </li>
            </Link>

            <Link to="/setting/privacy-policy">
              <li
                className={`py-2 flex items-center gap-2 transition-all duration-300 ease-in-out ${
                  isActive("/setting/privacy-policy") ? "text-[#FF0000]" : ""
                }`}
              >
                <MdOutlinePrivacyTip className="w-5 h-5 text-lg font-semibold" />
                <p className="text-lg font-semibold">Privacy Policy</p>
              </li>
            </Link>

            <Link to="/setting/terms-and-condition">
              <li
                className={`pb-2 flex items-center gap-2 transition-all duration-300 ease-in-out ${
                  isActive("/setting/terms-and-condition")
                    ? "text-[#FF0000]"
                    : ""
                }`}
              >
                <FaRegBookmark className="w-5 h-5 text-lg font-semibold" />
                <p className="text-lg font-semibold">Terms and Conditions</p>
              </li>
            </Link>
          </ul>
        )}
      </ul>

      {/* Logout Button */}
      <div className="absolute mt-8 md:mt-20 mmd:mt-20 w-full px-5">
        <Link to="/sign-in">
          <button
            className="flex items-center gap-4 w-full py-3 rounded-lg bg-[#a33131] hover:bg-primary duration-200 text-white justify-center "
            // onClick={handleLogout}
          >
            <IoLogInOutline className="w-5 h-5 font-bold" />
            <span>Logout</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
