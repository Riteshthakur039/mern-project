import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <header className="">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-6 max-w-screen-xl  p-4 ">
          <div className="">
            <NavLink className='text-4xl font-bold' to="/">Web Icons</NavLink>
          </div>

          <nav className="flex items-center space-x-6">
            <ul className="text-2xl flex items-center justify-center space-x-8 ">
              <li className=''>
                <NavLink to="/" className="hover:text-blue-800">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-blue-800">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-blue-800">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="hover:text-blue-800">
                  Service
                </NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" className="hover:text-blue-800">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" className="hover:text-blue-800">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="hover:text-blue-800">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
