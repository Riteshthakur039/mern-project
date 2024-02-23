import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <section className="bg-black h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h2 className="text-6xl font-bold mb-4">404</h2>
        <h4 className="text-2xl mb-2">Sorry! Page not found</h4>
        <p className="text-lg mb-4">
          Oops! It seems like the page you're trying to access doesn't exist.
          If you believe there's an issue, feel free to report it, and we'll
          look into it.
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <NavLink
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-lg px-4 py-2 text-center"
          >
            Return Home
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg text-lg px-4 py-2 text-center"
          >
            Report Problem
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error;
