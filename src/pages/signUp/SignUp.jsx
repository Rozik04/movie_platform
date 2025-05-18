import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setFormData(
        {
    username: '',
    email: '',
    password: '',
  }
    )
    e.preventDefault();
    alert("Successfully Signed Up!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-12 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-6 relative"
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          className="absolute top-5 left-5 flex items-center gap-2 text-gray-400 hover:text-white transition"
          aria-label="Back"
        >
          <FaArrowLeft size={18} />
          <span className="text-sm font-medium select-none">Back</span>
        </button>

        <h2 className="text-3xl text-white font-extrabold mb-6 text-center tracking-wide">
          Sign Up
        </h2>

        <input
          type="text"
          name='username'
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="
            p-3 
            bg-transparent 
            border border-gray-600 
            rounded-xl 
            text-white 
            placeholder-gray-400 
            focus:outline-none 
            transition
          "
        />

        <input
          type="text"
          name='email'
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="
            p-3 
            bg-transparent 
            border border-gray-600 
            rounded-xl 
            text-white 
            placeholder-gray-400 
            focus:outline-none 
            transition
          "
        />

        <input
          type="text"
          name='password'
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
            className="
            p-3 
            bg-transparent 
            border border-gray-600 
            rounded-xl 
            text-white 
            placeholder-gray-400 
            focus:outline-none 
            focus:bg-transparent
            transition
            "

        />

        <button
          type="submit"
          className="
            w-full 
            h-[52px] 
            bg-red-600 
            rounded-2xl 
            text-white 
            font-semibold 
            hover:bg-red-700 
            shadow-lg 
            transition 
            duration-200
            active:scale-95
            select-none
          "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
