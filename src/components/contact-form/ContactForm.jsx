import React, { useState } from "react";
import { PageTitle } from "../title/PageTitle";

import fecility_brochure from '../../assets/felicity-brochure.pdf'

export const ContactForm = () => {

  const [user, setUser] = useState({
    Name: '',
    Number: '',
    Message: ''
  });

  const firebaseurl = 'https://real-estate-website-form-default-rtdb.firebaseio.com/UserData.json';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleOptionChange = (option) => {
    setUser({ ...user, Message: option });
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
    <div className="max-w-xl">
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
            Select Unit
          </label>
          <div className="mt-4 flex gap-10 items-center flex-wrap">
            {['4 BHK','3 BHK', '2 BHK', '1 BHK'].map((option) => (
              <div key={option} className="mb-2 flex items-center">
                <input
                  type="radio"
                  className="h-6 w-6 transform scale-120 cursor-pointer"
                  id={option.toLowerCase()}
                  name="messageOption"
                  value={option}
                  checked={user.Message === option}
                  onChange={() => handleOptionChange(option)}
                />
                <label htmlFor={option.toLowerCase()} className="ml-2 text-white font-bold">{option}</label>
              </div>
            ))}
          </div>
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
