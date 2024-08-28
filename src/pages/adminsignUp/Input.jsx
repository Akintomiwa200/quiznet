// import React, { useState } from 'react';
// import { useUserData } from '../../context/UserContext';
// import axios from 'axios';
// import Mail from '../../assets/mail.png';
// import Key from '../../assets/key.png';
// import ID from '../../assets/d-card.png';
// import Loading from '../../components/loading/Loading'; // Import the Loading component

// const Input = () => {
//   const { users, updateUser } = useUserData(); // Destructure users from useUserData

//   const [formData, setFormData] = useState({
//     password: '',
//     companyemail: '',
//     firstName: '',
//     lastName: '',
//     companyname: '',
//     companyaddress: '',
//     companyphone: '',
//     companycatergory: '',
//   });

//   const [loading, setLoading] = useState(false); // State to control loading animation

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading animation
//     try {
//       const response = await axios.post(
//         'https://questionsapi.onrender.com/auth/signup',
//         formData
//       );
//       console.log('Signup successful:', response.data);
//       updateUser([...users, formData]);
//       setFormData({
//         password: '',
//         companyemail: '',
//         firstName: '',
//         lastName: '',
//         companyname: '',
//         companyaddress: '',
//         companyphone: '',
//         companycatergory: '',
//       });
//       // Navigate after a delay to allow time for the loading animation
//       setTimeout(() => {
//         window.location.href = '/login'; // Redirect to the next page
//       }, 1000); // Adjust the delay as needed
//     } catch (error) {
//       console.error('Signup failed:', error.response ? error.response.data : error.message);
//     } finally {
//       setLoading(false); // Stop loading animation
//     }
//   };




//   const handleClear = () => {
//     setFormData({
//       password: '',
//       companyemail: '',
//       firstName: '',
//       lastName: '',
//       companyname: '',
//       companyaddress: '',
//       companyphone: '',
//       companycatergory: '',
//     });
//   };


//   return (
//     <div className='w-[40vw] m-0 p-0 flex flex-col justify-content jusitfy-center items-center'>
//       {loading && <Loading />}
//       <form className='w-[35vw] flex flex-col justify-center items-center pl-4' onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-4 w-[100vw] lg:w-[42vw] lg:flex-row lg:flex-wrap items-center">
//           <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
//             <label htmlFor='firstName' className="flex items-center w-full">
//               <span className="absolute left-2"><img src={ID} alt='' /></span>
//               <input
//                 type='text'
//                 placeholder=' Type your First Name'
//                 name='firstName'
//                 id='firstName'
//                 className='pl-16 w-full'
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
//             <label htmlFor='lastName' className="flex items-center w-full">
//               <span className="absolute left-2"><img src={ID} alt='' /></span>
//               <input
//                 type='text'
//                 placeholder=' Type your Last Name'
//                 name='lastName'
//                 id='lastName'
//                 className='pl-8 w-full'
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
//             <label htmlFor='companyname' className="flex items-center w-full">
//               <span className="absolute left-2"><img src={ID} alt='' /></span>
//               <input
//                 type='text'
//                 placeholder=' Company Name'
//                 name='companyname'
//                 id='companyname'
//                 className='pl-8 w-full'
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
//             <label htmlFor='companyaddress' className="flex items-center w-full">
//               <span className="absolute left-2"><img src={ID} alt='' /></span>
//               <input
//                 type='text'
//                 placeholder=' company Address'
//                 name='companyaddress'
//                 id='companyaddress'
//                 className='pl-8 w-full'
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
//             <label htmlFor='companyphone' className="flex items-center w-full">
//               <span className="absolute left-2"><img src={ID} alt='' /></span>
//               <input
//                 type='text'
//                 placeholder=' Company phone number'
//                 name='companyphone'
//                 id='companyphone'
//                 className='pl-8 w-full'
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
//             <label htmlFor='companycategory' className="flex items-center w-full">
//               <span className="absolute left-2"><img src={ID} alt='' /></span>
//               <input
//                 type='text'
//                 placeholder=' Company Category'
//                 name='companycategory'
//                 id='companycategory'
//                 className='pl-8 w-full'
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
//             <label htmlFor='companyemail' className="flex items-center w-full">
//               <span className="absolute left-2"><img src={Mail} alt='' /></span>
//               <input
//                 type='email'
//                 placeholder=' Type your company email'
//                 name='companyemail'
//                 id='companyemail'
//                 className='pl-8 w-full'
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
//             <label htmlFor='password' className="flex items-center w-full">
//               <span className="absolute left-2"><img id='key' src={Key} alt='' /></span>
//               <input
//                 type='password'
//                 placeholder='Type your password'
//                 id='password'
//                 className='pl-8 w-full'
//                 value={formData.password}
//                 onChange={handleChange}
//                 name='password'
//               />
//             </label>
//           </div>
//         </div>
//         <div className='flex gap-8 mt-4 w-[40vw] justify-center items-center'>
//           <button id='sub' className='px-6 py-2 bg-blue-500 text-white' disabled={loading}>Submit</button>
//           <button type='button' className='px-6 bg-red-500 text-white py-2' onClick={handleClear}>Clear</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Input;


