import React, { useState } from "react";
import { PageTitle } from "../title/PageTitle";

export const ContactForm = () => {
  const [user, setUser] = useState({
    Name: '',
    Number: '',
    Message: ''
  });

  const firebaseurl = 'https://real-estate-website-form-default-rtdb.firebaseio.com/UserData.json';

  // Rest of your component


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Name, Number, Message } = user;


    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Name, Number, Message })
    };

    const res = await fetch(
      `${firebaseurl}`,
      options
    );

    if (res.ok) {
      alert('Form Submitted');
    } else {
      alert('Not Submitted');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <PageTitle title="Contact us" tagline="Ready to Make Dreams Reality? Lets Connect" />

      <form method="POST">
        {['Full Name', 'Contact Number'].map((field) => (
          <div key={field} className="mb-4">
            <label htmlFor={field.toLowerCase()} className="block text-gray-200 font-bold">
              {field}
            </label>
            <input
              type={field === 'Number' ? 'tel' : 'text'}
              id={field.toLowerCase()}
              name={field}
              className="mt-4 p-2 w-full focus:outline-none bg-black border-b-2 border-gray-600"
              placeholder={`Enter your ${field.toLowerCase()}`}
              required
              value={user[field]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-200 font-bold">
            Enter your Query
          </label>
          <input
            type="text"
            id="message"
            name="Message"
            className="mt-1 p-2 w-full h-40 mt-4 p-2 w-full focus:outline-none bg-black border-b-2 border-gray-600"
            placeholder="What do you want to ask about"
            value={user.Message}
            onChange={handleChange}
          />

        </div>

        <button
          type="submit"
          className="bg-red-500 text-white py-4 w-full hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
