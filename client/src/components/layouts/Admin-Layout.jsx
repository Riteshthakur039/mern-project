// AdminLayout.js
import React from 'react';
import { NavLink, Outlet, Navigate } from 'react-router-dom';
import { FaUser, FaRegListAlt, FaHome } from 'react-icons/fa';
import {FaMessage} from 'react-icons/fa6';
import { useAuth } from '../../store/auth';

const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header className="bg-black-700 p-4">
        <div className="container mx-auto">
          <nav>
            <ul className="flex justify-center">
              <li className="mr-6">
                <NavLink to="/admin/users" className="text-white flex items-center text-lg">
                  <FaUser className="mr-2" /> Users
                </NavLink>
              </li>
              <li className="mr-6">
                <NavLink to="/admin/contact" className="text-white flex items-center text-lg">
                  <FaMessage className="mr-2" /> Contacts
                </NavLink>
              </li>
              <li className="mr-6">
                <NavLink to="/service" className="text-white flex items-center text-lg">
                  <FaRegListAlt className="mr-2" /> Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-white flex items-center text-lg">
                  <FaHome className="mr-2" /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
