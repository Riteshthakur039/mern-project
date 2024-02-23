// AdminContacts.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        toast.success("Deleted Successfully");
      } else {
        toast.error("Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, [AuthorizationToken]);

  return (
    <section className="p-6">
      <h1 className="text-4xl font-bold mb-4">Admin Contact Data</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactData.map((currContactData, index) => {
          const { username, email, message, _id } = currContactData;

          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-xl font-semibold mb-2">{username}</p>
              <p className="text-gray-600 mb-2">{email}</p>
              <p className="text-gray-700 mb-4">{message}</p>
              <button
                onClick={() => deleteContactById(_id)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-lg px-4 py-2"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdminContacts;
