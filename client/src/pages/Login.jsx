import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
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
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        toast.success("Login Successful");

        storeTokenInLS(res_data.token);

        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-black h-screen text-white">
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Login image */}
          <div className="registration-image reg-img">
            <img
              src="/images/login.png"
              alt="a nurse with a cute look"
              className="w-full h-auto"
            />
          </div>

          {/* Login form */}
          <div className="registration-form p-8">
            <h1 className="text-3xl font-bold mb-3 text-green-700">Login Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-xl font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Email"
                  className="w-full mt-1 p-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-xl font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                  className="w-full mt-1 p-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-lg md:text-2xl px-4 md:px-5 py-2 md:py-2.5 text-center me-2 mb-xl">
                Login Now
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
