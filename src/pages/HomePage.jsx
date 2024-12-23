
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Navbar */}
      <header className="bg-blue-600 p-4 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold">Parking System</div>
          <nav className="space-x-6">
            <a href="#home" className="hover:text-gray-300">Home</a>
           
            <Link to="/admin" className="hover:text-gray-300">Admin</Link>
            <Link to='/login' className="hover:text-gray-300">Login</Link>
            <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-600 text-white text-center py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-semibold">Welcome to Our Parking System</h1>
          <p className="mt-4 text-lg">Find parking spots with ease and reserve your space instantly.</p>
          <div className="mt-6">
            <Link to="/park-vehicle" className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg ">Book Now</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Our Features</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Real-Time Availability</h3>
              <p className="mt-4 text-gray-600">See available parking spots in real-time and reserve them instantly.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Easy Booking</h3>
              <p className="mt-4 text-gray-600">Book parking spots with just a few clicks and get directions to your spot.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Affordable Pricing</h3>
              <p className="mt-4 text-gray-600">Choose parking spots that fit your budget, with transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Parking System | All Rights Reserved</p>
          <div className="mt-4">
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a> 
            <a href="#terms" className="hover:text-gray-400"> Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
