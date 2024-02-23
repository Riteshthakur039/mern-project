import React from 'react';
import Analytics from '../components/Analytics';

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <main className="bg-black-100">
        <section className=" py-16 container mx-auto flex flex-wrap justify-between items-center max-w-screen-xl  p-4">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hero-content text-center md:text-left">
              <p className="text-3xl md:text-4xl text-green-500 mb-4">We are the World Best IT Company</p>
              <h1 className="text-2xl md:text-3xl mb-4">Welcome to Web Icon</h1>
              <p className="text-white-700 text-lg md:text-2xl ">
                Are you ready to take your business to the next level with cutting-edge IT solutions?
                Look no further! At Thapa Technical, we specialize in providing innovative IT services
                and solutions tailored to meet your unique needs.
              </p>
              <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <a href="/contact" className=" bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2">
                  Connect Now
                </a>
                <a href="/services" className=" bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2">
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className=" mt-8 md:mt-0">
              <img
                src="/images/home.png"
                alt="coding together"
                className="w-full md:max-w-lg mx-auto"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Analytics section */}
      <Analytics />

      {/* Call-to-action section */}
      <section className="section-hero bg-black-100 py-16 flex flex-wrap justify-between items-center max-w-screen-xl  p-4">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero image */}
          <div className="hero-image mt-8 md:mt-0">
            <img
              src="/images/design.png"
              alt="coding together"
              className="w-full md:max-w-lg mx-auto"
            />
          </div>

          <div className="hero-content text-center md:text-left">
            <p className="text-lg md:text-2xl text-white-500">We are here to help you</p>
            <h1 className="text-3xl text-red-800 md:text-5xl font-bold mb-4">Get Started Today</h1>
            <p className="text-white-700 text-lg md:text-2xl">
              Ready to take the first step towards a more efficient and secure IT infrastructure?
              Contact us today for a free consultation and let's discuss how Thapa Technical can help
              your business thrive in the digital age.
            </p>
            <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <a href="/contact" className=" bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2">
                Connect Now
              </a>
              <a href="/services" className=" bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
