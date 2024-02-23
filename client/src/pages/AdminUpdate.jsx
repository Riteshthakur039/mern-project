// AdminUpdate.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

// ... (previous imports)

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { AuthorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const userData = await response.json();
      console.log(`users single data:`, userData);
      setData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, [params.id]); 

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!params.id) {
        console.error("Invalid user ID");
        return;
      }

      const response = await fetch(
        `http://localhost:4000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      const res_data = await response.json();

      if (response.ok) {
        toast.success("Updated Successfully");
      } else {
        toast(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <section className="py-16 container mx-auto p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-8">
          Update User Data
        </h1>
      </div>
  
      <div className="flex justify-center items-center">
        <section className="section-form max-w-xl w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-md shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-xl font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={data.username}
                onChange={handleInput}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
  
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xl font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
  
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-xl font-medium text-gray-600"
              >
                Phone
              </label>
              <input
                type="tel"  
                name="phone"
                id="phone"
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2"
              >
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
}
  export default AdminUpdate;
  
