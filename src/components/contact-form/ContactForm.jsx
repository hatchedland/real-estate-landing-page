import React, { useState } from "react";
import { PageTitle } from "../title/PageTitle";
import { FormAlert } from "../alert/FormAlert";

export const ContactForm = () => {
  const [user, setUser] = useState({
    fullName: "",
    contactNumber: "",
    selectedUnit: "",
  });

  const [alert, setAlert] = useState(null);

  const firebaseurl = "https://real-estate-website-form-default-rtdb.firebaseio.com/UserData.json";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleOptionChange = (option) => {
    setUser({ ...user, selectedUnit: option });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!user.fullName || !user.contactNumber || !user.selectedUnit) {
      setAlert(<FormAlert message="Please fill in all required fields." onClose={() => setAlert(null)} />);
      return;
    }
    
    const fullNameRegex = /^[A-Za-z ]+$/;
    if (!fullNameRegex.test(user.fullName)) {
      setAlert(<FormAlert message="Invalid Full Name. Please use only alphabets and spaces." onClose={() => setAlert(null)} />);
      return;
    }
  
    const contactNumberRegex = /^\d{10}$/;
    if (!contactNumberRegex.test(user.contactNumber)) {
      setAlert(<FormAlert message="Invalid Contact Number. Please enter a 10-digit number." onClose={() => setAlert(null)} />);
      return;
    }
  
    setAlert(<FormAlert message="Submitting form..." onClose={() => setAlert(null)} />);
  
    const { fullName, contactNumber, selectedUnit } = user;
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, contactNumber, selectedUnit }),
    };
  
    try {
      const res = await fetch(`${firebaseurl}`, options);
  
      if (res.ok) {
        setAlert(<FormAlert message="Form Submitted" onClose={() => setAlert(null)} />);
      } else {
        setAlert(<FormAlert message="Not Submitted" onClose={() => setAlert(null)} />);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert(<FormAlert message="An error occurred while submitting the form." onClose={() => setAlert(null)} />);
    }
  };
  

  return (
    <div className="max-w-xl">
      <PageTitle title="Contact us" tagline="Ready to Make Dreams Reality? Let's Connect" />
      <form method="POST">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-200 font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-4 p-2 w-full focus:outline-none bg-black border-b-2 border-gray-600"
            placeholder="Enter your Full Name"
            required
            value={user.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-gray-200 font-bold">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            className="mt-4 p-2 w-full focus:outline-none bg-black border-b-2 border-gray-600"
            placeholder="Enter your Contact Number"
            required
            value={user.contactNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="selectedUnit" className="block text-gray-200 font-bold">
            Select Unit
          </label>
          <div className="mt-4 flex gap-10 items-center flex-wrap">
            {['4 BHK', '3 BHK', '2 BHK', '1 BHK'].map((option) => (
              <div key={option} className="mb-2 flex items-center">
                <input
                  type="radio"
                  className="h-6 w-6 transform scale-120 cursor-pointer"
                  id={option.toLowerCase()}
                  name="selectedUnit"
                  value={option}
                  checked={user.selectedUnit === option}
                  onChange={() => handleOptionChange(option)}
                />
                <label htmlFor={option.toLowerCase()} className="ml-2 text-white font-bold">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white mt-4 py-4 w-full hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      {alert && <div>{alert}</div>}
    </div>
  );
};
