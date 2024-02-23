import React from 'react';

const Analytics = () => {
  
  const coursesSold = 150;
  const servicesUsed = 80;
  const visitorsNumber = 2000;

  return (
    <div className="container mx-auto py-8 justify-between items-center  max-w-screen-xl  p-4">
      <h2 className="text-3xl font-bold mb-6 text-red-800">Analytics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Courses Sold */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Courses Sold</h3>
          <p className="text-3xl font-bold text-indigo-600">{coursesSold}</p>
        </div>
        
        {/* Services Used */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Services Used</h3>
          <p className="text-3xl font-bold text-green-500">{servicesUsed}</p>
        </div>
        
        {/* Visitors Number */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Visitors Number</h3>
          <p className="text-3xl font-bold text-blue-500">{visitorsNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
