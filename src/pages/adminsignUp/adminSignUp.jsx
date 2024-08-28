import React from 'react';
import LoginImage from '../../assets/imageLogin.png'
import Input from './Input';
import { Link } from 'react-router-dom'
import Users from '../../assets/Vector.png';
import Header from '../../components/navigation/topnav/Header'
const AdminSignUp = () => {
    return (
        <div className='w-[100vw] flex-col h-[100vh] flex items-center'>
            <Header />
            <div className='lg:bg-yellow-100 h-[70vh] flex flex-col lg:flex-row w-[70vw] items-center rounded-xl justify-evenly'>
                <div className=' w-[100vw] lg:w-[40vw] flex flex-col jusify-center items-center'>

                    <div className="flex flex-col items-center">
                        <div className="">
                            <h3 className="h-[100px] w-[300px] bg-white flex flex-col justify-around items-center mb-8 rounded-xl p-0 m-0">
                                <img className='w-4' src={Users} alt="" />
                                <h4 className='text-xl lg:text-xl m-0 p-0'>Register as an Admin</h4>
                            </h3>

                        </div>
                    </div>
                    <div >
                        <Input className='ml-4' />
                    </div>
                    <div className='mt-8'>
                        <h4>If you have an account
                            <Link to='/signinadmin' className='text-blue-700'> click here </Link>
                        </h4>
                    </div>
                </div>
                <div className="hidden lg:flex lg:h-[450px] lg:w-[350px]  mr-">
                    <img id='w-[350px] h-[450px]' src={LoginImage} alt="" />
                </div>
            </div>
        </div >
    )
}

export default AdminSignUp;








