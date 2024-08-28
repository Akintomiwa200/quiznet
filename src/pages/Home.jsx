
// import { useState } from 'react';
// import Header from '../components/navigation/topnav/Header';
// import img from '../assets/home.png';
// import { useNavigate } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';

// const Home = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     setLoading(true);
//     setTimeout(() => {
//       navigate('signInAs');
//     }, 500);
//   };

//   return (
//     <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw] '>
//       <Header />
//       <div className='w-[100vw] lg:h-[50vh] flex justify-center items-center'>
//         <div className='w-[60vw] h-[60vh] text-yellow-500 flex flex-col justify-center items-center text-justify '>
//           <h2 className='w-[55vw] text-center text-xl lg:text-4xl mb-16'>
//             Welcome to your professional examination dashboard where you can manage, administer, or conduct assessments with ease.
//           </h2>

//           <button onClick={handleClick} className='w-[150px] h-[60px] border-none rounded bg-yellow-500 text-white'>
//             {loading ? (
//               <ClipLoader size={40} color="#ccc" />
//             ) : (
//               "Let's do it"
//             )}
//           </button>

//         </div>
//       </div>
//       <div className='w-[90vw] my-4'>
//         <img
//           className='w-16 lg:w-[30vh] lg:h-[15vw]'
//           loading="lazy"
//           alt="Professional Examination Dashboard"
//           src={img}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useState } from 'react';ss
import Header from '../components/navigation/topnav/Header';
import img from '../assets/home.png';
import { useNavigate } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('signInAs');
    }, 500); // Simulate a brief delay before navigation
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw]'>
      <Header />
      <div className='w-[100vw] lg:h-[50vh] flex justify-center items-center'>
        <div className='w-[60vw] h-[60vh] text-yellow-500 flex flex-col justify-center items-center text-justify'>
          <h2 className='w-[55vw] text-center text-xl lg:text-4xl mb-16'>
            Welcome to your professional examination dashboard where you can manage, administer, or conduct assessments with ease.
          </h2>

          <button
            onClick={handleClick}
            className='w-[150px] h-[60px] border-none rounded bg-yellow-500 text-white flex justify-center items-center'
            disabled={loading} // Optional: disable button while loading
          >
            {loading ? (
              // <ClipLoader size={40} color="#ccc" />
              'ade'
            ) : (
              "Let's do it"
            )}
          </button>
        </div>
      </div>
      <div className='w-[90vw] my-4 flex justify-center'>
        <img
          className='w-16 lg:w-[30vh] lg:h-[15vw]'
          alt="Professional Examination Dashboard"
          src={img}
        />
      </div>
    </div>
  );
};

export default Home;
