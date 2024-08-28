// import Loading from "../../components/loading/Loading";
// import { useState, useEffect } from 'react'
// import LoginImage from '../../assets/imageLogin.png'
// import Admin from '../../assets/dashicons_admin-users.png';
// import Users from '../../assets/Vector.png';
// import { Link } from 'react-router-dom/dist';
// import Header from '../../components/navigation/topnav/Header'
// const SignInAs = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [isDelayedLoading, setIsDelayedLoading] = useState(false);

//     useEffect({

//     }, 2000)
//     return (
//         <div className='w-[100vw] flex-col h-[100vh] flex items-center'>
//             <Header />
//             <div className='lg:bg-yellow-100 h-[60vh] flex  flex-col lg:flex-row w-[60vw] items-center rounded-xl justify-around'>
//                 <div >

//                     <div className="flex flex-col items-center">
//                         {/* <div id="logo"><img src={img} /></div> */}
//                         <div className='flex flex-col lg:flex-row justify-between gap-8'>
//                             <Link to='/signinadmin'>
//                                 <button className="h-[30vh] w-[80vw] lg:h-[20vh] bg-blue-500 lg:bg-white lg:w-[12vw] flex flex-col justify-center items-center hover:bg-blue-200 rounded-lg ">
//                                     <img id='w-[25px]' src={Admin} alt="" />
//                                     <h4 id='text-[13px] font-bold'>Sign in as Admin</h4>
//                                 </button>
//                             </Link>
//                             <Link to='/login'>
//                                 <button className="h-[30vh] w-[80vw] lg:h-[20vh] bg-blue-500 lg:bg-white lg:w-[12vw] flex flex-col justify-center items-center hover:bg-blue-200 rounded-lg ">
//                                     <img id='w-[25px]' src={Users} alt="" />
//                                     <h4 id='text-[13px] font-bold'>Sign in as Participant</h4>
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 <div className=" hidden lg:flex lg:h-[450px] lg:w-[350px] ">
//                     <img id='w-[350px] h-[450px]' src={LoginImage} alt="" />
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default SignInAs;







import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import Header from '../../components/navigation/topnav/Header';
import LoginImage from '../../assets/imageLogin.png';
import Admin from '../../assets/dashicons_admin-users.png';
import Users from '../../assets/Vector.png';

const SignInAs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate(path);
        }, 2000);
    };

    return (
        <div className='w-[100vw] flex-col h-[100vh] flex items-center'>
            {isLoading && <Loading />}
            <Header />
            <div className='lg:bg-yellow-100 h-[60vh] flex  flex-col lg:flex-row w-[60vw] items-center rounded-xl justify-around'>
                <div>
                    <div className="flex flex-col items-center">
                        <div className='flex flex-col lg:flex-row justify-between gap-8'>
                            <button
                                className="h-[30vh] w-[80vw] lg:h-[20vh] bg-blue-500 lg:bg-white lg:w-[12vw] flex flex-col justify-center items-center hover:bg-blue-200 rounded-lg"
                                onClick={() => handleNavigation('/signinadmin')}
                            >
                                <img id='w-[25px]' src={Admin} alt="" />
                                <h4 id='text-[13px] font-bold'>Sign in as Admin</h4>
                            </button>
                            <button
                                className="h-[30vh] w-[80vw] lg:h-[20vh] bg-blue-500 lg:bg-white lg:w-[12vw] flex flex-col justify-center items-center hover:bg-blue-200 rounded-lg"
                                onClick={() => handleNavigation('/login')}
                            >
                                <img id='w-[25px]' src={Users} alt="" />
                                <h4 id='text-[13px] font-bold'>Sign in as Participant</h4>
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" hidden lg:flex lg:h-[450px] lg:w-[350px] ">
                    <img id='w-[350px] h-[450px]' src={LoginImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SignInAs;

