import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Sidebar = ({isOpen,toggleSidebar,links}) => {
  return (
    <aside
      className={`${
        isOpen ? "w-[20vw]" : "w-[4vw]"
      } h-screen bg-blue-600 text-white flex flex-col fixed top-0 left-0 transition-all duration-300`}
    >
     
      <div className="flex items-center justify-between p-4 border-b border-white">
        <span className={`text-xl font-bold transition-all duration-300 ${!isOpen && "hidden"}`}>
          Admin
        </span>
        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-white hover:text-blue-600 p-2 rounded-md"
        >
          <FaBars />
        </button>
      </div>

     
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="flex  items-center space-x-4 py-2 rounded-md hover:bg-white hover:text-blue-600"
          >
            <span className="text-xl ">{link.icon}</span>
            <span
              className={`transition-all duration-300 ${
                !isOpen && "opacity-0 translate-x-[-20px] pointer-events-none "
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
