// AdminUsers.js
import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`users after delete:`, data);

      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`users:`, data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, [AuthorizationToken]);

  return (
    <>
      <section className="p-6 bg-gray-100 h-full">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Admin Users Data
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b border-gray-300 text-red-500">
                    Name
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-green-500">
                    Email
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-black">
                    Phone
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-blue-500">
                    Update
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-orange-500">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((curUser, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="py-2 px-4 text-red-500 text-center">
                      {curUser.username}
                    </td>
                    <td className="py-2 px-4 text-green-500 text-center">
                      {curUser.email}
                    </td>
                    <td className="py-2 px-4 text-black text-center">{curUser.phone}</td>
                    <td className="py-2 px-4 text-blue-500 hover:underline cursor-pointer text-center">
                      <Link to={`/admin/users/${curUser._id}/edit`} className="bg-blue-500 hover:bg-orange-600 text-white font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 mx-auto mb-2 block">
                        Edit
                      </Link>
                    </td>
                    <td className="py-2 px-4 text-red-500 hover:underline cursor-pointer text-center">
                      <button
                        onClick={() => deleteUser(curUser._id)}
                        className="bg-red-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm md:text-lg px-2 md:px-4 py-1 md:py-2 text-center mx-auto mb-2 block"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
