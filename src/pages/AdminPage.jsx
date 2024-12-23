import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white">
        <div className="flex items-center justify-center py-6">
          <h2 className="text-2xl font-semibold">Admin Panel</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/create-lot" className="block py-3 px-4 hover:bg-white hover:text-blue-600">Create Lot</Link>
            </li>
            <li>
              <Link to="/monitor-bookings" className="block py-3 px-4  hover:bg-white hover:text-blue-600">Monitor Bookings</Link>
            </li>
            <li>
              <Link to="/user-management" className="block py-3 px-4  hover:bg-white hover:text-blue-600">User Management</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
};

export default AdminPage;
