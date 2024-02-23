import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <section className="bg-black-100 py-16 container mx-auto flex flex-wrap justify-between items-center max-w-screen-xl  p-4">
      <div className="container text-center">
        <h1 className="text-6xl font-bold text-purple-600 mb-8">Our Services</h1>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;

          return (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="card-img">
                <img
                  src="/images/design.png"
                  alt="our services info"
                  className="w-2/3 h-full object-cover"
                />
              </div>
              <div className="p-4 ">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <p className="text-gray-500 text-xl">{provider}</p>
                  <p className="text-green-600 font-bold text-right tet-xl">{price}</p>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{service}</h2>
                <p className="text-gray-600 text-xl">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
