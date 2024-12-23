import Sidebar from "@/pages/Admin/Sidebar";
import { useState } from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { to: "/admin/dashboard", label: "Home", icon: <FaHome /> },
    { to: "/admin/parking-lot", label: "Status", icon: <FaInfoCircle /> },
    { to: "/admin/create-lot", label: "Create Lot", icon: <IoMdAdd />    },
  ];
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} links={links} />
      <main
        className={`flex-1 ${isOpen && "ml-64 px-10"} ${!isOpen && "px-16"}    bg-gray-100 h-screen overflow-y-auto transition-all duration-300`}
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
