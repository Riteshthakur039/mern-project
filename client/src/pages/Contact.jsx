import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-16 container mx-auto p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="contact-img">
          <img
            src="/images/support.png"
            alt="we are always ready to help"
            className="w-full h-auto"
          />
        </div>

        <section className="section-form">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
            <div className="mb-4">
              <label htmlFor="username" className="block text-xl font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-xl font-medium text-gray-600">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                className="w-full mt-1 p-2 border rounded-md resize-none"
                rows="6"
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-lg px-4 py-2 mt-4">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>

      <div className="container my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md shadow-md"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
