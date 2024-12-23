
import { FEATURES } from '@/shared/constant';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">

      <section id="home" className="bg-blue-600 text-white text-center py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-semibold">Welcome to Our Parking System</h1>
          <p className="mt-4 text-lg">Find parking spots with ease and reserve your space instantly.</p>
          <div className="mt-6">
            <Link to="/parking-lot" className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg ">Book Now</Link>
          </div>
        </div>
      </section>


      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Our Features</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              FEATURES?.map((item, index) => {
                return (
                  <div className="bg-white p-6 rounded-lg shadow-lg" key={index}>
                    <h3 className="text-xl font-semibold text-blue-600">{item?.title}</h3>
                    <p className="mt-4 text-gray-600">{item?.desc}</p>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>



      {/* Footer Section */}
    </div>
  );
};

export default HomePage;
