import React from 'react'
import logo from '../../../assets/quizz.png'
import { MdNotifications } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Topnav = () => {
    return (
        <div className='h-[10vh] w-[100vw] px-8 flex justify-between items-center bg-yellow-300'>
            <div className='flex h-[15vh] w-[4vw] justify-center items-center'>
                <Link to='/'>
                    <img src={logo} alt="" className='bg-white w-16 rounded-full' />
                </Link>
            </div>
            <div>
                <div className='flex gap-4 justify-center items-center'>
                    <span className='cursor-pointer'>
                        <MdNotifications className='text-[2em]' />
                        <h5 className='absolute bg-red-500 rounded-full h-8 w-8 flex justify-center items-center translate-y-[-3em] translate-x-[0.5em]'>2</h5>
                    </span>
                    <h4>akintomiwa</h4>
                    <img src={logo} alt="" className='w-12 rounded-full border-4 border-white' />
                </div>
            </div>
        </div>
    )
}

export default Topnav
