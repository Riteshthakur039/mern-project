import React from "react";
import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";
import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main className="bg-black-100">
        <section className="py-16 container mx-auto flex flex-wrap justify-between items-center max-w-screen-xl  p-4">
          <div className="container grid grid-two-cols items-center">
            {/* Hero content */}
            <div className="text-center md:text-left mb-8 md:mb-0 md:order-2 md:w-1/2">
              <p className="text-3xl md:text-4xl text-white-500 py-4">
                Welcome,
                {user ? ` ${user.username} to our website` : ` to our website`}
              </p>
              <h1 className="text-4xl text-red-800 md:text-5xl font-bold mb-4">
                Why Choose Us?
              </h1>
              <p className="text-white-700 text-lg md:text-2xl mb-4">
                <span className="font-bold text-green-600">Expertise:</span> Our team consists
                of experienced IT professionals who are passionate about staying
                up-to-date with the latest industry trends.
              </p>
              <p className="text-white-700 text-lg md:text-2xl mb-4">
                <span className="font-bold text-green-600">Customization:</span> We understand
                that every business is unique. That's why we create solutions
                that are tailored to your specific needs and goals.
              </p>
              <p className="text-white-700 text-lg md:text-2xl mb-4">
                <span className="font-bold text-green-600">Customer-Centric Approach:</span> We
                prioritize your satisfaction and provide top-notch support to
                address your IT concerns.
              </p>
              <p className="text-white-700 text-lg md:text-2xl mb-4">
                <span className="font-bold text-green-600">Affordability:</span> We offer
                competitive pricing without compromising on the quality of our
                services.
              </p>
              <p className="text-white-700 text-lg md:text-2xl mb-4">
                <span className="font-bold text-green-600">Reliability:</span> Count on us to
                be there when you need us. We're committed to ensuring your IT
                environment is reliable and available 24/7.
              </p>
              <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <NavLink to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2">
                  Connect Now
                </NavLink>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero image */}
            <div className="order-1 md:order-2 md:w-1/2">
              <img
                src="/images/about.png"
                alt="coding buddies"
                className="w-full md:max-w-lg mx-auto"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Analytics section */}
      <Analytics />
    </>
  );
};

export default About;
