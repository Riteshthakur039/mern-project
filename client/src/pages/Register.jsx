import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });

        toast.success("Registration Successful");
        navigate("/");
      } else {
        toast(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <section className="bg-black-100">
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Registration image */}
          <div className="registration-image reg-img">
            <img
              src="/images/register.png"
              alt="a nurse with a cute look"
              className="w-full h-auto"
            />
          </div>

          {/* Registration form */}
          <div className="registration-form p-8">
            <h1 className="text-3xl font-bold mb-3 text-green-800">Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-xl font-medium text-white-600">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  placeholder="Username"
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-xl font-medium text-white-600">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Email"
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-xl font-medium text-white-600">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                  placeholder="Phone"
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-xl font-medium text-white-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