// import Dropdown from '../../components/dropdown/Dropdown'
import React, { useState } from 'react';
import { useUserData } from '../../context/UserContext';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { FaEnvelope, FaKey, FaIdCard, FaBuilding, FaPhone, FaTags } from 'react-icons/fa'; // Import React Icons

const Input = () => {
  const { users, updateUser } = useUserData(); // Destructure users from useUserData

  const [formData, setFormData] = useState({
    password: '',
    companyemail: '',
    firstName: '',
    lastName: '',
    companyname: '',
    companyaddress: '',
    companyphone: '',
    companycategory: '',
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
        password: '',
        companyemail: '',
        firstName: '',
        lastName: '',
        companyname: '',
        companyaddress: '',
        companyphone: '',
        companycategory: '',
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
      companyemail: '',
      firstName: '',
      lastName: '',
      companyname: '',
      companyaddress: '',
      companyphone: '',
      companycategory: '',
    });
  };

  return (
    <div className='w-[40vw] m-0 p-0 flex flex-col justify-content jusitfy-center items-center'>
      <form className='w-[35vw] flex flex-col justify-center items-center pl-4' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-[100vw] lg:w-[42vw] lg:flex-row lg:flex-wrap items-center">
          <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='firstName' className="flex items-center w-full">
              <span className="absolute left-2"><FaIdCard /></span>
              <input
                type='text'
                placeholder=' Type your First Name'
                name='firstName'
                id='firstName'
                className='pl-16 w-full'
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='lastName' className="flex items-center w-full">
              <span className="absolute left-2"><FaIdCard /></span>
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
          <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='companyname' className="flex items-center w-full">
              <span className="absolute left-2"><FaBuilding /></span>
              <input
                type='text'
                placeholder=' Company Name'
                name='companyname'
                id='companyname'
                className='pl-8 w-full'
                value={formData.companyname}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='companyaddress' className="flex items-center w-full">
              <span className="absolute left-2"><FaBuilding /></span>
              <input
                type='text'
                placeholder=' Company Address'
                name='companyaddress'
                id='companyaddress'
                className='pl-8 w-full'
                value={formData.companyaddress}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='companyphone' className="flex items-center w-full">
              <span className="absolute left-2"><FaPhone /></span>
              <input
                type='text'
                placeholder=' Company Phone Number'
                name='companyphone'
                id='companyphone'
                className='pl-8 w-full'
                value={formData.companyphone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='companycategory' className="flex items-center w-full">
              <span className="absolute left-2"><FaTags /></span>
              <input
                type='text'
                placeholder=' Company Category'
                name='companycategory'
                id='companycategory'
                className='pl-8 w-full'
                value={formData.companycategory}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='companyemail' className="flex items-center w-full">
              <span className="absolute left-2"><FaEnvelope /></span>
              <input
                type='email'
                placeholder=' Type your company email'
                name='companyemail'
                id='companyemail'
                className='pl-8 w-full'
                value={formData.companyemail}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex w-[80vw] lg:w-[20vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
            <label htmlFor='password' className="flex items-center w-full">
              <span className="absolute left-2"><FaKey /></span>
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
        {/* <Dropdown/> */}
        <div className='flex gap-8 mt-4 w-[40vw] justify-center items-center'>
          <button id='sub' className='px-6 py-2 bg-blue-500 text-white flex items-center justify-center' disabled={loading}>
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
