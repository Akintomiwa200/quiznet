import React, { useState } from 'react';
import { useUserData } from '../../context/UserContext';
import axios from 'axios';
import Mail from '../../assets/mail.png';
import Key from '../../assets/key.png';
import ID from '../../assets/d-card.png';
import Loading from '../../components/loading/Loading'; // Import the Loading component
import { ClipLoader } from 'react-spinners'; // Import ClipLoader

const Input = () => {
  const { users, updateUser } = useUserData(); // Destructure users from useUserData

  const [formData, setFormData] = useState({
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  const [loading, setLoading] = useState(false); // State to control loading animation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation
    try {
      const response = await axios.post(
        'https://questionsapi.onrender.com/auth/signup',
        formData
      );
      console.log('Signup successful:', response.data);
      updateUser([...users, formData]);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      // Navigate after a delay to allow time for the loading animation
      setTimeout(() => {
        window.location.href = '/login'; // Redirect to the next page
      }, 1000); // Adjust the delay as needed
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // Stop loading animation
    }
  };




  const handleClear = () => {
    setFormData({
      password: '',
      email: ''
    });
  };


  return (
    <div className='w-[30vw] m-0 p-0 flex flex-col justify-content jusitfy-center items-center'>
      {loading && <Loading />}
      <form className='w-[30vw] flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-[100vw] lg:w-[30vw] items-center">
          <div className="flex w-[80vw] lg:w-[25vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='firstName' className="flex items-center w-full">
              <span className="absolute left-2"><img src={ID} alt='' /></span>
              <input
                type='text'
                placeholder=' Type your First Name'
                name='firstName'
                id='firstName'
                className='pl-8 w-full'
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex w-[80vw] lg:w-[25vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='lastName' className="flex items-center w-full">
              <span className="absolute left-2"><img src={ID} alt='' /></span>
              <input
                type='text'
                placeholder=' Type your Last Name'
                name='lastName'
                id='lastName'
                className='pl-8 w-full'
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex w-[80vw] lg:w-[25vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='email' className="flex items-center w-full">
              <span className="absolute left-2"><img src={Mail} alt='' /></span>
              <input
                type='email'
                placeholder=' Type your email'
                name='email'
                id='email'
                className='pl-8 w-full'
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex w-[80vw] lg:w-[25vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='password' className="flex items-center w-full">
              <span className="absolute left-2"><img id='key' src={Key} alt='' /></span>
              <input
                type='password'
                placeholder='Type your password'
                id='password'
                className='pl-8 w-full'
                value={formData.password}
                onChange={handleChange}
                name='password'
              />
            </label>
          </div>
        </div>
        <div className='flex gap-8 mt-4 w-[40vw] justify-center items-center'>
          <button id='sub' className='px-6 py-2 bg-blue-500 text-white' disabled={loading}>
            {loading ? (
              <ClipLoader size={30} color="#ccc" />
            ) : (
              "submit"
            )}
          </button>
          <button type='button' className='px-6 bg-red-500 text-white py-2' onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
